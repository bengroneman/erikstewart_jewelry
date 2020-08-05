<template>
  <Layout>
    <section class="w-1/2 flex justify-center">
      <img 
        :src="$page.shop_page.edges[0].node.hero_image.src"
        :alt="$page.shop_page.edges[0].node.name"
      >
      <ShopGrid :jewelry="$page.jewelry.edges"></ShopGrid>
    </section>
  </Layout>
</template>

<page-query>
query Page {
  jewelry: allJewelryItem {
    edges {
      node {
        id
        name
        image
        price
      }
    }
  },
  shop_page: allSubPages(filter: {path: {eq: "/sub-pages/shop"}}) {
    edges {
      node {
        id
        hero_image
      }
    }
  }
}
</page-query>

<script>
import ShopGrid from '@/components/ShopGrid'

export default {
  components: {
    ShopGrid
  },
}
</script>