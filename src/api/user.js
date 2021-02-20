import request from "../utils/request";
export function login(data) {
  return request({
    url: "/user/phone/login",
    method: "post",
    data
  })
}
