<template>
  <div>
    <p style="text-align: center">msg:{{msg}}</p>

    <button @click="changeMsg">点击我改变msg的数据</button>
    <button @click="theOne">点击我弹出弹出框-one</button>
    <button @click="refresh">点击我刷新页面</button>
    <button @click="theTwo">点击我弹出弹出框-two</button>
    <button @click="changevuexmsg">改变全局数据-two</button>
    <p style="text-align: center">获取全局数据： {{asdf}}</p>





    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="content">
        <p>第一个弹出框</p>
        <p>222222222</p>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <div class="content">
        <p>第二个弹出框</p>
        <input type="text" placeholder="请输入姓名"/>
      </div>
    </Pop>
  </div>
</template>
<script >
  import {mapGetters,mapActions} from 'vuex'
  export default {
    props:['itemss'],
    data(){
      return{
        pop1:{
          popTitle:'',
          Drag:false,
          fun:this.pop1fun
        },
        pop2:{
          popTitle:'',
          Drag:true,
          fun:this.pop2fun
        },
        msg:''
      }
    },
    computed:mapGetters(
      ['asdf']
    ),
    methods:{
      ...mapActions(
        ['pop','refresh']
      ),
      theOne(){
        this.pop(['第一个弹出框',this.pop1])
      },
      pop1fun(){
        alert('你点击了第一个弹框的确定-你还可以发送一个ajax')
      },
      theTwo(){
        this.pop(['第二个弹出框',this.pop2])
      },
      pop2fun(){
        alert('你点击了第二个弹框的确定-第二个弹框的内容将发给后台')
      },
      changeMsg(){
        this.msg='我被改变了'
      },
      changevuexmsg(){
        this.asdf='12312313'
      },
    },
    created(){

//      var d=setInterval(function(){
//        var a=new Date().getHours()+""+new Date().getMinutes()+""+new Date().getSeconds();
//        if(a=='95959'){
//          window.location.reload();
//        }else{console.log(a)}
//      },950);
//      function c(aa){
//        clearInterval(aa);
//      }

    },
    mounted:function () {
      this.$nextTick(function () {
        console.log(this.asdf)
      })
    },
    activated(){
      this.msg=this.$route.query.data;
    }




  }
</script>
<style>
</style>
