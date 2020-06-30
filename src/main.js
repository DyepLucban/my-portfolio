import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTimeline from "@growthbunker/vuetimeline"
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faMapMarkerAlt, faEnvelope, faMobileAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  faHtml5, faCss3Alt, faJs, faPhp, faNodeJs, faLaravel, faVuejs, faGit, faBootstrap,
  faFacebookSquare, faLinkedin, faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'jquery'
import 'popper.js'
import './assets/css/app.scss'
import './assets/css/style.css'

library.add(
  faHtml5, faCss3Alt, faJs, faPhp, faNodeJs, faLaravel, faVuejs, faGit, faDatabase, faBootstrap,
  faMapMarkerAlt, faEnvelope, faMobileAlt, faShareAlt, faFacebookSquare, faLinkedin, faGithubSquare
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueTimeline)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
