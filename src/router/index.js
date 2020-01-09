import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import city from '../city/city'
import detail from '../detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: city
    },
    {
      path: '/detail/:id',
      name: detail,
      component: detail
    }
  ]
})
