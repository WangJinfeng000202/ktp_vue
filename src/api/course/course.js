import request from '@/utils/request'

const prefix = '/front-edu/course'

export default {
  getAllMyCourse(userId) {
    return request({
      url: `${prefix}/getAllMyCourse/${userId}`,
      method: 'get'
    })
  },
  joinCourse(joinCourseInfo) {
    return request({
      url: `${prefix}/joinCourse`,
      method: 'post',
      data: joinCourseInfo
    })
  },
  createCourse(createCourseInfo) {
    return request({
      url: `${prefix}/createCourse`,
      method: 'post',
      data: createCourseInfo
    })
  },
  topCourse(courseId) {
    return request({
      url: `${prefix}/topCourse/${courseId}`,
      method: 'get'
    })
  },
  notTopCourse(courseId) {
    return request({
      url: `${prefix}/notTopCourse/${courseId}`,
      method: 'get'
    })
  },
  getById(courseId) {
    return request({
      url: `${prefix}/getCourseInfo/${courseId}`,
      method: 'get'
    })
  },
  getDetailById(courseId) {
    return request({
      url: `${prefix}/getCourseDetailInfo/${courseId}`,
      method: 'get'
    })
  },

  updateCourse(courseInfo) {
    return request({
      url: `${prefix}/updateCourse`,
      method: 'post',
      data: courseInfo
    })
  },
  removeCourseCreated(courseId) {
    return request({
      url: `${prefix}/removeCourse/${courseId}`,
      method: 'delete'
    })
  },
  fileAll(id) {
    return request({
      url: `${prefix}/fileAll/${id}`,
      method: 'get'
    })
  },
  fileSelf(id) {
    return request({
      url: `${prefix}/fileSelf/${id}`,
      method: 'get'
    })
  },
  getAllCourseFiled(userId){
    return request({
      url:`${prefix}/getAllCourseFiled/${userId}`,
      method:'get'
    })
  },
  recoverCourse(courseId){
    return request({
      url:`${prefix}/recoverCourse/${courseId}`,
      method:'get'
    })
  },
  getCourseById(courseId){
    return request({
      url:`${prefix}/getCourseById/${courseId}`,
      methods:'get'
    })
  }
}

export function getCourseById(courseId){
  return request({
    url:`${prefix}/getCourseById/${courseId}`,
    methods:'get'
  })
}
