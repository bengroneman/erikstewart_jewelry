<template>
  <Layout>
    <Hero />
    <JewelryGrid :jewelry="$page.jewelry.edges" />
    <LatestJournals :journals="$page.posts.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	jewelry: allJewelryItem(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
        name
        image
        featured
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
  }
}

</page-query>

<script>
import Hero from "@/components/Hero"
import JewelryGrid from "@/components/JewelryGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    JewelryGrid,
    LatestJournals
  }
}
</script>
