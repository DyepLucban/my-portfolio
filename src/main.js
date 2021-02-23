import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTimeline from "@growthbunker/vuetimeline"
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import { library } from '@fortawesome/fontawesome-svg-core'
import icons from './constant/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'jquery'
import 'popper.js'
import './assets/css/app.scss'
import './assets/css/style.css'

library.add( icons )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueTimeline)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
