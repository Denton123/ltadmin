import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import Axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.user || '{}')
  },
  mutations: {
    changeUser(state, msg) {
      // console.log(state.user, 'state')
      state.user = msg
    }
  },
  actions: {
    getUser({
      commit
    }) {
      Axios.get('/sys/user/infoV2').then(res => {
        if (res.data.code == 200) {
          // console.log(res)
          commit('changeUser', res.data.data)
          // localStorage.user = JSON.stringify(res.data.data || {})
        }
      }).catch(err => {
        if (err) {
          commit('changeUser', {})
        if (router.currentRoute.matched.some(record => record.meta.requireAuth)) {
          router.push({
            path: '/login',
          })
        }
        }
        
      })
    }
  }
})