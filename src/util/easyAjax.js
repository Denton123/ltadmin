/**
 * 全局注册请求方法
 */

import Vue from 'vue'
import axios from 'axios'

export default {
    install() {
        /* 
         全局get方法
         @param vm vue实例
         @param url 接口路径
         @param params 参数
        */
        Vue.prototype.$dataGet = (vm, url, params = {}) => {
            return new Promise((resolve, reject) => {
                axios.get(url, {
                        params: params
                    })
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
         @param vm vue实例
         @param url 接口路径
         @param ret post参数
         @param isFormData 是否需要转为formData形式
        */
        Vue.prototype.$dataPost = (vm, url, ret, isFormData) => {
            return new Promise((resolve, reject) => {
                let headers, form
                // 传入后台的数据是否需要formData形式 
                if (isFormData) {
                    headers = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
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
                axios.post(url, form, headers)
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