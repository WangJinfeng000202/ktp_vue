import request from '@/utils/request'

const prefix = '/front-edu/assignment'

export default {
  getAllAssignment (courseId) {
    return request({
      url: `${prefix}/getAllAssignments/${courseId}`,
      method: 'get'
    })
  },
  createAssignment (assignment) {
    return request({
      url: `${prefix}/createAssignment`,
      method: 'post',
      data: assignment
    })
  },
  modifyAssignment (assignment) {
    return request({
      url: `${prefix}/modifyAssignment`,
      method: 'post',
      data: assignment
    })
  },
  removeAssignment (id) {
    return request({
      url: `${prefix}/removeAssignment/${id}`,
      method: 'delete'
    })
  },
  getById (id) {
    return request({
      url: `${prefix}/getInfo/${id}`,
      method: 'get'
    })
  }
}
