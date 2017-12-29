<template>
  <div class="hello">
    <br><hr><br>
    <button @click="a1">alert弹出框</button>
    <button @click="a2">MessageBox.alert(message,title)</button>
    <button @click="a3">MessageBox.confirm(message, title);</button>
    <button @click="a4">MessageBox.prompt(message, title);</button>
    <br><hr><br>
    <p>action</p>
    <button @click="action1">action</button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>

    <br><hr><br>

    <br><hr><br>

    <br><hr><br>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        actions:[{name:'wahaha'}],
        sheetVisible:'wahah'
       }
    },
    computed:mapGetters(
      ['']
    ),
    methods:{
      ...mapActions(
        []
      ),
      a1(){
        this.$mint.MessageBox({
          title: '提示',
          message: '确定执行此操作?',//提示框的内容
          showCancelButton: true,  //是否显示关闭按钮 默认false
          showConfirmButton: true , //是否显示确认按钮 默认 true
          confirmButtonText:'Ok', //确认按钮的文本 默认是‘确认’俩字
          cancelButtonText:'no', //确认按钮的文本 默认是‘取消’俩字
          closeOnClickModal:false, //点击遮罩层是否关闭提示  默认true

          showInput:true, //是否显示一个输入框  默认false
          inputType:'text', //输入框的类型  'text'
          inputValue:'asdf', //输入框的值
          confirmButtonHighlight:true, //确认按钮的文本是否加粗 默认false
          cancelButtonHighlight:true, //取消按钮的文本是否加粗 默认false
          inputPlaceholder:'', //输入框的占位符 不知道干啥的
        });
      },
      a2(){
        this.$mint.MessageBox.alert('nihao', '提示2').then(
          res=>{
            console.log(res);
            //dosomeings....
          }
        )
      },
      a3(){
        this.$mint.MessageBox.confirm('nihao', '提示3').then(
          res=>{console.log(res);}
        )
      },
      a4(){
        this.$mint.MessageBox.confirm('nihao', '提示4').then(
          res=>{console.log(res);}
        )
      },
      action1(){
        this.$mint.MessageBox.confirm('nihao', '提示4').then(
          res=>{console.log(res);}
        )
      },

    },
    created(){    },
    mounted(){

    }
  }
</script>

<style scoped>
  .contenst{
  background: red !important;
  color: #000;
}

</style>
