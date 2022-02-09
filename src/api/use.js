/* eslint-disable object-curly-spacing */
// ? 对于用户的配置
import axios from '@/axios';

export default {
  // 登录
  login(params) {
    return axios({
      url: 'https://qcyp1k.api.cloudendpoint.cn/eveyDayB',
      method: 'post',
      params,
    });
  },
};
