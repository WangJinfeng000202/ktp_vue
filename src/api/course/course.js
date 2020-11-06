import request from '@/utils/request'

export default {
  getAllMyCourse(userId){
    return request({
      url:`getAllMyCourse/${userId}`,
      method:'get'
    })
  }
}
