import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VuePageTransition from 'vue-page-transition'
import Transitions from 'vue2-transitions'
import PortalVue from 'portal-vue'
import axios from 'axios'
import Vue2TouchEvents from "vue2-touch-events";

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(Transitions)
Vue.use(PortalVue)
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
