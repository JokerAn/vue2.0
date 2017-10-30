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

  // fenyedabao:({commit},res)=>{//带参数
  //   commit('fenyedabao',res)
  // },
}
