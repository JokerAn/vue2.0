<template>
  <div class="popzhezhaoceng"  v-if="itemss.popTitle">
    <div class="pop anclear pop_box">
      <h3 class="clear pop-title">{{itemss.popTitle}} <span class="fr" @click="popClose" >×</span></h3>
      <slot></slot>

      <!--两端 popq-q ，左侧 popqq-left ,右侧 popqq-right -->
      <div class="popqq clear popqq-right">
        <button class=" el-button el-button--primary" @click="okOk(itemss.fun)">确定</button>
        <button class=" el-button el-button--default "  @click="popClose">取消</button>
      </div>
    </div>

  </div>

</template>
<script >
  import {mapActions,mapGetters} from 'vuex'
  export default {
    props:['itemss'],
    data(){
      return{

      }
    },
    methods:{
      ...mapActions([
          'autoElement'
      ]),
      moves(allDiv,allDiv_title){// 鼠标放到allDiv_title上才能拖动   让 allDiv移动
        var isDown=false;//是否恩下鼠标了
        var zhuti=document.getElementsByClassName(allDiv)[0];
        var title=document.getElementsByClassName(allDiv_title)[0];
        title.onmousedown=function(e){//鼠标刚刚恩下去的时候
          isDown=true;
          var chajuLeft=e.clientX-zhuti.offsetLeft; //刚开始鼠标相对左上角的偏移 left  ==>最后不移动了 让div仍相对于鼠标的位置不变 就可以得到最终的div的位置
          var chajuTop=e.clientY-zhuti.offsetTop;   //刚开始鼠标相对左上角的偏移 top   ==>最后不移动了 让div仍相对于鼠标的位置不变 就可以得到最终的div的位置
          document.onmousemove=function(e){
            var mouseX=e.clientX; //鼠标实时的位置
            var mouseY=e.clientY; //鼠标实时的位置
            var linjiezhixia=document.documentElement.clientHeight-parseInt(getComputedStyle(zhuti).height);//div能移动的 最下边临界值
            var linjiezhiyou=document.documentElement.clientWidth-parseInt(getComputedStyle(zhuti).width);  //div能移动的 最右边临界值

            //被移动div的范围是 top ：最小是0 最大是 浏览器可视区域的高度-被移动div的高度 == linjiezhixia
            //被移动div的范围是 left：最小是0 最大是 浏览器可视区域的宽度-被移动div的宽度 == linjiezhiyou
            //mouseY-chajuTop  => 鼠标现在的位置-刚开始相对左上角的偏移 == 最终(不考虑是否在可是区域内)左上角的位置
            //mouseX-chajuLeft => 鼠标现在的位置-刚开始相对左上角的偏移 == 最终(不考虑是否在可是区域内)左上角的位置
            var lastmovetop;  //最终（在可是区域内）左上角的位置-top
            var lastmoveleft; //最终（在可是区域内）左上角的位置-left
            if(mouseY-chajuTop<=0){
              lastmovetop=0
            }else if(mouseY-chajuTop>=(linjiezhixia)){//进入这个 就一定是没进入上一个 也就是 mouseY-chajuTop准比零大
              lastmovetop=(linjiezhixia)
            }else{
              lastmovetop=mouseY-chajuTop;
            }
            //left与上边一模一样 下边的这是精简版的写法
            //linjiezhiyou 可视区域的高度 - div的高度 ==  最下边的临界值

            lastmoveleft=Math.min(//第二步 先将这个 linjiezhiyou 与 最终(不考虑是否在可是区域内)左上角的位置 对比 取出最小值 （也就是 绝对在临界值之内 ）
              linjiezhiyou ,
              Math.max(0 , (mouseX-chajuLeft )) //第一步 先将这个 0 与 最终(不考虑是否在可是区域内)左上角的位置 对比 取出最大值 也就是如果小于0 就取 0 总之这一步取出的值绝对是大于等于 0 的
            );

            if(isDown){
              zhuti.style.top=lastmovetop+'px';
              zhuti.style.left=lastmoveleft+'px';
            }
          };
          return false//解决拖拽过程中选中文字 FF Chroom ; IE还没解决
        };
        document.onmouseup=function(e){//鼠标刚刚恩下去的时候
          isDown=false;
        }
      },

      popClose(){
        this.itemss.popTitle=''
      },
      okOk(callback){
        //dosomething....
        callback();
        this.itemss.popTitle=''
      }
    },
    computed:{

    },
    mounted(){
        if(this.itemss.Drag){
          this.moves('pop_box','pop-title');
          document.getElementsByClassName('pop-title')[0].style.cursor='pointer'
        }else{}

      this.autoElement('.pop')
    }



  }
</script>
<style >
  .pop {
    position: absolute;
    border:1px solid #aaa;
    border-bottom:none;
    background-color: #fff;
    width:500px;

  }
  .popzhezhaoceng{
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    background: rgba(0,0,0,0.5);
    outline: 0;
  }
  .pop>h3{
    background: #fff;
    padding:14px 0 14px 20px;
    font-size: 18px;
    font-weight:normal;
    border-bottom: 1px solid #ccc;
    color: #000;
  }
  .pop>h3 span{
    padding: 14px 15px;
    margin: -14px 0;
    cursor: pointer;
    font-size: 20px;
  }




  /*弹出框内部*/
  .an-width150 li:after{
    content: '';
    display: block;
    overflow: hidden;
    clear: both;
  }
  .popContent ul li{
    padding:5px 0;
  }
  .popContent ul li div{
    float: left;
    text-align: right;
    padding-right:10px;
  }
  .popContent ul li div:last-child{
    text-align: left;
  }
  /*.an-width150   {*/
  /*padding: 0 0 0 60px;*/
  /*}*/
  .an-width150 li div:first-child {
    width: 150px;
  }
  .popContent select{
    width:150px
  }
  .popContent select option{
    color: blue;
  }




  .pop .content{
    padding-bottom:50px;
  }
  .pop .popContent{
    padding: 20px;
    overflow-y: auto;
    min-height:100px;
    max-height: 400px;
  }
  .pop .popContent input  {
    border:1px solid #ddd;
  }
  .pop .popqq{
    height:50px;
    width:100%;
    border-top:1px solid #dadde0;
    position: absolute;
    /*bottom:-49px;*/
    bottom:0;
    background-color: #f0f4f7;
  }
  .pop .popqq button{
    margin: 8px 20px;
    padding: 7px 22px;
  }
  /*在左侧*/
  .pop .popqq-left button:first-child{
    margin-right:0 ;
  }

  /*在右侧*/
  .pop .popqq-right{
    text-align: center;
  }
  .pop .popqq-right button:first-child{
    margin-right:0;
  }

  /*在两边*/
  .pop .popq-q a.btn:first-child{
    float: left;
  }
  .pop .popq-q a.btn:last-child{
    float: right;
  }
  .popqq-right>.el-button--primary{
    background:#1D8CE0
  }
</style>
