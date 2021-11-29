import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import { pt } from '@braid/vue-formulate-i18n'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/tdc.css'
import '@/assets/custom.css'
import '@/assets/carousel.css'

Vue.use(BootstrapVue)
Vue.use(VueFormulate,  {
  plugins: [ pt ],
  locale: 'pt'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
