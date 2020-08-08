<template>
    <div class="w-1/2 ml-24">
        <h1 class="text-5xl" v-html="settings.hero_title" />
        <h2 class="text-xl" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>
