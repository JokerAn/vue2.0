import Load from './loading.vue'
const Loading={
  install:function(Vue){//install  很是重要先记住就行 只有install的组件才能使用Vue.use()!!
    Vue.component('loading',Load)//把load组件注册为全局Vue 的组件
  }
};
export default Loading
