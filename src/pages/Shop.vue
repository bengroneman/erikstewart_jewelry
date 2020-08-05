<template>
  <Layout>
    <img
      :src="$page.shop_page.edges[0].node.hero.src"
      :height="$page.shop_page.edges[0].node.hero.size.height"
      :width="$page.shop_page.edges[0].node.hero.size.width"
    /> 
    <section class="w-1/2 p-12 flex justify-center">
      <h1 class="text-3xl text-center m-4">
        SHOP
      </h1>
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
  shop_page: allSubPages(filter: {path: {regex: "shop"}}) {
    edges {
      node {
        id
        path
        hero
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