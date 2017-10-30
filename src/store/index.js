import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);


const store=new Vuex.Store({
  modules:{
    mutations//他最后导出了两个{state,mutation} 所以放到这里面
  },
  actions,

});
export default store
