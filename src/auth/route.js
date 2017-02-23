// Delete this file after figuring out import paths. Don't let anyone see it.

// Note: This does not get imported by main.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/Login'
import Hello from 'components/Hello'
import Redirect from 'components/Redirect'
import MainMenu from 'components/MainMenu'

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
    },
    {
      path: '/menu',
      name: 'MainMenu',
      component: MainMenu
    }
  ]
})
