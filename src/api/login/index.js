import fetch from '../axios'


export function login(data) {
  return fetch({
    url: '/xxl/sys/login',
    method: 'post',
    data
  })
}

export function getPng(params) {
  return fetch({
    url: `/xxl/captcha.jpg?uuid=${params.uuid}`,
    method: 'get',
    responseType:'arraybuffer'
  })
}