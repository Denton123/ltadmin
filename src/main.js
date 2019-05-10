import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios';

require('@/config/index')
Vue.config.productionTip = false
Vue.prototype.GLOBAL = 'global_'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.isLogin) {
      Axios.get('/sys/user/infoV2').then(res => {
        if (res && res.data.code == 200) {
          window.bdUser = res.data.data
          next()
        } else {
          next('/login')
        }
      }).catch((error) => {
        if (error) next('/login')
      })
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