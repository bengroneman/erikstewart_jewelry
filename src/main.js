import DefaultLayout from '~/layouts/Default.vue';
import MagicButton from '~/components/MagicButton.vue';

import settings from '../data/theme.json';

import VueSmoothScroll from 'vue2-smooth-scroll'
import "@/assets/code-highlight.css"
import "@/assets/fonts.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faPinterest, faEtsy, faFacebook } from '@fortawesome/free-brands-svg-icons'

import '@/assets/main-build.css'

library.add(faUserSecret)
library.add([faTwitter, faInstagram, faPinterest, faEtsy, faFacebook, faTimes])

import _ from 'lodash'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('MagicButton', MagicButton)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  head.bodyAttrs = {
    class: settings.dark_mode ? 'dark' : ''
  };
  head.script.push({
    src: 'http://178.128.190.56:8000/js/plausible.js',
    data_domain: 'erikstewartjewelry.com'
  })
  Vue.use(VueSmoothScroll)
  Vue.use(_)
}
