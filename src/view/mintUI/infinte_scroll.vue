<template>
  <div>
    <p>infinite-scroll-disabled 默认false 若为真，则无限滚动不会被触发 </p>
    <p>infinite-scroll-distance 默认0  触发加载方法的滚动距离阈值（像素） </p>
    <p>infinite-scroll-immediate-check 默认true  若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 </p>
    <p>infinite-scroll-listen-for-event 默认Function  一个 event，被执行时会立即检查是否需要执行加载方法。 </p>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
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
        []
      ),
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      },
      loadTop() {
      // 加载更多数据
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
//        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        this.allLoaded = true;// 若数据已全部获取完毕
        console.log(this.$refs);
//        this.$refs.loadmore.onBottomLoaded();
      },
      handleTopChange(status) {
//        console.log(status);
        console.log(this.$refs)
        this.topStatus = status;
      },
    },
    created(){    },
    mounted(){

    }
  }
</script>

<style scoped>
  li{padding:10px 0;text-align: center}
</style>
