// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1.剥离无效数据 2.处理token失效
// 4. 导出一个函数，调用当前的axios实例发请求，返回值Promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    // axios 的一些配置，baseURL timeout
    baseURL,
    timeout:5000
})

instance.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1. 获取用户信息对象
    const {profile} = store.state.user
    // 2. 判断是否有token
    if(profile.token){
        // 3. 设置token 
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 取出data数据，将来点用接口的时候拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
    // 401 状态码 进入该函数
    if(err.response?.status === 401){
        // 1. 清空本地无效信息
        // 2. 跳转登录页码
        // 3. 跳转需要传参（当前路由地址）给登录页
        store.commit('user/setUser', {})
        // 当前路由地址
        // 组件里：$route.path（不带参数地址） $route.fullPath（带参数完整地址）
        // js模块中：router.currentRoute.fullPath（vue2.0） router.currentRoute.value.fullPath（vue3.0）
        const fullOath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullOath)
    }
    return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
    //  负责发请求： 请求地址 ，请求方式 ，提交的数据
    return instance({
        url,
        method,
        // 1. 如果是get请求 需要使用params来传递submitData
        // 2. 如果不是get请求 需要使用data来传递submitData
        [method.toLowerCase()==='get'?'params':'data']: submitData
    })
}