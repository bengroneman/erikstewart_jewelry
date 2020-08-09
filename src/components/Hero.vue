<template>
    <div class="w-full">
      <div class="m-24">
        <h1 class="text-6xl" v-html="settings.hero_title" />
        <h2 class="text-xl w-1/3" v-html="settings.hero_subtitle" />
        <g-link to="/shop" class="text-uppercase bg-black text-white p-2 mt-2 rounded flex inline">
          View All
        </g-link>
        <img src="/uploads/DSC_3030a.jpg" alt="replace this with query data"/>
      </div>
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
<!-- TODO: find a way to get graphql explore to work offline -->
<!-- TODO: write a query for the home page and pass the data down to this child component may need to rework some the theme file idea...? --> 

<!-- TODO: Optimize images? Or look into using the gridsome quality parameter for images --> 