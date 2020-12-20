<template>
  <button class="pt-4">
    <g-link
      :to="link"
      class="text-uppercase uppercase font-semibold text-xl p-3 mt-2 flex pl-6 pr-6"
      :class="getButtonColor"
    >
      <slot />
    </g-link>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "dark",
    },
  },
  computed: {
    getButtonColor: function() {
      const button_color = this.$props.color
      switch (button_color) {
        case "light":
          return "bg-white text-dark-gray-e"
        case "dark":
          return "bg-blue-gray-e text-white"
        default:
          return "bg-blue-gray-e text-white"
      }
    }
  }
}
</script>
