<template>
  <Default>
    <ContentSection :content="success_content">
      <MagicButton link="/">Back Home</MagicButton>
    </ContentSection>
  </Default>
</template>
<script>
// TODO: hoist default and magicbutton to global scope and clean up components
import Default from '@/layouts/Default'
import ContentSection from '@/components/ContentSection'
import MagicButton from '@/components/MagicButton'

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
    MagicButton,
    Default,
  },
}
</script>
    Default