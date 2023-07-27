import axios from 'axios'

const URL = import.meta.env.VITE_APP_API_URL

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前可以对请求进行一些处理，如添加请求头、验证等
    return config
  },
  function (error) {
    // 对请求错误做处理
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // 对响应数据进行处理
    return response.data
  },
  function (error) {
    // 对响应错误做处理
    return Promise.reject(error)
  }
)

export default instance
