import Vue from 'vue'
import App from './App'
import router from './router'
import isPc from '@/util/test'
import store from './store'

require('@/config/index')
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user !== null) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')