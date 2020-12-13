<template>
  <Layout>
    <section
      id="about"
      class="w-full"
    >
      <div class="md:ml-40 mx-8 mb-24 mt-12">
        <h1>
          {{ content.header }}
        </h1>
        <h2 class="heading-2">
          {{ content.sub_header }}
        </h2>
      </div>

      <div class="my-12">
        <TwoColumnSection
          v-for="(block, index) in content.content_sections" 
          :key="index"
          :class="{'flex-row-reverse' : !(index % 2 == 0)}"
        >
          <template #leftcolumn>
            <div
              class="py-12 pr-12"
              v-html="block.content"
            />
          </template>
          <template #rightcolumn>
            <g-image
              :src="block.showcase_image.src"
              :alt="block.showcase_image.alt"
              class="inline h-64"
            />
          </template>
        </TwoColumnSection>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query About {
  about_page: allSubPages (filter: {path: {eq: "/sub-pages/about/" }}) {
    edges {
      node {
        featured_image
        header
        sub_header
        content_sections {
          content
          showcase_image
        }
      }
    }
  }
}
</page-query>
<script>
import TwoColumnSection from '@/components/TwoColumnSection'

export default {
  components: {
    TwoColumnSection,
  },
  data() {
    return {
      content: {
        type: Object,
        required: true,
      }
    }
  },
  mounted() {
    this.content = this.$page.about_page.edges[0].node
  },
}
</script>