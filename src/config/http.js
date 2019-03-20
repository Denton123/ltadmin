import axios from 'axios'
import router from '../router';
// Vue.use(axios)
// 全局的axios默认值
axios.defaults.baseUrl = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 自定义实例默认值
// const instance = axios.create({
//     baseUrl: 'https://api.example.com'
// })
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

// 拦截器
// 添加请求拦截器
axios.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    console.log(config)
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.responce.use(response => {
    // 对响应数据做点什么
    if (response.data.code === 500) {
        if (response.data.msg === '请先登录') {
            router.push({
                path: '/login',
            })
        }
        return Promise.reject(response.data)
    }
    if (response.data.code === 200) {
        return response
    }
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})