import request from '@/utils/http'

export const testApi = () => {
  return request({
    url: 'xxx',
    method: 'post'
  })
}
