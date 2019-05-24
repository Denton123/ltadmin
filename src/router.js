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
          name: 'ctripOrder',
          component: () => import( /* webpackChunkName: "ctripCreateOrder" */ '@/views/page/ctripCreateOrder.vue')
        },
        // 飞猪-御道店-加价策略管理
        {
          path: 'hotelMenus/feizhuPriceManager',
          name: 'feizhuPriceManager',
          component: () => import( /* webpackChunkName: "feizhuPriceManager" */ '@/views/page/feizhuPriceManager/feizhuPriceManager.vue')
        },
        // 飞猪-御道监控中心
        {
          path: 'hotelMenus/priceMonitor',
          name: 'priceMonitor',
          component: () => import( /* webpackChunkName: "priceMonitor" */ '@/views/page/priceMonitor/priceMonitor.vue')
        },
        {
          path: 'hotelMenus/modifyPwd',
          name: 'modifyPwd',
          component: () => import( /* webpackChunkName: "roomOrder" */ '@/views/modifyPwd.vue')
        },
        // sql监控
        {
          path: 'companyMenus/sqlMonitor',
          name: 'sqlMonitor',
          component: () => import( /* webpackChunkName: "sqlMonitor" */ '@/views/page/sqlMonitor.vue')
        },
        {
          path: ':lead/:model',
          name: 'Basic',
          component: () => import( /* webpackChunkName: "Basic" */ '@/views/basicModel/basic-content.vue')
        },
        // 酒店详情
        {
          path: '/:lead/detail/:model/:id',
          name: 'Detail',
          component: () => import( /* webpackChunkName: "Detail" */ '@/views/detailModel/detail-content.vue')
        },
        // 酒店匹配
        {
          path: '/:lead/hotelMatch/:model/:id',
          name: 'hotelMatch',
          component: () => import( /* webpackChunkName: "hotelMatch" */ '@/views/hotelMatch/hotelMatch-content.vue')
        },
        // 房型匹配
        {
          path: '/:lead/roomMatch/:model/:id',
          name: 'roomMatch',
          component: () => import( /* webpackChunkName: "roomMatch" */ '@/views/roomMatch/roomMatch-content.vue')
        },
        // 订单详情
        {
          path: '/:lead/orderDetail/:model/:id',
          name: 'orderDetail',
          component: () => import( /* webpackChunkName: "orderDetail" */ '@/views/orderDetail/orderDetail-content.vue')
        },
        // 订单详情
        {
          path: '/:lead/roomOrder/:model/:id',
          name: 'roomOrder',
          component: () => import( /* webpackChunkName: "roomOrder" */ '@/views/roomOrder/roomOrder-content.vue')
        },
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