import request from '../http/request';

export function getCouponList() {
  return request({
    url: '/sentences',
    method: 'get'
  });
}