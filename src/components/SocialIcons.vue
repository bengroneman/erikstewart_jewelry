<template>
  <div class="flex md:justify-evenly items-center md:m-0 mt-8 space-x-4">
    <a
      v-if="settings.twitter"
      :href="settings.twitter"
      alt="erik stewart jewelry twitter"
    >
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        class="text-3xl"
      />
    </a>
    <a
      v-if="settings.instagram"
      :href="settings.instagram"
      alt="erik stewart jewelry instagram"
    >
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        class="text-3xl"
      />
    </a>
    <a
      v-if="settings.pinterest"
      :href="settings.pinterest"
      alt="erik stewart jewelry pinterest"
    >
      <font-awesome-icon
        :icon="['fab', 'pinterest']"
        class="text-3xl"
      />
    </a>
    <a
      v-if="settings.etsy"
      :href="settings.etsy"
      alt="erik stewart jewelry etsy"
    >
      <font-awesome-icon
        :icon="['fab', 'etsy']"
        class="text-3xl"
      />
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