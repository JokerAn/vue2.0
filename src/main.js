// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import routerconfig from './router'
import store from './store'
import './js/jquery.min'
import axios from 'axios'
import Cookies from 'js-cookie'

import Mint from 'mint-ui'//引入mint-ui框架
import 'mint-ui/lib/style.css'//引入mint-ui框架(官网没写 可能是我没找到
// 忘了在哪找的 没有这句话就没样式 必须写)

import urlConfig from './http_config/http_config'

/*********************公共组件--开始********/

import Pop from './components/Pop'
Vue.use(Pop);
import Loading from './components/Loadeing'

Vue.use(Loading);
/*********************公共组件--结束********/

Vue.use(Vuex);
Vue.use(Router);
Vue.use(Mint);//使用mint-ui框架
Vue.config.productionTip = false;

const router=new Router(routerconfig);//这个是配置路由恩
store.state.mutations.getVueRouter=router
Vue.prototype.$axios=axios;
Vue.prototype.$url=urlConfig;
Vue.prototype.$cookies=Cookies;
Vue.prototype.$mint=Mint;//这样就不需要每个页面都去引入一遍mint-ui框架
//
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   // console.log(from);
//   // console.log(next);
//   next();
// });
//
// router.afterEach(() => {
//   // console.log('完成了')
// });


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
