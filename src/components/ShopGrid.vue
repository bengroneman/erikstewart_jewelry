<template>
  <div class="flex">
    <div class="project" v-for="item in jewelry" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
        <g-image
          :src="item.node.image.src"
          :alt="item.node.name"
          class="thumbnail m-auto"
        />
        <h3 class="text-2xl">{{ item.node.name }}</h3>
        <h3 class="text-xl">$ {{ item.node.price }}</h3>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  // TODO: Format price
  props: {
    jewelry: {
      type: [],
      required: true
    }
  }
}
</script>