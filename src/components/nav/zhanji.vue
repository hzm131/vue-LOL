<template>
    <div>
      <header-component></header-component>
      <h3 class="xx">我的上传图片</h3>
      <div class="span">
        <el-row :gutter="30">
          <el-col :span="8" v-for="item in list" :key="item.id">
            <img :src="item.src" :alt="item.CreatedAt" class="image">
          </el-col>
        </el-row>
      </div>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"
  import axios from "../../axios"
    export default {
        name: "zhanji",
        data(){
          return{
            list:[]
          }
        },
      created(){
        this.getImages()
      },
      methods:{
        getImages(){
          axios.get("/api/v2/images?offset=0&limit=20").then((res)=>{
            if(res.data.data === "authorization不能为空"){
              alert("没有登录")
              return
            }
            this.list = res.data.data
          })
        }
      },
        filters:{
          getLocalTime:  function (value) {
            var date = new Date(value);
            var year = date.getFullYear(); //年份
            var month = date.getMonth(); //月份
            var time = date.getDate(); //日
            var hours = date.getHours(); //时
            var minutes = date.getMinutes();//分
            var seconds = date.getSeconds(); //秒
            return `${year}-${month}-${time} ${hours}:${minutes}:${seconds}`
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
    text-align: center;
  }
  .span{
    width: 1200px;
    margin: 0 auto;
  }
  .image{
    width: 100%;
  }
</style>
