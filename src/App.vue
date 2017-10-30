<template>
  <div id="app">
    <p style="text-align: center"><button @click="aaa">点击回到主页</button></p>
    <!--<keep-alive>-->
      <router-view></router-view>

    <!--</keep-alive>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    aaa(){
        this.$router.push({path:'/index'})
    }
  },
}
</script>

<style>
  *{margin:0;padding:0;}
  ol,li,ul{
    list-style-type: none;
  }
  .fr{    float: right;}
  .fl{    float: left;}
  .anclear:after{
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
