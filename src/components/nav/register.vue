<template>
    <div>
      <header-component></header-component>
      <h3>登录页面...</h3>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
    export default {
        name: "register",
        components:{
          "header-component":header,
          "footer_component":footer_component
        }
    }
</script>

<style scoped>

</style>
