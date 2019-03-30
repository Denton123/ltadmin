import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let isPc = true
console.log(process.env.BASE_URL)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: () => import( /* webpackChunkName: "index" */ '@/views/index.vue'),
      children: [
        // 携程下单页
        {
          path: 'hotelMenus/ctripOrder',
          name: 'ctripCreateOrder',
          component: () => import( /* webpackChunkName: "Basic" */ '@/views/page/ctripCreateOrder.vue')
        },
        // sql监控
        {
          path: 'companyMenus/sqlMonitor',
          name: 'sqlMonitor',
          component: () => import( /* webpackChunkName: "Basic" */ '@/views/page/sqlMonitor.vue')
        },
        {
          path: ':lead/:model',
          name: 'Basic',
          component: () => import( /* webpackChunkName: "Basic" */ '@/views/basicModel/basic.vue')
        },
      ],
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import( /* webpackChunkName: "login" */ '@/views/login.vue')
    },
    {
      path: '/404',
      name: 'NoFound',
      component: () => import( /* webpackChunkName: "noFound" */ '@/views/404.vue')
    },
    {
      path: '*',
      component: () => import( /* webpackChunkName: "noFound" */ '@/views/404.vue')
    }
  ]
})