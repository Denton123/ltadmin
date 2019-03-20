import Vue from 'vue'
import App from './App'
import router from './router'
import isPc from '@/util/test'

require('@/config/index')
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (isPc) {
      console.log(isPc, '导航守卫')
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')