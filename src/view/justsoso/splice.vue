<template>
  <div>
    <div id="tuozhuai">
      <div class="zhuti">
        空页面 啥都没写
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

    }
  },
  computed:mapGetters(
      ['']
  ),
  methods:{
    ...mapActions(
      []
    ),

  },
  created(){

   },
  mounted(){

  },
  activated(){

  }
}
</script>

<style scoped>
#tuozhuai{
  position: relative;
}
  .zhuti{
    position: absolute; width:100px;height:100px;background: red;top: 0;left:0}
</style>
