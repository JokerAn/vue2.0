<template>
  <div>
    <h3>下拉刷新， 点击进入---<button @click="goToPage(['loadmore3'])">上拉刷新</button></h3>
    <p>topDistance:	触发 top-method 的下拉距离阈值（像素） 默认是70</p>
    <p>maxDistance:	组件可移动的最大距离（像素），若为 0 则不限制 最少也应该大于topDistance！</p>
    <mt-loadmore class="aaasss" :autoFill=false ref="aaa"
    @top-status-change="handleTopChange" @translate-change="translateChange"
    :top-method="loadTop" :maxDistance="80"
    >
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'pull'" :class="{ 'is-rotate': topStatus === 'drop' }">下拉刷新</span>
        <span v-show="topStatus === 'drop'">释放刷新</span>
        <span v-show="topStatus === 'loading'">刷新中</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>

  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        tishi1:'',
        list:[1,2,3,4,5,6,7,8,9,11,12],
        topStatus: '',
       }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        ['goToPage']
      ),
      handleTopChange(status) {//这是 top-status-change 触发的方法
        //每当组件的状态发生变化时，loadmore模块 都会触发 top-status-change 方法，‘参数为组件目前的状态’。
        //参数status 的状态有三种 "pull","drop","drop"
        //'pull'    组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
        //'drop'    按下的距离不小于(也就是达标了) topDistance，此时释放会触发 top-method
        //'loading' 组件已被释放，top-method 正在执行
//        console.log(status);
//        if(status=='pull'){
//          console.log(this.$refs.aaa._data.translate);
//        }

        this.topStatus = status;
      },
      loadTop(){
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.$refs.aaa.onTopLoaded();//回复到默认状态！！！！！！！！！
        }, 500);
      },
      translateChange(translate) {//拉动屏幕的时候
        console.log(translate)
      },
    },
    created(){    },
    mounted(){

    }
  }
</script>

<style scoped>
  li{padding:10px 0;text-align: center}
  .aaasss{
    border:1px solid #ddd;}
</style>
