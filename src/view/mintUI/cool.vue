<template>
  <div>
    <p>{{a.asdf}}</p>
    <button @click="ones">asdf</button>

    <div class="times"></div>
    <div class="times"></div>
    <div style="position: absolute;top:100px;left:100px;border: 1px solid #000;width: 1px;height:1px;"></div>
    <hr>
    <!--<style class="qwe">-->
      <!--.aaa{color:red;border:1px solid #ddd;}-->
    <!--</style>-->
    <div class="idea" style="position: relative; width: 500px;height:500px;background-color: #aaa">
      <div class="lists yuanxin"><button>click</button></div>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        a:{asdf:'阿斯顿非'}
      }
    },
    computed: {},
    methods: {
      tiem(yuanxinX,yuanxinY,r,lengths){
        //圆心坐标（yuanxinX，yuanxinY） 半径r  显示的个数 lengths
        for(let  i=0;i<lengths;i++){
          var hudu = (2*Math.PI / 360) * (360/lengths) * i;

          var X = yuanxinY + Math.sin(hudu) * r;

          var Y = yuanxinX - Math.cos(hudu) * r;    //  注意此处是“-”号，因为我们要得到的Y是相对于（0,0）而言的。
          $('.idea').append(`
              <div class="lists aass${i}"><button>${i}</button></div>
          `);
//          console.log($('.aass'+i)[0]);
          $('.aass'+i).css({
            top:yuanxinY,
            left:yuanxinX
          });
//          $('.aass'+i).animate({
//            top:Y,
//            left:X
//          },200);
          let styleLen=$('style').length;
          let styleHtml=$('style').eq(styleLen-1).html();


        }
      },
      ones(){
        this.$set(this.a,'asdf','654651');
        console.log(this.a);

      },
    },
    mounted() {
      this.tiem(200,200,100,6);


    },
  }

</script>
<style class="qwe">
  .yuanxin{
    top:200px;left:200px;
  }
  .idea button{
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .lists{
    border:1px solid #000;width:50px;height:50px;position: absolute;border-radius: 50%;
  }

  ul{    list-style-type: none;}
  .q1{
    animation-name: expand-item-0;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-timing-function: ease-in;
  }
  .q2{
    animation-name: expand-item-1;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-delay: 0.04s;
    animation-timing-function: ease-in;
  }
  .q3{}
  .q4{}
  .q5{}
  .q6{}
  .q7{}
</style>
