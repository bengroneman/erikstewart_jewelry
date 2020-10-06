<template>
  <div class="flex justify-between">
    <a v-if="settings.twitter" :href="settings.twitter" alt="erik stewart jewelry">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a v-if="settings.instagram" :href="settings.instagram" alt="erik stewart jewelry">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a v-if="settings.pinterest" :href="settings.pinterest" alt="erik stewart jewelry">
      <font-awesome-icon :icon="['fab', 'pinterest']" />
    </a>
    <a v-if="settings.etsy" :href="settings.etsy" alt="erik stewart jewelry">
      <font-awesome-icon :icon="['fab', 'etsy']" />
    </a>
    <a v-if="settings.reddit" :href="settings.reddit" alt="erik stewart jewelry">
      <font-awesome-icon :icon="['fab', 'reddit']" />
    </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
        settings: require("../../data/theme.json"),
    }
  }
}
</script>