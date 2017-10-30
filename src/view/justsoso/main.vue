
<template>
  <div  id="temp">
      <ul>
        <li>
          <div class="a1"></div>
          <p>工作日报</p>
        </li>
        <li>
          <div class="a1"></div>
          <p>工作日报</p>
        </li>
        <li>
          <div class="a1"></div>
          <p>工作日报</p>
        </li>
        <li>
          <div class="a1"></div>
          <p>工作日报</p>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    components: {

    },
    activated(){},
    methods: {

    },
    created () {

    },
  }

</script>

<style scoped>
  #temp>ul>li{
    float: left;
    width:25%;
    height:100px;
    box-sizing: border-box;
    border:1px solid red;
    text-align: center;
  }
  #temp>ul>li>div{
    width:60%;
    height:60%;
    margin: 0 auto;
    border:1px solid #ddd;
  }
  @media only screen and (max-width: 479px) {/*小于479px*/
    .a1{background: url("../../imgs/mobileimg/_s-tabbar_icon_news_selected.png")no-repeat center center}
  }
  @media only screen and (min-width: 480px) and (max-width: 767px){/*大于480px，小于767px*/
    .a1{background: url("../../imgs/mobileimg/_s-tabbar_icon_news_selected@2x.png")no-repeat center center}

  }
  @media screen and (min-width: 768px) and (max-width: 959px) {/*大于768px，小于959px*/
    .a1{background: url("../../imgs/mobileimg/_s-tabbar_icon_news_selected@3x.png")no-repeat center center}

  }
</style>
