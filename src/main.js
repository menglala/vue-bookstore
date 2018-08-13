// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'animate.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render:element=>element(App)
})
