import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态 false：不闭合
    collapsed: false,
    // 用户信息
    user: getCookie(),
    // 存储菜单的路由
    menuRoutes: [],
  },
  // 更改数据
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    loginOut(state) {
      state.user = {
        appkey: '',
        email: '',
        role: '',
        username: '',
      };
    },
    MenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed(ctx) {
      ctx.commit('changeCollapsed');
    },
    changeUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    changeLogin({ commit }) {
      commit('loginOut');
      removeCookie();
    },
    changeMenuRoutes({ commit }, routes) {
      commit('MenuRoutes', routes);
    },
  },
  modules: {},
});
