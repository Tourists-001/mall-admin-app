// 产品接口
import axios from '@/axios';

export default {
  getCategory(params) {
    return axios({
      url: 'https://mallapi.duyiedu.com/category/all',
      method: 'get',
      params,
    });
  },
  test(params) {
    return axios({
      url: 'https://qcyp1k.api.cloudendpoint.cn/test',
      method: 'post',
      params,
    });
  },
};
