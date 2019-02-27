<template>
    <div>
      <header-component></header-component>
      <h3>比赛视频</h3>
      <div class="xxx">
        <video src="http://www.hezhimin.top:8000/videos/video.mp4"
               controls="controls"
               width="500"
               height="300"
               preload="auto"
               poster="http://www.hezhimin.top:8000/images/艾希.jpg"
        >
          您的浏览器不支持视频标记
        </video>
      </div>

      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
    export default {
        name: "bisai",
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
  .xxx{
    width: 500px;
    height: 300px;
    margin: 10px auto;
  }
</style>
