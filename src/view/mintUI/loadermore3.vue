<template>
  <div>
    <h3>上拉刷新， 点击进入--- <button @click="goToPage(['loadmore2'])">下拉刷新</button></h3>
    <!--<p>:bottomDistance="80"</p>-->
    <!--<p>一定要给刷新这个div一个固定的高度 否则上拉刷新一旦到达屏幕的高度就不能再上拉刷新了 下拉的不用给高度！</p>-->
    <mt-loadmore class="aaasss" :autoFill=false ref="loadmore"
    @bottom-status-change="handleBottomChange" @translate-change="translateChange"
    :bottom-method="loadBottom"  :bottom-all-loaded="allLoaded" :maxDistance="100"
    >
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <!--<div slot="bottom" class="mint-loadmore-bottom">-->
        <!--<span v-show="bottomStatus === 'pull'":class="{ 'is-rotate': bottomStatus === 'drop' }">12上拉刷新</span>-->
        <!--<span v-show="bottomStatus === 'drop'">释放刷新12</span>-->
        <!--<span v-show="bottomStatus === 'loading'">刷新中12</span>-->
      <!--</div>-->
      <div slot="bottom" class="mint-loadmore-bottom">
        <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'loading' }">↑</span>-->
        <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
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
        list:[1,2,3,4,5,6],
        bottomStatus: '',
        allLoaded:false,
       }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        ['goToPage']
      ),
      handleBottomChange(status) {
        console.log(status);
//        if(status=='pull'){
//          console.log(this.$refs.aaa._data.translate);
//        }

        this.bottomStatus = status;
      },
      loadBottom(){
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
//          this.allLoaded = true;//true就是禁止上拉刷新了
//          console.log(this.allLoaded);
        console.log(1);
          this.$refs.loadmore.onBottomLoaded();
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
    height:20rem;
    overflow-y: auto;
    border:1px solid #ddd;}
</style>



<!--<template>-->
  <!--<div class="main-body" >-->
    <!--<mt-loadmore :bottom-method="loadBottomUse"-->
                 <!--:bottom-all-loaded="allUseLoad" :bottomPullText='bottomText'-->
                 <!--ref="loadmore">-->
      <!--<div class="tab-list" v-for='item in useScoreLog'>-->
        <!--<div class="tab-list-top">-->
          <!--<span class="tab-name">{{item.remark}}</span>-->
          <!--<span class="tab-num">{{item.score}}</span>-->
        <!--</div>-->
        <!--<div class="tab-list-bottom">-->
          <!--<span class="tab-time">{{item.operateTime}}</span>-->
          <!--<span class="tab-class">{{item.recordTypeName}}</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</mt-loadmore>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import {Loadmore} from 'mint-ui';-->
  <!--export default {-->
    <!--data:function() {-->
      <!--return {-->
        <!--getScoreLog: [],-->
        <!--pageNo: 1,-->
        <!--allLoaded: false,-->
        <!--bottomText: '上拉加载更多...',-->
        <!--totalCount: '',-->
      <!--}-->
    <!--},-->

    <!--mounted(){-->

    <!--},-->
    <!--methods: {-->

      <!--getData(){-->
        <!--this.$http.post(commonUrl + "/restful/", {-->
          <!--typeFlag: '1'-->
        <!--}).then(response => {-->
          <!--if (response.data.errcode == 0) {-->
            <!--this.getScoreLog = response.data.scoreLog;-->
            <!--this.totalGetCount = (response.data.recordCount + 9) / 10;-->
          <!--}-->
        <!--}, response => {-->
        <!--});-->
      <!--},-->
      <!--loadBottom() {-->
        <!--this.pageNo += 1;-->
        <!--if (this.pageNo == this.totalGetCount) {-->
          <!--this.allLoaded = true;-->
        <!--}-->
        <!--setTimeout(() => {-->
          <!--this.$http.post(commonUrl + "/restful/", {-->
            <!--pageNo: this.pageNo,-->
            <!--typeFlag: '1'-->
          <!--}).then(response => {-->
            <!--if (response.data.errcode == 0) {-->
              <!--this.getScoreLog = this.getScoreLog.concat(response.data.scoreLog);-->
            <!--}-->
          <!--}, response => {-->
          <!--});-->
        <!--}, 1500);-->
      <!--},-->
    <!--}-->
  <!--}-->
<!--</script>-->
