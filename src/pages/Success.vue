<template>
  <Layout>
    <ContentSection :content="success_content">
      <MagicButton
        link="/"
        color="light"
      >
        Back Home
      </MagicButton>
    </ContentSection>
  </Layout>
</template>
<script>
import ContentSection from '@/components/ContentSection'

export default {
components: {
    ContentSection,
  },
  data() {
    return {
      success_content: {
        header: "Success",
        sub_header: "Thank you for reaching out, I will be in touch within 48 hours."
      }
    }
  },
}
</script>
