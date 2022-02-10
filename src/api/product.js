// 产品接口
import axios from '@/axios';

export default {
  getProductList(params) {
    return axios({
      url: 'https://mallapi.duyiedu.com/products/all',
      method: 'get',
      params,
    });
  },
};
