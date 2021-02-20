import request from "../utils/request";
// 获取验证码
export function getCaptcha(data) {
  return request({
    url: "http://exam.blog8090.com/captcha/" + data,
    method: "get",
  })
};