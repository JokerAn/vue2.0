// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
//这中方法适合小项目 额

///////////////////////// 以上是官方写法 ///////////////////////////////////
//这种适合大项目恩
import Hello from '../view/justsoso/Hello.vue'//引入页面 看到了
import Poptest from '../view/frequentlyUse/poptest.vue'
import Index from '../index-2.vue'
import Lunbo from '../view/lunbo/lunbo.vue'
import Lunbo2 from '../view/lunbo/lunbo2.vue'
import Mobile from '../view/justsoso/main.vue'
import Promise from '../view/justsoso/Promise.vue'
import LeavePage from '../view/justsoso/leavePage.vue'


export default {//固定格式
  routes: [//固定格式 跟.when一样恩 注意这个单词 不是router恩
    {path: '/hello',  component: Hello},//这是配置
    {path: '/index',  component: Index},
    { path: '/poptest', component: Poptest},
    { path: '/lunbo', component: Lunbo},
    { path: '/lunbo2', component: Lunbo2},
    { path: '/mobile', component: Mobile},
    { path: '/promise', component: Promise},
    { path: '/leavePage', component: LeavePage},



    { path: '*',redirect: '/index', component: Index},

  ]
}
