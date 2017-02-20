// Delete this file after figuring out import paths. Don't let anyone see it.

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/Login'
import Hello from 'components/Hello'
import Redirect from 'components/Redirect'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/redirect',
      name: 'Redirect',
      component: Redirect
    }
  ]
})
