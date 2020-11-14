import request from '@/utils/request'

export default {
  login () {
    return request({
      url: '/login',
      method: 'get',
      data: ''
    })
  }

}
