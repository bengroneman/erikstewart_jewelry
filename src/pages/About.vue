<template>
  <Layout>
    <section class="w-full" id="about">
      <div class="ml-40 mb-24 mt-12">
        <h1 class="heading-1">{{ $page.about_page.edges[0].node.header }}</h1>
        <h2 class="heading-2">{{ $page.about_page.edges[0].node.sub_header }}</h2>
        <div class="flex m-4">
          <div
            class="w-2/3 bg-white"
            v-html="$page.about_page.edges[0].node.content"
          >
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query About {
  about_page: allSubPages (filter: {path: {eq: "/sub-pages/about/" }}) {
    edges {
      node {
        id
        path
        content
        header
        sub_header
      }
    }
  }
}
</page-query>

<script>
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    LatestJournals
  }
}
</script>