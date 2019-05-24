import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios';

require('@/config/index')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.isLogin) {
      Axios.get('/sys/user/infoV2').then(res => {
        if (res && res.data.code == 200 && res.data.data !== null) {
          window.bdUser = res.data.data
          next()
        } else {
          // this.$message.warning('登录已生效，请重新登录')
          localStorage.clear()
          next('/login')
        }
      }).catch((error) => {
        if (error) next('/login')
      })
    } else {
      // this.$message.warning('登录已生效，请重新登录')
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