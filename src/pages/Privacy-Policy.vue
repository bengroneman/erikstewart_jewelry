<template>
  <Layout>
    <section class="w-full" id="privacy-policy">
      <div class="md:ml-40 mx-8 mb-24 mt-12">
        <h1 class="heading-1">{{ $page.about_page.edges[0].node.page_title }}</h1>
        <div class="flex m-4">
          <div
            class="md:w-2/3 w-full bg-white"
            v-html="$page.about_page.edges[0].node.content"
          >
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query PrivacyPolicy {
  about_page: allSubPages (filter: {path: {eq: "/sub-pages/privacy-policy/" }}) {
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

