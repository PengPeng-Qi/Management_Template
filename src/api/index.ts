import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

const api = axios.create({
  // 默认地址请求地址，可在 .env.** 文件中进行修改
  baseURL: import.meta.env.VITE_API_URL,
  // 设置请求超时时间
  timeout: 2000,
  // 跨域时候允许携带凭证，浏览器会在跨域请求中包含 cookies
  withCredentials: true
})

// 请求拦截器
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 可以在这里添加认证头部
    // config.headers['Authorization'] = 'Bearer ' + getToken();
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default api
