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
  editCategory(params) {
    return axios({
      url: 'https://mallapi.duyiedu.com/category/edit',
      method: 'put',
      params,
    });
  },
  CategoryNum() {
    return axios({
      url: 'https://qcyp1k.api.cloudendpoint.cn/categoryList',
      method: 'post',
    });
  },
};
