import Vue from 'vue'
import Netflix from './Netflix.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Netflix)
}).$mount('#netflix')
