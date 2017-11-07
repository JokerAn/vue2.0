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
