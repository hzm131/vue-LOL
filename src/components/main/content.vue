<template>
    <div>
        <lunbotu></lunbotu>
        <news></news>
        <videolist></videolist>
    </div>

</template>

<script>
    import lunbotu from "../content_components/lunbo.vue"
    import news from "../content_components/news.vue"
    import videolist from "../content_components/videoList.vue"
    export default {
        data() {
            return {}
        },
        components:{
            "lunbotu":lunbotu,
            "news":news,
            "videolist":videolist
        }
    }
</script>

<style scoped>

</style>