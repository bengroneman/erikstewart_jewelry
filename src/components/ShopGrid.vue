<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <div
      v-for="item in jewelry"
      :key="item.node.id"
      class="col-span-1 mb-12"
    >
      <g-link
        :id="item.node.name"
        :to="`/shop/?${item.node.id}`"
      >
        <g-image
          :src="item.node.image.src"
          :alt="item.node.name"
          class="m-auto max-w-sm"
        />
        <div class="h-full">
          <h3 class="heading-3 text-center mt-6">
            {{ item.node.name }}
          </h3>
        </div>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jewelry: {
      type: Array,
      required: true,
    },
  },
}
</script>
