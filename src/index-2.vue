<template>
  <div>
    <h1 style="text-align: center">我是主页</h1>
    <button @click="goToPage(['hello','我是hello页面'])">hello页面</button>
    <button @click="goToPage(['poptest','我是弹出框页面'])">poptest页面</button>
    <button @click="goToPage(['lunbo','轮播图'])">轮播图</button>
    <button @click="goToPage(['lunbo2','轮播图2'])">轮播图2</button>
    <button @click="goToPage(['mobile','我是移动主页'])">移动主页</button>
    <button @click="goToPage(['promise','我是Promise'])">Promise</button>
    <button @click="goToPage(['splice','splice...'])">Splice...</button>
    <button @click="goToPage(['leavePage','是否离开页面'])">是否离开页面</button>
    <button @click="refresh">refresh</button>
    <button @click="goToPage(['toast'])">MintUI-Toast</button>
    <button @click="goToPage(['indicator'])">MintUI-Indicator</button>
    <button @click="goToPage(['loadmore'])">MintUI-Loadmore</button>
    <button @click="goToPage(['loadmore2'])">MintUI-下拉刷新</button>
    <button @click="goToPage(['loadmore3'])">MintUI-上拉刷新</button>
    <button @click="goToPage(['infinite'])">MintUI-Infinite</button>
    <button @click="goToPage(['infinite'])">ssssss</button>
    <button @click="goToPage(['cool'])">cool</button>

  </div>
</template>
<script >
  import {mapGetters,mapActions} from 'vuex'
  export default {
    props:['itemss'],
    data(){
      return{

      }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        ['goToPage','refresh']
      ),
    },
    created(){

    },
    mounted(){

    },

  };
</script>
<style></style>
