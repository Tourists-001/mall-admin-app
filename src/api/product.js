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
  removeProduct(id) {
    return axios({
      url: 'https://qcyp1k.api.cloudendpoint.cn/remove',
      method: 'delete',
      params: { id },
    });
  },
  addProduct(params) {
    return axios({
      url: 'https://mallapi.duyiedu.com/products/add',
      method: 'post',
      params,
    });
  },
  detail(id) {
    return axios.get(`https://mallapi.duyiedu.com/products/:${id}`);
  },
};
