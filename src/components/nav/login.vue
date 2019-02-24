<template>
    <div>
      <header-component></header-component>
      <h3>登录页面....</h3>
      <div class="xx">
        用户名：<input type="text" v-model='name' class="xxx"> <br/>
        <span class="sss">密码：</span><input type="password" v-model='password' class="xxx"> <br/>
        <button v-on:click="sub" class="ddd">登录</button>
      </div>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
  import axios from '../../axios'
    export default {
        data(){
          return {
            name:'',
            password:''
          }
        },
      methods:{
        sub(){
          axios.login(this.name,this.password)
        }
      },
        components:{
          "header-component":header,
          "footer_component":footer_component
        }
    }
</script>

<style scoped>
  h3{
    text-align: center;
  }
  .xx{
    width: 500px;
    margin: 10px auto;
  }
  .xxx{
    margin-bottom: 20px;
    width: 300px;
    height: 30px;
  }
  .sss{
    margin-right: 15px;
  }
  .ddd{
    width: 60px;
    font-size: 16px;
  }
</style>
