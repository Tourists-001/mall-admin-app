import Vue from 'vue';
// 引入echarts
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
// 清除默认样式
import '@/assets/css/reset.less';

Vue.use(VCharts);
// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
