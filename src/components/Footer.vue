<template>
    <footer
        class="w-full"
    >
        <div class="flex flex-row">
            <ContactForm class="pl-24 pb-24 w-1/2 px-12 bg-black" />
            <div
                class="w-1/2 bg-cover bg-no-repeat bg-right"
                :style="{ backgroundImage: `url(${$static.contact_page.featured_image.src})`}"
                :alt="$static.contact_page.featured_image.alt"
            ></div>
        </div>
        <div class="h-content flex justify-between p-4 bg-blue-gray-e text-white">
            <img src="" alt="" class="logo" />
            <div class="content">
                <h2 class="heading-3">erik stewart jewelry</h2>
                <p>by appointment</p>
                <p>P.O box 57731</p>
                <p>Tucson, Arizona 85732-7731</p>
            </div>
            <div class="content-contact">
                <a href="mailto:info@erikstewartjewelry.com" class="block">info@erikstewartjewelry.com</a>
                <a href="tel:+14807347805" class="block">(480) 734.7805</a>
            </div>
            <div class="content-policy">
                <g-link to="/term-conditions" class="block">Terms and Conditions</g-link>
                <g-link to="/privacy-policy" class="block">Privacy Policy</g-link>
            </div>
            <div class="social">

            </div>
        </div>
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
