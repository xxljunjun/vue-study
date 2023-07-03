import fetch from './axios'

// axios 的 GET 请求，用 params 选项向后端传递数据
// axios 的 POST 请求，用 data 选项向后端传递数据

// 和后端联调接口，一般只考虑这三件事儿
// 1、是 GET 还是 POST ？
// 2、URL 是多少？
// 3、怎么传参：总共有哪些参数？哪些是必填参数？哪些是非必填？数据类型？


// 
export function getUser() {
  return fetch({
    url: '/xxl/queryUserList',
    method: 'GET',
  })
}

export function addUser(data) {
  return fetch({
    url: '/xxl/addUser',
    method: 'POST',
    data
  })
}


export function deleteUserById(data) {
  return fetch({
    url: `/xxl/deleteUserById?id=${data.id}`,
    method: 'GET',
  })
}


export function queryUserById(data) {
  return fetch({
    url: `/xxl/queryUserById?user_id=${data.id}`,
    method: 'GET',
  })
}
export function editUser(data) {
  return fetch({
    url: `/xxl/editUser`,
    method: 'POST',
    data
  })
}




