import Cookies from 'js-cookie'

const TokenKey = 'ktp_token'
const userInfo = "ktp_user_info"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  return Cookies.get(userInfo)
}

export function setUser(user) {
  return Cookies.set(userInfo, user)
}

export function removeUser() {
  return Cookies.remove(userInfo)
}
