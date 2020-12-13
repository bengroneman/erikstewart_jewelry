<template>
  <div class="w-full">
    <JewelryCard
      v-for="(j, index) in jewelry"
      :key="j.node.id"
      class="h-full md:flex mb-24"
      :class="[isEven(index + 1) ? 'flex-row-reverse': '']"
      :jewelry="j"
    />
  </div>
</template>

<script>
import JewelryCard from '@/components/JewelryCard'

export default {
  components: {
    JewelryCard,
  },
  props: {
      jewelry: {
          type: Array,
          required: true
      }
  },

  computed: {
    filterJewelry: function() {
      return 'test'
    },
  },

  methods: {
      isEven(num) {
          if (num <= 0 ) { return false }
          return num % 2 == 0
      }
  },
  }
</script>
