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
  autoElement(states,res){
    var screenW=document.documentElement.clientWidth;
    var screenH=document.documentElement.clientHeight;
    var ress=res.slice(1);
    if(res.includes('.')){
      var anEl=document.getElementsByClassName(ress)[0];
    }else if(res.includes('#')){
      var anEl=document.getElementById(ress);
    }else{
      alert('请传入元素的class或者id');
      return
    }
    var anElw=parseInt(getComputedStyle(anEl).width);
    var anElh=parseInt(getComputedStyle(anEl).height);
    anEl.style.top=(screenH-anElh)/2+'px';
    anEl.style.left=(screenW-anElw)/2+'px';

  },
  // 'fenyedabao':function(state,res){
  //   console.log(res)
  // },
};
export default{state, mutations,getters}
