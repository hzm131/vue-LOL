<template>
  <div>
    <header-component></header-component>
    <h3>注册页面....</h3>
    <div class="xx">
      用户名：<input type="text" v-model='name' class="xxx"> <br/>
      密码：<input type="password" v-model='password' class="xxx"> <br/>
      <button v-on:click="sub">注册</button>
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
        axios.register(this.name,this.password)
      }
    },
    components:{
      "header-component":header,
      "footer_component":footer_component
    }
  }
</script>

<style scoped>
  .xx{
    margin-bottom: 30px;
  }
  .xxx{
    margin-bottom: 10px;
  }
</style>
