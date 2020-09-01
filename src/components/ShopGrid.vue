<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-1" v-for="item in jewelry" :key="item.node.id">
      <g-link :to="item.node.path">
        <g-image
          :src="item.node.image.src"
          :alt="item.node.name"
          class="thumbnail m-auto"
        />
        <h3 class="heading-3">{{ item.node.name }}</h3>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  // TODO: Format price
  props: {
    jewelry: {
      type: Array,
      required: true
    }
  }
}
</script>