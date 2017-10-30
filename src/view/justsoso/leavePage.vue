<template>
  <div class="hello">
    <p style="text-align: center">{{msg}}</p>
    <p style="text-align: center">{{canshu}}</p>
    <button @click="test1">test1</button>
    <button @click=""></button>
    <button @click=""></button>
    <button @click=""></button>
    <button @click=""></button>
    <hr>
    <button @click="aaa">v-show</button>
    <button @click="bbb">v-if</button>
    <loading v-show="as"></loading>
    <loading v-if="bb"></loading>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        newsTitle:{},
        msg:'Promise',
        canshu:'789',
        as:true,
        bb:true
      }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        []
      ),
      aaa(){
        this.msg='6666666';
        this.as=!this.as;

      },
      bbb(){
        this.msg='bbbb';
        this.bb=!this.bb;

      },
      test1(){
        return new Promise(function(resolve, reject){

          var timeOut = Math.random() * 2;//0-2随机数
          console.log(timeOut);
          setTimeout(function () {
            if (timeOut < 1) {　//定义　小于1的　视为成功
              console.log('call resolve()...');
              resolve('200 成功');
            }
            else {
              console.log('call reject()...');
              reject(timeOut);
            }
          }, timeOut * 1000);
        }).then(function(res){console.log('resolve　'+res)})
          .catch(function(res){console.log('reject　'+res)})
        //用Ｐromise的原因是　．then和catch这两个函数被分离出来了而且用的是链式调用如果．then中的函数又是一个有回调函数的那就继续用then连接代码更分离更简便

      },
    },
    created(){
//    window.onbeforeunload = function() {

//    }
    },
    mounted(){
      document.onkeydown = function (e) {//键盘按键控制
        e = e || window.event;
        if ((e.ctrlKey/*ctrl+R*/ && e.keyCode == 82) ||e.keyCode == 116) {//F5刷新，禁止
          setTimeout(function () { alert('按下F5或者CTRL+R'); }, 100);//延时提醒，要不alert会导致return false被alert挂起从而浏览器执行了刷新
          return false
        }
      }
      this.canshu=this.$route.query.data;
      console.log(this.canshu);
    },
    updated(){},
    beforeDestroy: function () {

    },
  }
</script>

<style scoped>

</style>
