import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
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
          component: () => import( /* webpackChunkName: "Basic" */ '@/views/basicModel/basic-content.vue')
        },
        // 酒店详情
        {
          path: '/hotelMenus/detail/:model/:id',
          name: 'Detail',
          component: () => import( /* webpackChunkName: "Detail" */ '@/views/detailModel/detail-content.vue')
        },
        // 酒店匹配
        {
          path: '/hotelMenus/hotelMatch/:model/:id',
          name: 'hotelMatch',
          component: () => import( /* webpackChunkName: "hotelMatch" */ '@/views/hotelMatch/hotelMatch-content.vue')
        },
        // 房型匹配
        {
          path: '/hotelMenus/roomMatch/:model/:id',
          name: 'roomMatch',
          component: () => import( /* webpackChunkName: "roomMatch" */ '@/views/roomMatch/roomMatch-content.vue')
        },
        // 订单详情
        {
          path: '/hotelMenus/orderDetail/:model/:id',
          name: 'orderDetail',
          component: () => import( /* webpackChunkName: "orderDetail" */ '@/views/orderDetail/orderDetail-content.vue')
        },
        // 订单详情
        {
          path: '/hotelMenus/roomOrder/:model/:id',
          name: 'roomOrder',
          component: () => import( /* webpackChunkName: "roomOrder" */ '@/views/roomOrder/roomOrder-content.vue')
        }
      ],
      meta: {
        requiresAuth: true
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