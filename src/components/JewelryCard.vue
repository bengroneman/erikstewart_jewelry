<template>
  <aside>
    <div class="p-4 md:w-1/2 w-full">
      <g-link :to="jewelry.node.path">
        <g-image
          :src="jewelry.node.image.src"
          :alt="jewelry.node.name"
        />
      </g-link>
    </div>
    <div class="bg-gray-200 md:w-1/2 w-full">
      <div class="md:w-2/3 w-full mx-auto md:py-24 p-6">
        <h2>
          {{ jewelry.node.name }}
        </h2>
        <div
          class="text-p pb-4 h-32 overflow-ellipsis overflow-hidden ..."
          v-html="jewelry.node.content"
        />
        <MagicButton :link="`/shop/?${jewelry.node.id}`">
          View
        </MagicButton>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    jewelry: {
      type: Object,
      required: true,
    }
  }
}
</script>
