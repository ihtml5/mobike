import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Search from '@/views/Search'
import NotLogin from '@/views/NotLogin'
import Login from '@/views/Login'
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
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      exact: true,
      meta: {
        requiresAuth: true
      },
      beforeEnter: requireAuth
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      exact: true
    }, {
      path: '/notlogin',
      name: 'NotLogin',
      component: NotLogin,
      exact: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      exact: true
    }
  ]
})
