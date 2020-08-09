<template>
  <button>
    <g-link :to="link" class="text-uppercase bg-black text-white p-2 mt-2 rounded flex inline">
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