/**
 * @file: 接口请求 axios基本信息处理：头部信息&超时&拦截器
 * @author: zhuxy
 */
import axios from 'axios'

// 自定义配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.timeout = 60000

// 发送请求之前的拦截器
axios.interceptors.request.use()

// 收到响应之后的拦截器
axios.interceptors.response.use()

function fetch (config) {
    return axios(config)
}

export default fetch
