// ? 对于用户的配置
import axios from '@/axios';

export default {
  // 登录
  login(params) {
    return axios({
      url: '/passport/login',
      method: 'post',
      params,
    });
  },
  // 获取验证码
  getCode(params) {
    return axios({
      url: '/passport/getCode',
      method: 'post',
      params,
    });
  },
};
