<template>
  <Layout>
    <Hero :content="$page.home_page">
      <MagicButton link="/shop">
        View All
      </MagicButton>
    </Hero>
    <JewelryCard
      v-for="(j, index) in jewelry"
      :key="index"
      class="h-full md:flex mb-24"
      :class="[index % 2 == 0 ? 'flex-row-reverse': '']"
      :jewelry="j"
    />
    <Testimonials />
  </Layout>
</template>

<page-query>
query Home {
	jewelry: allJewelryItem(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
        path
        name
        image
        featured
        content
      }
    }
  },
  posts: allBlogPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  },
  home_page: subPages(path: "/sub-pages/home/") {
    id
    hero_image
    content
    header
    sub_header
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import JewelryCard from "@/components/JewelryCard"
import Testimonials from "@/components/Testimonials"

export default {
  components: {
    Hero,
    JewelryCard,
    Testimonials,
  },

  data () {
    return {
      jewelry: [],
    }
  },

  mounted () {
    this.jewelry = this.$page.jewelry.edges
  },
}
</script>
