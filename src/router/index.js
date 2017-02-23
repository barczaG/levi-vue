import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Hello from 'components/Hello'
import Redirect from 'components/Redirect'
import MainMenu from 'components/MainMenu'

Vue.use(Router)

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
      component: MainMenu
    }
  ]
})
