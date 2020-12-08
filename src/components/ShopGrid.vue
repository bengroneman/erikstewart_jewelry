<template>
  <div class="">
    <JewelyFilter :categories="categories" />
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
  </div>
</template>
<script>
import JewelyFilter from '@/components/JewelryFilter'

export default {
  components: {
    JewelyFilter
  },

  props: {
    jewelry: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      categories: [],
    }
  },

  mounted()  {
    this.categories = this.getCategories()
  },

  methods: {
    getCategories: function() {
      const categories = this.props.jewelry.map((j) => {
        return j.categories
      })
      console.log(categories)
      return categories
    }
  },
}
</script>
