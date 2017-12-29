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
import Splice from '../view/justsoso/splice.vue'
import Toast from '../view/mintUI/Toast.vue'
import Indicator from '../view/mintUI/Indicator.vue'
import Loadmore from '../view/mintUI/Loadmore.vue'
import Loadmore2 from '../view/mintUI/loadermore2.vue'
import Loadmore3 from '../view/mintUI/loadermore3.vue'
import Infinite from '../view/mintUI/infinte_scroll.vue'
import Cool from '../view/mintUI/cool.vue'


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
    { path: '/splice', component: Splice},
    { path: '/toast', component: Toast},
    { path: '/indicator', component: Indicator},
    { path: '/loadmore', component: Loadmore},
    { path: '/loadmore2', component: Loadmore2},
    { path: '/loadmore3', component: Loadmore3},
    { path: '/infinite', component: Infinite},
    { path: '/cool', component: Cool},



    { path: '*',redirect: '/index', component: Index},

  ]
}
