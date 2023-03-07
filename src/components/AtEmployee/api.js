import { post } from 'utils/Request'


export function fetchRecentAtEmp (params) {
  return post('/app/blog/v8/web/getMyAtInfo.do', params || {}, null, {
    contentType: 'application/json;charset=utf-8'
  })
}

export function fetchAtEmployee (params) {
  return post('/app/blog/v8/web/at_getAtUserList.do', params || {}, null, {
    contentType: 'application/json;charset=utf-8'
  })
}

export function fetchAtDept (params) {
  return post('/app/blog/v8/web/at_getAtDepartmentList.do', params || {}, null, {
    contentType: 'application/json;charset=utf-8'
  })
}