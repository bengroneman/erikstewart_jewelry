<template>
  <footer
    id="footer"
    class="w-full"
  >
    <div class="md:flex md:flex-row">
      <ContactForm class="pb-24 md:w-1/2 px-12 bg-black" />
      <div
        class="w-1/2 bg-cover bg-no-repeat bg-right"
        :style="{ backgroundImage: `url(${$static.contact_page.featured_image.src})`}"
        :alt="$static.contact_page.featured_image.alt"
      />
    </div>

    <div class="h-content justify-evenly flex p-8 bg-blue-gray-e text-white w-full">
      <div class="w-1/6">
        <img
          src="../../static/logo-black.png"
          alt="erik stewart logo"
          class="h-24 mr-3 mt-3 m-auto"
        >
      </div>

      <div class="font-body w-4/5 grid md:grid-cols-4 grid-cols-1 m-auto">
        <div class="content">
          <h3 class="text-white">
            {{ settings.site_name }}
          </h3>
          <p class="font-body text-white">
            by appointment
          </p>

          <p class="font-body text-white">
            {{ settings.address_line_1 }}
          </p>
          <p class="font-body text-white">
            {{ settings.address_line_2 }}
          </p>
        </div>
        <div class="content">
          <span class="h-10 block" />
          <a
            href="mailto:info@erikstewartjewelry.com"
            class="block font-body"
          >info@erikstewartjewelry.com</a>
          <a
            href="tel:+14807347805"
            class="block font-body"
          >{{ settings.phone_number }}</a>
        </div>
        <div class="content-policy">
          <span class="h-10 block" />
          <g-link
            to="/terms-conditions"
            class="block font-body"
          >
            Terms and Conditions
          </g-link>
          <g-link
            to="/privacy-policy"
            class="block font-body"
          >
            Privacy Policy
          </g-link>
        </div>
        <SocialIcons />
      </div>
    </div>
    <span class="flex flex-row justify-center w-full bg-gray-e font-medium font-body text-dark-gray-e py-2">
      © 2020 {{ settings.site_name }}, llc. All rights reserved
    </span>
  </footer>
</template>

<static-query>
query Contact {
  contact_page: subPages(path: "/sub-pages/contact/") {
    id
    featured_image
  }
}
</static-query>

<script>
import ContactForm from "@/components/ContactForm"
import SocialIcons from "@/components/SocialIcons"

export default {
    components: {
        ContactForm,
        SocialIcons
    },
    data() {
        return {
            settings: require("../../data/theme.json"),
            logo: require("../../static/logo-black.png"),
        }
    }
}
</script>
// TODO: parse the phone number to consistently update both the call back and the copy
