import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

let isPc = true

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'antModel',
      component: () => import(/* webpackChunkName: "antModel" */ '@/views/antModel.vue'),
      children: [
        {
          path: ':lead/:model',
          name: 'Basic',
          component: () => import(/* webpackChunkName: "Basic" */ '@/views/basicModel/basic.vue')
        }
      ],
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/LtIndex',
      name: 'LtIndex',
      component: index,
      children: [
        {
          path: 'message/:model',
          name: 'Basic',
          component: () => import(/* webpackChunkName: "Basic" */ '@/views/basicModel/basic.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
    },
    {
      path: '/404',
      name: 'NoFound',
      component: () => import(/* webpackChunkName: "noFound" */ '@/views/404.vue')
    },
    // {
    //   path: '/antModel',
    //   name: 'antModel',
    //   component: () => import(/* webpackChunkName: "noFound" */ '@/views/antModel.vue'),
    //   children: [
    //     {
    //       path: ':lead/:model',
    //       name: 'Basic',
    //       component: () => import(/* webpackChunkName: "Basic" */ '@/views/basicModel/basic.vue')
    //     }
    //   ]
    // },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "noFound" */ '@/views/404.vue')
    }
  ]
})
