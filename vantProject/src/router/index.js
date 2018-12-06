import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    }, {
      path: '/HelloWorld',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta: '测试一'
    }, {
      path: '/test',
      component: resolve => require(['../components/test.vue'], resolve),
      meta: '测试二'
    }

  ]
})
