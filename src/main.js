// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false


import "../static/css/common.css"
import "../static/css/index.css"
import "../static/css/index2.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})