<template>
  <div class="hello">
    <p class="contenst">加载提示框，支持自定义文本和加载图标。带一个透明的遮罩层！</p>
    <p class="contenst">切记 这些仅仅是 “提示”  不会有遮照蹭 也不需要！</p>
    <br>
    <button @click="a1">默认加载</button>
    <button @click="a2">默认加载</button>
    <br>
    <p>加载图标提供了四个 'snake'
      'fading-circle'
      'double-bounce'
      'triple-bounce'
    </p>

  </div>
</template>

<script>
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
        //两种写法都对 第一中是官方的 第二种是我自己定义的 原理都是一样的
        this.$indicator.open('Hello world!');
//        this.$mint.Indicator.open('Hello world!');
      },
      a2(){
        this.$mint.Indicator.open({
          text: '加载中...',
          spinnerType: 'double-bounce'//图标 默认snake
        });
        var me=this;
        setTimeout(function(){me.$mint.Indicator.close()},1000)
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
