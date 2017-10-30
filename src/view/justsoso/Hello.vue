<template>
  <div class="hello">
    <p style="text-align: center">{{msg}}</p>
    <ul>
      <li v-for="item in newsTitle">
        <p>{{item.title}}---------- <span>阅读：{{item.click}} </span> </p>
      </li>
    </ul>
    <loading></loading>.
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      newsTitle:{},
      msg:''
    }
  },
  computed:mapGetters(
      ['']
  ),
  methods:{
    ...mapActions(
      []
    ),
    getNewsTitle(){
        this.$axios.get(this.$url.newsTitle)
          .then(res=>{
              console.log(res)
            this.newsTitle=res.data.message
          })
          .catch(res=>{
              console.log('Error');
              console.log(res);
          })
    }
//
  },
  created(){

  },
  activated(){
      this.msg=this.$route.query.data;
    this.getNewsTitle()
  }
}
</script>

<style scoped>

</style>
