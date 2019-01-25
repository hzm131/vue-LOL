<template>
    <div>
      <header-component></header-component>
      <h3>注册页面....</h3>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
    export default {
        name: "login",
        components:{
          "header-component":header,
          "footer_component":footer_component
        }
    }
</script>

<style scoped>

</style>
