<template>
  <div class="w-full">
    <div
      v-for="(item, index) in jewelry"
      :key="item.node.id"
      class="h-full md:flex mb-24"
      :class="[isEven(index + 1) ? 'flex-row-reverse': '']"
    >
      <div class="p-4 md:w-1/2 w-full">
        <g-link :to="item.node.path">
          <g-image
            :src="item.node.image.src"
            :alt="item.node.name"
          />
        </g-link>
      </div>
      <div class="bg-gray-200 md:w-1/2 w-full">
        <div class="md:w-2/3 w-full mx-auto md:py-24 p-6">
          <h3 class="heading-2">
            {{ item.node.name }}
          </h3>
          <div
            class="text-p pb-4"
            v-html="item.node.content"
          />
          <MagicButton :link="`/shop/?${item.node.id}`">
            View
          </MagicButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MagicButton from '@/components/MagicButton'

export default {
    components: {
        MagicButton
    },
    // TODO: have the magic button pass a jewelry id to the shop page
    props: {
        jewelry: {
            type: Array,
            required: true
        }
    },
    methods: {
        isEven(num) {
            if (num <= 0 ) { return false }
            return num % 2 == 0
        }
    }
}
</script>
