<template>
    <header
        class="bg-gray-e z-40 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <router-link :to="{ name: 'home' }">
                    <img 
                        src="../../static/logo-black.png"
                        :alt="settings.site_name" 
                        class="h-16"
                    />
                </router-link>
            </div>
            <div class="sm:hidden">
                <button
                    @click="navOpen = !navOpen"
                    type="button"
                    class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                >
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="navOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!navOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="navOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <g-link to="/about/" class="mt-1 block px-2 py-1 text-dark-gray-e font-semibold hover:text-white hover:bg-gray-800 sm:mt-0 sm:ml-2">About</g-link>
            <g-link to="/shop/" class="mt-1 block px-2 py-1 text-dark-gray-e font-semibold hover:text-white hover:bg-gray-800 sm:mt-0 sm:ml-2">Jewelry</g-link>
            <g-link to="/blog/" class="mt-1 block px-2 py-1 text-dark-gray-e font-semibold hover:text-white hover:bg-gray-800 sm:mt-0 sm:ml-2">Blog</g-link>
            <g-link to="https://etsy.com" class="mt-1 block px-2 py-1 text-dark-gray-e font-semibold hover:text-white hover:bg-gray-800 sm:mt-0 sm:ml-2">Shop</g-link>
            <a href="#contact" class="mt-1 block px-2 py-1 text-dark-gray-e font-semibold hover:text-white hover:bg-gray-800 sm:mt-0 sm:ml-2" v-smooth-scroll>Contact</a>
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    justify-content: center;
}
.open > a {
    display: block;
}
.closed {
    display: none;
}
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.bg-gray-theme {
    background: #F5F7F7;
}
</style>
<!-- TODO: dry this code up a bit with tailwind @apply directive -->
