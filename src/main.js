// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import auth from './auth'

// I think this is deprecated
//Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
//console.log(localStorage.getItem('token'))

auth.checkAuth()

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
