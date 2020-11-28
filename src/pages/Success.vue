<template>
  <Layout>
    <ContentSection :content="success_content">
      <MagicButton link="/">Back Home</MagicButton>
    </ContentSection>
  </Layout>
</template>
<script>
import ContentSection from '@/components/ContentSection'

export default {
  data() {
    return {
      success_content: {
        header: "Success",
        sub_header: "Thank you for reaching out, I will be in touch within 48 hours."
      }
    }
  },
  components: {
    ContentSection,
  },
}
</script>
    Default