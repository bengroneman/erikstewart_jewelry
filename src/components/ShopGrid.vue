<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <div class="col-span-1 mb-12" v-for="item in jewelry" :key="item.node.id">
      <g-link :to="item.node.path" :id="item.node.name">
        <g-image
          :src="item.node.image.src"
          :alt="item.node.name"
          class="m-auto max-w-sm"
        />
        <h3 class="heading-3 text-center mt-6">{{ item.node.name }}</h3>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jewelry: {
      type: Array,
      required: true
    }
  }
}
</script>
