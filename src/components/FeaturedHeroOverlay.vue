<template>
  <div class="w-full">
    <div class="md:m-24 m-6 flex flex-row bg-contain bg-no-repeat bg-right-top">
      <div class="md:w-1/2"> 
        <g-image
          :src="jewelry[0].node.image.src"
          :alt="jewelry[0].node.image.alt"
        />
      </div>
      <div class="md:w-1/2 p-12">
        <div class="headers">
          <h1>
            {{ jewelry[0].node.name }}
          </h1>
          <h2 class="heading-2 uppercase font-display">
            {{ jewelry[0].node.price }}
          </h2>
        </div>
        <div class="content"> 
          <slot />
        </div>
      </div>
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="text-3xl z-50"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jewelry: {
      type: Array,
      required: true
    },
  },
}
</script>