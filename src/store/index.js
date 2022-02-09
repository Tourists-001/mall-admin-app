import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态 false：不闭合
    collapsed: false,
    // 用户信息
    user: {
      username: '',
      appkey: '',
      role: '',
      email: '',
    },
  },
  // 更改数据
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
  },
  actions: {
    changeCollapsed(ctx) {
      ctx.commit('changeCollapsed');
    },
    changeUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
    },
  },
  modules: {},
});
