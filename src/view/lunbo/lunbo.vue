<template>
  <div class="hello">
    <p style="text-align: center">{{msg}}</p>
    <div class="lunbo">

      <div class="lunbo_window">

        <ol class="lunbo_imgs anclear">

          <li class="lunbo_img lunbo_img_2">
            <div>
              <button>222</button>
            </div>

          </li>
          <li class="lunbo_img lunbo_img_21">
            <div>
              <button>新插入的</button>
            </div>
          </li>
          <li class="lunbo_img lunbo_img_3">
            <div>
              <button>333</button>
            </div>
          </li>
          <li class="lunbo_img lunbo_img_4">444</li>
          <li class="lunbo_img lunbo_img_5">555</li>
          <li class="lunbo_img lunbo_img_6">666</li>
          <li class="lunbo_img lunbo_img_1">
            <button>这个图片lun7.png大小不对　太大</button>
          </li>
        </ol>
        <ul class="lunbo_control">
          <li class="fl" @click="lunstartright('上一张')">上一张 </li>
          <li class="fr" @click="lunstartright('下一张')">下一张 </li>
        </ul>
        <ul class="lunbo_title">

          <li class="active">
            <span>2</span>
          </li>
          <li>
            <span>cha</span>
          </li>
          <li class="">
            <span>3</span>
          </li>
          <li>
            <span>4</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>1</span>
          </li>
        </ul>
      </div>

    </div>
    <div style="width: 100px;height:500px;border: 1px solid #aaa;">sdf</div>
    <div style="width: 100px;height:500px;border: 1px solid #aaa;">sdf</div>
    <div style="width: 100px;height:500px;border: 1px solid #aaa;">sdf</div>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        newsTitle:{},
        msg:'我是轮播页面',
        imgINdex:0,//页面刚刚进来第一次显示图片的index
        lunbo:'',//主定时器
        lunbo2:'',//临时定时器
      }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        []
      ),
      lunboIndexCircle(index,time1,time2) {
        //主定时器　图片显示，隐藏的时间可以稍微　长一点　效果好看
        //副定时器　图片显示，隐藏的时间需要　短一点　展现出立马下一张的感觉
        $("ol.lunbo_imgs li").eq(index).siblings().fadeOut(0);
        $("ol.lunbo_imgs li").eq(index).fadeIn(time2);
        $(".lunbo_title li").removeClass('active');
        $(".lunbo_title li").eq(index).addClass('active');
      },
      lunstart(){

        var me=this;
        clearInterval(this.lunbo);
        this.lunbo=null;
        this.lunbo=setInterval(function () {
          var allimgNum=$('.lunbo_imgs li').length;
          me.imgINdex++;
          if (me.imgINdex == allimgNum) {
            me.imgINdex = 0;
          }
          me.lunboIndexCircle(me.imgINdex,200,500);
          console.log('我现在显示的图片　index是　传进来的index:'+(me.imgINdex-1)+'加上１以后＝'+me.imgINdex);
          },3000)
      },
      lunstartright(res){
        clearInterval(this.lunbo);
        this.lunbo=null;
        clearTimeout(this.lunbo2);
        this.lunbo2=null;
        var me=this;
        this.lunbo2=setTimeout(function () {
          var allimgNum=$('.lunbo_imgs li').length;
          if(res=='上一张'){
            if (me.imgINdex == 0) {
              me.imgINdex = allimgNum-1;
              console.log('我传进来的index是0也就是第一张图上一张应该是最后一张也就是index:'+(allimgNum-1));
            }else{
              me.imgINdex--;
            }
          }else{
            me.imgINdex++;
            if (me.imgINdex == allimgNum) {
              me.imgINdex = 0;
            }
          }
          me.lunboIndexCircle(me.imgINdex,90,240);
          console.log('我现在显示的图片　index是　传进来的index:'+(me.imgINdex+1)+'减去１以后＝'+me.imgINdex);
          me.lunstart();//调用主定时器
        },290)
      },



    },
    created(){
      this.lunstart();
    },
    activated(){

    }
  }
</script>

<style scoped>
  .lunbo{

  }
  .lunbo_window{
    width:90%;
    height:400px;
    border:3px solid blue;
    margin: 50px auto;
    overflow: hidden;
    position: relative;
    background: #07172d;
  }
  .lunbo_imgs{
    /*position: relative;*/
  }
  .lunbo_imgs li{
    height:400px;
    position: relative;
  }

  /* 轮播按钮位置－开始 */
  .lunbo_imgs li>div{
    position: absolute;
    width: 100%;
    text-align: center;/*这个很关键！！！　按钮对准图片文字就是因为这个属性让他跟背景一样默认都居中然后开始找定位*/
  }
  .lunbo_imgs li>div button{
    font-size: 18px;
    padding:5px 30px;
    border:1px solid #ddd;
    background: #222ddd;
  }
  .lunbo_img_2>div{
    top:300px;
  }
  .lunbo_img_21>div{
    top:300px;
    left:-435px;
  }
  .lunbo_img_3>div{
    top:300px;
    left:-435px;
  }
  /* 轮播按钮位置－结束 */

  /* 轮播图片位置－开始 */
  .lunbo_img_1{
    background: url("../../imgs/lunbo/lun7.png")no-repeat center center;
    /*background-size: cover;*/
  }
  .lunbo_img_2{
    background: url("../../imgs/lunbo/lun1.png")no-repeat center center;
    /*background-size: cover;*/
  }
  .lunbo_img_21{
    background: url("../../imgs/lunbo/lun2.png")no-repeat center center;
    /*background-size: cover;*/
  }
  .lunbo_img_3{
    background: url("../../imgs/lunbo/lun3.png")no-repeat center center;
    /*background-size: cover;*/
  }
  .lunbo_img_4{
    background: url("../../imgs/lunbo/lun4.png")no-repeat center center;
    background-size: cover;
  }
  .lunbo_img_5{
    background: url("../../imgs/lunbo/lun5.png")no-repeat center center;
    /*background-size: cover;*/
  }
  .lunbo_img_6{
    background: url("../../imgs/lunbo/lun6.png")no-repeat center center;
    /*background-size: cover;*/
  }
  /* 轮播图片位置－开始 */

  /* 轮播　上一张，下一张－开始 */
  .lunbo_window .lunbo_control{
    top:0;
    width: 100%;
    height:0;
    position: absolute;
  }
  .lunbo_window .lunbo_control li{
    background-color:rgba(225,225,225,0.1);
    padding:40px 10px;
    margin-top:160px;
    color: #aaa222;
    font-size: 26px;
  }
  /* 轮播　上一张，下一张－结束 */

  /* 轮播底下小圆点－开始 */
  .lunbo_window .lunbo_title{
    bottom:0;
    width: 100%;
    position: absolute;
    text-align: center;
    padding:10px 0;
  }
  .lunbo_window .lunbo_title li{
    position: relative;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #1970d5;
    color: #fff;
    margin: 0 10px;
    cursor: pointer;
    box-sizing: content-box;
  }
  .lunbo_window .lunbo_title li.active{
    border: 3px solid #3e3d49;
    top:3px;
  }
  .lunbo_window .lunbo_title li span{
    display: none;
  }
  .lunbo_window .lunbo_title li.active span{
    position: absolute;
    left: -42px;
    top: -38px;
    color: #fff;
    font-size: 12px;
    background: #1970d5;
    width: 75px;
    text-align: center;
    padding: 5px 8px;
    display: block;
  }
  .lunbo_window .lunbo_title li.active span::after{
    content: '';
    position: absolute;
    left: 50%;
    top: 23px;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: #1970d5 transparent transparent;
  }
  /* 轮播底下小圆点－结束 */

</style>
