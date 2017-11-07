export default{
  refresh:({commit})=>{//不带参数
    commit('refresh')
  },
  goToPage:({commit},res)=>{
    commit('goToPage',res)
  },
  pop:({commit},res)=>{
    commit('pop',res)
  },
  autoElement:({commit},res)=>{
    commit('autoElement',res)
  },

  // fenyedabao:({commit},res)=>{//带参数
  //   commit('fenyedabao',res)
  // },
}
