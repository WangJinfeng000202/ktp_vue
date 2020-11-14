import request from '@/utils/request'

export default {
  getAllMyCourse (userId) {
    return request({
      url: `/front-edu/course/getAllMyCourse/${userId}`,
      method: 'get'
    })
  },
  joinCourse (joinCourseInfo) {
    return request({
      url: '/front-edu/course/joinCourse',
      method: 'post',
      data: joinCourseInfo
    })
  },
  createCourse (createCourseInfo) {
    return request({
      url: '/front-edu/course/createCourse',
      method: 'post',
      data: createCourseInfo
    })
  },
  topCourse (courseId) {
    return request({
      url: `/front-edu/course/topCourse/${courseId}`,
      method: 'get'
    })
  },
  notTopCourse (courseId) {
    return request({
      url: `/front-edu/course/notTopCourse/${courseId}`,
      method: 'get'
    })
  },
  getById (courseId) {
    return request({
      url: `/front-edu/course/getCourseInfo/${courseId}`,
      method: 'get'
    })
  },
  updateCourse (courseInfo) {
    return request({
      url: '/front-edu/course/updateCourse',
      method: 'post',
      data: courseInfo
    })
  },
  removeCourseCreated(courseId){
    return request({
      url:`/front-edu/course/removeCourse/${courseId}`,
      method:'delete'
    })
  },
  removeCourseJoined(courseId){
    return request({
      url:`/front-edu/course/dropCourse/${courseId}`,
      method:'delete'
    })
  },
}
