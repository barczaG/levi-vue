import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Hello from 'components/Hello'
import Redirect from 'components/Redirect'
import MainMenu from 'components/MainMenu'

import auth from '../auth'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.checkAuth()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
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
      component: MainMenu,
      beforeEnter: requireAuth
    },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})
