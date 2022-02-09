/* eslint-disable no-console */
import axios from 'axios';

const instance = axios.create({
  // baseURL: ' https://mallapi.duyiedu.com/',
});
// 请求拦截器
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  // eslint-disable-next-line no-else-return
  } else {
    console.log(response);
    return response.data.data;
  }
}, (error) => Promise.reject(error));

export default instance;
