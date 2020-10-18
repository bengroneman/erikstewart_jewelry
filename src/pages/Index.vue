<template>
  <Layout>
    <Hero :content="$page.home_page">
      <MagicButton link="/shop">
        View All
      </MagicButton>
    </Hero>
    <JewelryGrid :jewelry="$page.jewelry.edges" />
  </Layout>
</template>

<page-query>
query Home {
	jewelry: allJewelryItem(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
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
import JewelryGrid from "@/components/JewelryGrid"
import LatestJournals from "@/components/LatestJournals"
import MagicButton from "@/components/MagicButton"

export default {
  components: {
    Hero,
    JewelryGrid,
    LatestJournals,
    MagicButton,
  }
}
</script>
