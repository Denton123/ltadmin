/**
* 全局注册通用方法
*/

import Vue from 'vue'

export default {
    install() {
        let host = ''
        Vue.prototype.$adminUrl = (url) => {
            let regx = /^\/{1,}/g
            url = url.replace(regx, '')
            return host + '/api/' + url
        }

    }
    
}