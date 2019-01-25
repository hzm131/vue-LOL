<template>
    <div>
        <header-component></header-component>
        <content-component></content-component>
        <footer_component></footer_component>
    </div>
</template>

<script>
    import header from "./main/header.vue"
    import content from "./main/content.vue"
    import footer_component from "./main/footer_component.vue"

    export default {
        name: "home",
        components:{
            "header-component":header,
            "content-component":content,
            "footer_component":footer_component
        }
    }
</script>

<style scoped>

</style>
