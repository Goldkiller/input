import request from '../utils/request';

export function query2(params) {
  return request(`/api?q=${params.payload}`)
}
