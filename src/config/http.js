import axios from 'axios'
import router from '../router';

// 拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    return config
}, function (error) {
    // 对请求错误做些什么
    router.push({
        path: '/login',
    })
    return Promise.reject(error)
    // console.log(error)
})

let baseDomain
// 测试环境和开发环境都为api
if (process.env.NODE_ENV === 'development') {
    baseDomain = `/api`
} else {
    baseDomain = `/api`
}
axios.defaults.baseURL = baseDomain
// console.log(baseDomain)
// axios.defaults.baseURL = 'http://test.b.gdltu.com'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code === 500) router.push({path: '/login'})
    if (response.data.code === 200) return response
}, error => {
    return Promise.reject(error)
})