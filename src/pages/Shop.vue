<template>
  <Layout>
    <Hero :content="$page.shop_page" />
    <FeaturedHeroOverlay 
      v-if="has_featured_jewelry"
      :jewelry="getJewelryById(route_query)"
      class="z-20 overlay-"
      @close="has_featured_jewelry = false"
    />
    <ShopGrid
      :jewelry="$page.jewelry.edges"
      :class="has_featured_jewelry ? 'dark-layout z-10': ''"
    />
  </Layout>
</template>

<page-query>
query Page {
  jewelry: allJewelryItem {
    edges {
      node {
        id
        name
        categories
        image
        price
      }
    }
  },
  shop_page: subPages(path: "/sub-pages/shop/") {
    id
    path
    hero_image
    header
    sub_header
    content
  }
}
</page-query>

<script>
import ShopGrid from '@/components/ShopGrid'
import Hero from '@/components/Hero'
import FeaturedHeroOverlay from '@/components/FeaturedHeroOverlay'

export default {

  components: {
    ShopGrid,
    Hero,
    FeaturedHeroOverlay,
  },

  data() {
    return {
      route_query: {
        type: String,
        default: ""
      },
      has_featured_jewelry: false,
      loading: true,
      errored: false,
    }
  },

  async mounted() {
    this.bootup()
  },

  methods: {

    bootup: function() {
      const query_param = this.getQueryParam()
      if (!this.loading) {
        this.route_query = query_param
        this.has_featured_jewelry = true
      } 
    },

    getJewelryId: function() {
      if(this.loading === false) {
        return this.route_query
      } else {
        return false
      }
    },

    hasQueryParam: function() {
      return !this.loading && this.route_query
    },

    getJewelryById: function(id) {
      return this.$page.jewelry.edges.filter((jewelry) => {
        if (jewelry.node.id == id) { 
          console.log(jewelry.node)
          return jewelry.node
        }
      })
    },

    getQueryParam: function() {
      const query = Object.keys(this.$route.query)
      if (!_.isEmpty(query)) {
        this.loading = false
        return query[0]
      } 
    },

  },

}
</script>
<style scoped>
.dark-layout:after {
  content: "";
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
}
.overlay- {
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 85px;
  left: 0;
  background-color: white;
}
</style>
