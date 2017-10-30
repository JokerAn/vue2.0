<template>
  <div class="hello">
    <p style="text-align: center">{{msg}}</p>
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
  beforeCreate: function () {
    console.group('beforeCreate 创建前状态=－一般用底下这个》');
    console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //undefined
    console.log("%c%s", "color:red","msg: " + this.msg);

  },
  created: function () {
    console.group('created 创建完毕状态==================》');
    console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","msg: " + this.msg); //已被初始化
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态=－一般用底下这个》');
    console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","msg: " + this.msg); //已被初始化

  },
  mounted: function () {
    console.group('mounted 挂载结束状态==================》');
    console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","msg: " + this.msg); //已被初始化

  },

  beforeUpdate: function () {
    console.group('beforeUpdate 更新阶段　更新到0％～50％的前期状态－－一般用底下这个》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","msg: " + this.msg);
  },
  updated: function () {
    console.group('updated 更新阶段　100％完成后　==================》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","msg: " + this.msg);
  },


  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态-离开本页面的时候=－一般用底下这个》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","msg: " + this.msg);
  },

  destroyed: function () {
    console.group('destroyed 销毁完成状态－离开本页面完成后================》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","msg: " + this.msg);
    return confirm("确定离开此页面吗？");
  },
  //如果App.vue 中使用了keep-alive 那上边的全失效　底下这俩生效　如果没使用　底下这俩　永不生效　上边生效
  activated: function () {
    console.group('进入页面组建加载完毕后　================》');
  },
  deactivated: function () {
    console.group('离开页面的时候========================》');
    console.log('aaa');
    console.log('return confirm("确定离开此页面吗？");')
  },


}
</script>

<style scoped>

</style>
