<template>
    <div>
      <header-component></header-component>
      <div><h3>英雄页面，待会做</h3></div>
      <router-link to="/home/hero/liebiao">liebiao</router-link>
      <router-link to="/home/hero/tuku">tuku</router-link>
      <router-view></router-view>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
    export default {
        data(){
            return{}
        },
        components:{
          "header-component":header,
          "footer_component":footer_component
        }
    }
</script>

<style scoped>

</style>
