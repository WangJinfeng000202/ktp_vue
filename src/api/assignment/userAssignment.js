import request from '@/utils/request'

const prefix = '/front-edu/userAssignment'

export default {
  getAllCourseWork (id) {
    return request({
      url: `${prefix}/getAllCourseWork/${id}`,
      method: 'get'
    })
  },

}

export function insertCourseWork (coursework) {
  return request({
    url: `${prefix}/insert`,
    method: 'post',
    data: coursework
  })
}

export function updateCourseWork (coursework) {
  return request({
    url: `${prefix}/update`,
    method: 'post',
    data: coursework
  })
}

export function getCourseWork (userId, assignmentId) {
  return request({
    url: `${prefix}/getCourseWorkInfo/${userId}/${assignmentId}`,
    method: 'get'
  })
}

export function getCourseWorks (courseId, assignmentId) {
  return request({
    url: `${prefix}/getCourseWorks/${courseId}/${assignmentId}`,
    method: 'get'
  })
}

export function getFileList (id) {
  return request({
    url: `${prefix}/getFileList/${id}`,
    method: 'get'
  })
}

export function markScore (item) {
  return request({
    url: `${prefix}/markScore`,
    method: 'post',
    data: item
  })
}
