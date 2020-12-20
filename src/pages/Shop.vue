<template>
  <Layout>
    <Hero :content="$page.shop_page" />
    <div class="flex flex-row justify-around w-2/3 lg:w-1/3 m-auto py-12">
      <span
        v-for="(name, index) in jewelry_categories"
        :key="index"
        class="filter"
        @click="filterView(name)"
      >
        {{ name }}
      </span>
    </div>
    <div class="w-full">
      <JewelryCard
        v-for="(j, index) in jewelry"
        :key="index"
        class="h-full md:flex mb-24"
        :class="[index % 2 == 0 ? 'flex-row-reverse': '']"
        :jewelry="j"
      />
    </div>
  </Layout>
</template>

<page-query>
query Page {
  jewelry: allJewelryItem {
    edges {
      node {
        id
        path
        name
        image
        price
        content
        category
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
  },
}
</page-query>

<script>
import Hero from '@/components/Hero'
import JewelryCard from '@/components/JewelryCard'

export default {
  components: {
    Hero,
    JewelryCard,
  },

  data() {
    return {
      loading: true,
      errored: false,
      selectedCategories: [],
      jewelry_categories: {
        type: Array,
        default: () => {
          return ['Bridal', 'Men', 'Fashion', 'Pendants & Necklace', 'Bracelets']
        }
      },
      filters: {
        async filterView() {
          // TODO: Filter jewelry
        }
      },
      jewelry: [],
    }
  },

  mounted() {
    this.jewelry = this.$page.jewelry.edges
    this.jewelry_categories = this.getJewelryCategories()
  },

  methods: {
    getJewelryCategories: function () {
      const jewelry = this.$page.jewelry.edges
      const categories = _.map(jewelry, function(j) {
        return j.node.category
      })
      const clean_categories = _.filter(categories, function(c) {
        return !_.isEmpty(c)
      })
      return _.uniq(clean_categories)
    },
  },
}
</script>
<style scoped>
.filter {
  @apply text-xl bg-gray-200 px-4 py-2 rounded-full text-dark-gray-e lowercase cursor-pointer transition-all;
  &:hover {
    @apply bg-gray-700 text-white;
  }
}
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
