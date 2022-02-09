/* eslint-disable no-plusplus */
import Cookies from 'js-cookie';

/**
 * 设置cookie
 * @param {Obj} info
 */
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i++) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

// 获取用户的cookie
export function getCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    email: Cookies.get('email'),
    role: Cookies.get('role'),
  };
}
// 删除cookie
export function removeCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
