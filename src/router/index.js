import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Search from '@/views/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      exact: true
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      exact: true
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      exact: true
    }
  ]
})
