import request from '@/utils/request'

export default {
  getAllMyCourse(userId) {
    return request({
      url: `/front-edu/course/getAllMyCourse/${userId}`,
      method: 'get'
    })
  },
  joinCourse(joinCourseInfo) {
    return request({
      url: '/front-edu/course/joinCourse',
      method: 'post',
      data: joinCourseInfo
    })
  }
}
