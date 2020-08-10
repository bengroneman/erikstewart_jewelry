<template>
  <button>
    <g-link :to="link" class="text-uppercase bg-blue-gray-e text-white p-2 mt-2 flex pl-6 pr-6 text-light-e">
      <slot></slot>
    </g-link>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>