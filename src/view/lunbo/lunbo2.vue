<template>
  <div class="hello">
    <p @click="lunstart" style="text-align: center">{{msg}}</p>
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
          <li class="lunbo_img lunbo_img_4">444444444444444444444</li>
          <li class="lunbo_img lunbo_img_5">555555555555555555555</li>
          <li class="lunbo_img lunbo_img_6">666666666666666666666</li>
          <li class="lunbo_img lunbo_img_1">
            <button>这个图片lun7.png大小不对　太大</button>
          </li>
        </ol>
        <ul class="lunbo_control">
          <li class="fl" @click="lunstartright('上一张',300,500)">上一张 </li>
          <li class="fr" @click="lunstartright('下一张',300,500)">下一张 </li>
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
        imgINdex:0, //页面刚刚进来第一次显示图片的index
        lunbo:'',   //主定时器
        lunbo2:'',  //上一张,下一张 主定时器
      }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        []
      ),
      lunboIndexCircle(times) {
        var me=this;
        var liWidth=parseInt($('.lunbo_imgs li').css('width'));
        var allimgNum=$('.lunbo_imgs li').length;
        $('.lunbo_imgs').stop(false,true).animate({left:(-liWidth)+'px'},times,function(){
          me.imgINdex<allimgNum-1?me.imgINdex++:me.imgINdex=0;
          $(".lunbo_title li").eq(me.imgINdex).addClass('active').siblings('li').removeClass('active');
          var splitimg=$('.lunbo_imgs li:first-child').remove();
          $('.lunbo_imgs').css({left:0});
          $('.lunbo_imgs').append(splitimg);
          me.lunstart(25000,600);
        });

      },
      lunstart(allitems,transformtimes){
        var me=this;
        clearInterval(this.lunbo);
        this.lunbo=null;
        this.lunbo=setInterval(function () {
          me.lunboIndexCircle(transformtimes);
        },allitems)
      },
      lunstartright(res,allitems,transformtimes){
        //res　　　　　　　　判断点击的是上一张还是下一张
        //allitems：　　　　这个定时器的时间
        //transformtimes: 图片移动的动画的时间
        clearInterval(this.lunbo);
        this.lunbo=null;
        clearTimeout(this.lunbo2);
        this.lunbo2=null;
        var me=this;
        var liWidth=parseInt($('.lunbo_imgs li:last-child').css('width'));
        var allimgNum=$('.lunbo_imgs li').length;

        this.lunbo2=setTimeout(function () {
          if(res=='上一张'){
            //将最后一张移至第一张　这时候界面会变化　所以要立马改变．lunbo_imgs的位置　让他还显示没点击之前那个图片
            var splitimg=$('.lunbo_imgs li:last-child').remove();
            $('.lunbo_imgs').prepend(splitimg);

            $('.lunbo_imgs').css({left:(-liWidth)+'px'});//回到原来图片的位置　因为直接设置的css所以　肉眼看不出来　图片换了一张后又换回来了　一个li的宽度是固定的　700px
            $('.lunbo_imgs').stop(false,true).animate({left:0},transformtimes,function(){
              me.imgINdex==0?me.imgINdex=allimgNum-1:me.imgINdex--;
              $(".lunbo_title li").eq(me.imgINdex).addClass('active').siblings('li').removeClass('active');
              me.lunstart(25000,600);

            });//进行动画
          }else{

            //与主定时器一模一样就是变成了setTimeout执行一次
            me.lunboIndexCircle(transformtimes);
          }
        },allitems)
      },


    },
    created(){
//        console.log(this.imgINdex);
      this.lunstart(25000,600);//25秒换一张图片　图片的移动速度为0.6秒
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
    /*margin: 50px auto;*/
    overflow: hidden;
    position: relative;
    /*background: #07172d;*/
    background: #222ddd;
    margin: 0 auto;
  }
  .lunbo_imgs{
    width:calc(100%*7);
    position: relative;
    left:0;
  }
  .lunbo_imgs li{
    position: relative;
    width:calc(100%/7);
    height:400px;
    float: left;
    color: #fff;
    font-size: 26px;
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
    cursor: pointer;
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
