<template>
  <Layout>
      <Hero :content="$page.shop_page" />
      <ShopGrid :jewelry="$page.jewelry.edges"></ShopGrid>
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

export default {
  components: {
    ShopGrid,
    Hero
  },
  async mounted() {
    const id = this.$route.query.keys;
    console.log(id);
  },
}
</script>
