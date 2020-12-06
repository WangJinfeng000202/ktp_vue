import request from '@/utils/request'

const prefix = '/front-edu'

export default {
  loginAccount (loginInfo) {
    return request({
      url: `${prefix}/login`,
      method: 'post',
      data: loginInfo
    })
  },
  loginPhone (phoneInfo) {
    return request({
      url: `${prefix}/loginPhone`,
      method: 'post',
      data: phoneInfo
    })
  },
  showUserInfo () {
    return request({
      url: `${prefix}/getUserInfo`,
      method: 'get',
    })
  },

}
export function register (userInfo) {
  return request({
    url: `${prefix}/register`,
    method: 'post',
    data: userInfo
  })
}
