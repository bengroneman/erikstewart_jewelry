<template>
    <div class="w-full">
      <div
        class="m-24 flex flex-row bg-contain bg-no-repeat bg-right-top"
        :style="{ backgroundImage: `url(${content.hero_image.src})` }"
        :alt="content.hero_image.alt"
       >
        <div class="w-2/3"> 
          <div class="headers">
            <h1 class="heading-1" v-html="content.header" />
            <h2 class="heading-2" v-html="content.sub_header" />
          </div>
          <div class="content"> 
            <p class="text-p font-body mb-2" v-html="content.content"></p>
            <MagicButton link="/shop">
              View All
            </MagicButton>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import MagicButton from '@/components/MagicButton'

export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: {
    MagicButton
  }
}
</script>
<!-- TODO: find a way to get graphql explore to work offline -->
<!-- TODO: write a query for the home page and pass the data down to this child component may need to rework some the theme file idea...? --> 

<!-- TODO: Optimize images? Or look into using the gridsome quality parameter for images --> 