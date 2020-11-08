import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, //基础路径,.env.development
  timeout: 5000 //超时时间，5000毫秒
})
export default request  // 导出自定义的axios对象
