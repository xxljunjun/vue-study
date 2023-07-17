import fetch from './axios'


export function helloxxl() {
  return fetch({
    url: '/xxl/hello',
    method: 'GET',
  })
}