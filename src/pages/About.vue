<template>
  <Layout>
    <section class="w-full" id="about">
      <h1 class="text-center text-2xl">About Erik Stewart Jewelry</h1>
      <div class="flex m-4">
        <div class="w-1/2 bg-gray-500 h-full">
          <img 
            :src="$page.about_page.edges[0].node.featured_image.src"
            class="h-full"
          />
        </div>
        <div
          class="w-1/2 p-8 bg-white"
          v-html="$page.about_page.edges[0].node.content"
        >
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query {
  about_page: allSubPages (filter: {path: {eq: "/sub-pages/about/" }}) {
    edges {
      node {
        id
        path
        content
        featured_image
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