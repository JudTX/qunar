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
  ],
  // 每次路由时重新定位页面位置
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
