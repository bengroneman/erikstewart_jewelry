<template>
    <div class="w-full">
      <div class="m-24">
        <span class="drop-shadow">
          <h1 class="text-7xl" v-html="settings.hero_title" />
        </span>
        <h2 class="text-5xl" v-html="settings.hero_subtitle" />
        <p class="text-lg w-1/3" v-html="settings.hero_body"></p>
        <MagicButton link="/shop">
          View All
        </MagicButton>
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
  components: {
    MagicButton
  }
}
</script>
<!-- TODO: find a way to get graphql explore to work offline -->
<!-- TODO: write a query for the home page and pass the data down to this child component may need to rework some the theme file idea...? --> 

<!-- TODO: Optimize images? Or look into using the gridsome quality parameter for images --> 