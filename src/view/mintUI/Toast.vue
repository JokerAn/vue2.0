<template>
  <div class="hello">
    <p class="contenst">'简短的' 消息提示框，支持'自定义位置'、'持续时间' 和 '样式'。</p>
    <p class="contenst">切记 这些仅仅是 “提示”  不会有遮照蹭 也不需要！</p>
    <br>
    <button @click="a1">简单提示</button>
    <button @click="a2">设定位置提示</button>
    <button @click="a3">带图标提示</button>
    <br>
    <button @click="a4">带图标提示需要手动关闭</button>
    <button @click="a5">手动关闭提示</button>
    <br>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        tishi1:''
       }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        []
      ),
      a1(){
        this.$mint.Toast('我是简单提示')
      },
      a2(){
        this.$mint.Toast({
          message: '我在的位置在底部，展示时间是5秒',
          position: 'bottom',//默认在中间
          duration: 5000//默认2秒 如果写成 -1 那就不会自动关闭 需要手动关闭
        });
      },
      a3(){
        this.$mint.Toast({
          message: '操作成功',
          iconClass: 'fa fa-check'//这就是图标 写图标的class
          //<i class='fa fa-check'></i>//图标是这样的所以上边仅仅是图标的class
        });
      },
      a4(){
        this.tishi1=this.$mint.Toast({
          message: '操作成功',
          iconClass: 'fa fa-edit',
          duration:-1,
          className:'contenst'//给弹出打提示div加class 不好用啊。。。。。
        });
      },
      a5(){
          this.tishi1.close();//调用close方法关闭
      },

    },
    created(){    },
    mounted(){

    }
  }
</script>

<style scoped>
  .contenst{
  background: red !important;
  color: #000;
}

</style>
