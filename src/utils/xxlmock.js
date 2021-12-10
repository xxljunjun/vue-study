import fetch from "./axios";
//mock数据
export function mocktest() {
  return fetch({
    type: "get",
    url: "/parameter",
  });
}

export function gettxtlist() {
  return fetch({
    type: "get",
    url: "/txtlist",
  });
}
