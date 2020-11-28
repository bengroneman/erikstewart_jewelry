<template>
  <Layout>
    <section
      id="terms-conditions"
      class="w-full"
    >
      <div class="md:ml-40 mx-8 mb-24 mt-12">
        <h1 class="heading-1">
          {{ $page.about_page.edges[0].node.page_title }}
        </h1>
        <div class="flex m-4">
          <div
            class="md:w-2/3 w-full bg-white"
            v-html="$page.about_page.edges[0].node.content"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query TermConditions {
  about_page: allSubPages (filter: {path: {eq: "/sub-pages/terms-conditions/" }}) {
    edges {
      node {
        id
        content
        page_title
      }
    }
  }
}
</page-query>

