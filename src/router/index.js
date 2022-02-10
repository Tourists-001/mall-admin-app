import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Layout/Home.vue';
import Login from '@/views/Layout/Login.vue';
import store from '@/store';
import getMenuRoute from '@/utils/permission';

Vue.use(VueRouter);

const ayncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
  },
  component: Home,
  children: [{
    path: 'list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
    },
    component: () => import('@/views/page/productList.vue'),
  },
  {
    path: 'add',
    name: 'ProductAdd',
    meta: {
      title: '添加商品',
    },
    component: () => import('@/views/page/productAdd.vue'),
  },
  {
    path: 'category',
    name: 'Category',
    meta: {
      title: '商品类目',
    },
    component: () => import('@/views/page/category.vue'),
  }],
}];

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [{
      path: '/index',
      name: 'Index',
      meta: {
        title: '商品描述',
      },
      component: () => import('@/views/page/index.vue'),
    }],
  },
];

const router = new VueRouter({
  routes,
});

// 导航守卫（鉴权）
// eslint-disable-next-line consistent-return
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute(store.state.user.role, ayncRouterMap);
        router.addRoutes(menuRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes));
        isAddRoutes = true;
      }
      return next(); // 进入想要去的页面
    // eslint-disable-next-line no-else-return
    } else {
      return next('/login');
    }
  }
  return next();
});

export default router;
