<template>
    <header class="header bg-gray-e z-50" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
        <div class="ml-24 mr-24 flex items-center h-full justify-between">
            <div class="">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/logo-black.png"
                        :alt="settings.site_name" 
                        class="h-16"
                    />
                </g-link>
            </div>
            <nav class="nav right">
                <g-link class="nav__link" to="/About">About</g-link>
                <g-link class="nav__link" to="/shop">Jewelry</g-link>
                <g-link class="nav__link" to="/bridal">Bridal</g-link>
                <g-link class="nav__link" to="https://etsy.com">Etsy Shop</g-link>
                <a class="nav__link" href="#contact">Say Hi!</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo-black.png"),
        settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
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
.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}
.bg-gray-theme {
    background: #F5F7F7;
}
</style>
