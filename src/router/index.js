import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Search from '@/views/Search'
import NotLogin from '@/views/NotLogin'
import Login from '@/views/Login'
import Setting from '@/views/Setting'
import Me from '@/views/Me'
import auth from '../utils/auth'
Vue.use(Router)

function requireAuth (to, from, next) {
  console.log('info', to, from, next)
  if (!auth.loggedIn()) {
    next({
      path: '/notlogin'
    })
  } else {
    next()
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      exact: true,
      meta: {
        requiresAuth: true
      },
      beforeEnter: requireAuth
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      exact: true
    }, {
      path: '/notlogin',
      name: 'notlogin',
      component: NotLogin,
      exact: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      exact: true
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      beforeEnter: requireAuth
    },
    {
      path: '/me/:name',
      name: 'me',
      component: Me,
      beforeEnter: requireAuth
    },
    {
      path: '*',
      name: 'notfound',
      component: Home
    }
  ]
})
