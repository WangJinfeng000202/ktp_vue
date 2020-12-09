import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基础路径,.env.development
  timeout: 60000 // 超时时间，5000毫秒
})

export function sendCode (phone) {
  return request({
    url: `/sms/send/${phone}`,
    method: 'get'
  })
}

