import request from '@/utils/request'

// /front-edu/user-course
export default {
  topCourse (id) {
    return request({
      url: `/front-edu/user-course/topCourse/${id}`,
      method: 'get'
    })
  },
  notTopCourse (id) {
    return request({
      url: `/front-edu/user-course/notTopCourse/${id}`,
      method: 'get'
    })
  },
  dropCourse(id){
    return request({
      url:`/front-edu/user-course/dropCourse/${id}`,
      method:'delete'
    })
  }

}
