import getters from './getters';
const state={//数据
  getVueRouter:{},
  asdf:'sdfas'
};
const mutations={//函数
  'refresh':function(state){
    window.location.reload()
  },
  goToPage(states,res){
    states.getVueRouter.push({path:res[0],query:{data:res[1]}});
  },

  pop(states,res){
    res[1].popTitle=res[0];

  },
  // 'fenyedabao':function(state,res){
  //   console.log(res)
  // },
};
export default{state, mutations,getters}
