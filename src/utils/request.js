import axios from 'axios'

const service = axios.create({
  baseURL:'http:localhost:8001',//api的base_url
  timeout: 20000
})
export default service
