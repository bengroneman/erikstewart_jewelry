<template>
    <footer
        class="w-full flex flex-row"
    >
        <ContactForm class="pl-24 pb-24 w-1/2 bg-black" />
        <div
            class="w-1/2 bg-cover bg-no-repeat bg-right"
            :style="{ backgroundImage: `url(${$static.contact_page.featured_image.src})`}"
            :alt="$static.contact_page.featured_image.alt"
        ></div>
    </footer>
</template>

<script>
import ContactForm from "@/components/ContactForm"

export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    },
    components: {
        ContactForm
    }
}
</script>
<static-query>
query Contact {
  contact_page: subPages(path: "/sub-pages/contact/") {
    id
    featured_image
  }
}
</static-query>