import request from '@/utils/request'

export function upload(file){
  return request({
    url:'/oss/upload',
    method:'post',
    data: file
  })
}
