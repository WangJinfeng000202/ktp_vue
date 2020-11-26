import request from '@/utils/request'
let prefix ='/front-edu/user-course'
export default {
  topCourse (id) {
    return request({
      url: `${prefix}/topCourse/${id}`,
      method: 'get'
    })
  },
  notTopCourse (id) {
    return request({
      url: `${prefix}/notTopCourse/${id}`,
      method: 'get'
    })
  },
  dropCourse(id){
    return request({
      url:`${prefix}/dropCourse/${id}`,
      method:'delete'
    })
  },
  fileSelf(id) {
    return request({
      url: `${prefix}/fileSelf/${id}`,
      method: 'get'
    })
  },
  recoverCourse(courseId){
    return request({
      url:`${prefix}/recoverCourse/${courseId}`,
      method:'get'
    })
  }
}
