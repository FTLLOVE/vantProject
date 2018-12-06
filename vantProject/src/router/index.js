import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/cart',
      component: resolve => require(['../components/cart/index.vue'], resolve),
      meta: '购物车'
    },
    {
      path: '/goods',
      component: resolve => require(['../components/goods/index.vue'], resolve),
      meta: '商品详情'
    },
    {
      path: '/user',
      component: resolve => require(['../components/user/index.vue'], resolve),
      meta: '用户模块'
    }

  ]
})
