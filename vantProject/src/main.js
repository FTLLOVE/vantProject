// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import '../static/css/reset.css'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Vant)
// FastClick
FastClick.attach(document.body);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
