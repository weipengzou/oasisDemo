import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/iconfont/iconfont.js'
// import './assets/iconfont/icon.css'
Vue.config.productionTip = false
import axios from 'axios'
// Vue.use(axios)
Vue.prototype.$ajax = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')