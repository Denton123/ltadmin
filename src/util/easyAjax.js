/**
* 全局注册请求方法
*/

import Vue from 'vue'
import axios from 'axios'
// Vue.use(axios)

export default {
    install () {
        /* 
        test
        */
       Vue.prototype.$test = () => {
           console.log('哈哈哈哈')
       }
       /* 
        全局get方法
        @param vm
        @param url
        @param params
       */
       Vue.prototype.$dataGet = (vm, url, params={}) => {
           return new Promise((resolve, reject) => {
               axios.get(vm.$adminUrl(url), {params: params})
                .then((responce) => {
                    resolve(responce)
                })
                .catch((err) => {
                    reject(err)
                })
           })
       }
       /* 
        全局post方法
        @param vm
        @param url
        @param params
       */
      Vue.prototype.$dataPost = (vm, url, ret, isFormData) => {
        return new Promise((resolve, reject) => {
            let headers, form
            // 传入后台的数据是否需要formData形式 
            if (isFormData) {
                headers = {headers: {'Content-Type': 'multipart/form-data'}}
                form = new FormData()
                for (let key of Object.keys(ret)) {
                    if (ret[key] === '' || ret[key] === null) {
                        ret[key] = ''
                    }
                    form.append(key, ret[key])
                }
            } else {
                headers = {}
                form = ret
            }
            axios.post(vm.$adminUrl(url), form, headers)
                .then((responce) => {
                    resolve(responce)
                })
                .catch((err) => {
                    reject(err)
                })
        })
      }
    }
}