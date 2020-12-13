<template>
  <section>
    <transition name="slide-fade">
      <div class="h-full"> 
        <div 
          v-for="i in [currentIndex]"
          :id="`testimonial-${i}`"
          :key="i"
          class="w-full flex bg-light-gray-e justify-center p-12 pb-24"
        >
          <div class="w-2/3 text-4xl">
            <span class="block text-6xl text-dark-gray-e relative -left-2 top-2">"</span>
            {{ currentTestimonial.node.body }}
            <span class="">"</span>
            <span class="block mt-3">- {{ currentTestimonial.node.author }}</span>
            <div class="flex justify-around mt-12">
              <a
                class="prev"
                href="#"
                @click="prev"
              >&#10094;</a>
              <a
                class=""
                href="#"
                @click="next"
              >&#10095;</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<static-query>
query Testimonials {
  testimonials: allTestimonials(sortBy: "author") {
    edges {
      node {
        id
        body
        author
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },

  computed: {
    currentTestimonial: function() {
      const testimonials = this.$static.testimonials.edges
      return testimonials[Math.abs(this.currentIndex) % testimonials.length];
    }
  },

  mounted() {
    this.startSlide()
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 20000)
    },

    next: function() {
      this.currentIndex += 1
    },

    prev: function() {
      this.currentIndex -= 1
    }
  },
}
</script>