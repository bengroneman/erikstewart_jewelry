<template>
  <button>
    <g-link
      :to="link"
      class="text-uppercase uppercase font-semibold p-2 mt-2 flex pl-6 pr-6"
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
    color: "",
  },
  computed: {
    getButtonColor: function() {
      const button_color = this.$props.color
      switch (button_color) {
        case "light":
          return "bg-white text-dark-gray-e"
          break
        case "dark":
          return "bg-blue-gray-e text-white"
          break
        default:
          return "bg-blue-gray-e text-white"
          break
      }
    }
  }
}
</script>
