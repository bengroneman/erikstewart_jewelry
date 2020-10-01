import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import VueSmoothScroll from 'vue2-smooth-scroll'
import "@/assets/code-highlight.css"
import "@/assets/tailwind.css"
import "@/assets/fonts.css"

import "@/assets/main-build.css"


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  Vue.use(VueSmoothScroll)
}
