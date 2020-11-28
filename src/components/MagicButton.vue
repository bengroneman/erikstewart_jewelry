<template>
  <button>
    <g-link
      :to="link"
      class="text-uppercase uppercase font-semibold bg-blue-gray-e text-white p-2 mt-2 flex pl-6 pr-6 text-light-e"
    >
      <slot></slot>
    </g-link>
  </button>
</template>

<script>
// TODO: add color props
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    color: "",
  }
}
</script>
