<template>
  <header
    class="bg-gray-e z-40 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <g-link :to="{ name: 'home' }">
          <img 
            src="../../static/logo-black.png"
            :alt="settings.site_name" 
            class="h-16"
          >
        </g-link>
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          @click="navOpen = !navOpen"
        >
          <svg
            class="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              v-if="navOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!navOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="navOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <g-link
        to="/about"
        class="g-link"
      >
        About
      </g-link>
      <g-link
        to="/shop"
        class="g-link"
      >
        Jewelry
      </g-link>
      <g-link
        to="/blog"
        class="g-link"
      >
        Blog
      </g-link>
      <a
        to="https://etsy.com/"
        class="g-link"
      >Shop</a>
      <a
        v-smooth-scroll
        href="#contact"
        class="g-link"
      >Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo-black.png"),
        settings: require("../../data/theme.json"),
        navOpen: false
    }
  }
}
</script>
<style scoped>
.open {
  @apply h-full w-full flex flex-col m-8 justify-center;
}
.open > a {
  @apply block;
}
.closed {
  @apply hidden;
}
.header {
  @apply relative h-24 z-10;
}
.header.sticky {
  @apply fixed top-0 left-0 w-full;
}
.header > .container {
  @apply flex justify-between items-center h-full;
}
.home-link {
  @apply no-underline
}
.site-name {
  @apply text-sm tracking-wider no-underline uppercase font-bold;
}
.g-link { 
  @apply mt-1 block px-2 py-1 text-dark-gray-e font-semibold;
  &:hover { 
    @apply text-white bg-gray-800; 
  }
}
@responsive {
  .sm\:.g-link { 
    @apply mt-0 ml-2
  }
}
.bg-gray-theme {
  background: #F5F7F7;
}
</style>
