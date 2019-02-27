<template>
    <div>
      <header-component></header-component>
      <h3>上传页面</h3>
      <div class="ss">
        <el-upload
          name="file"
          class="upload-demo"
          action="/api/v1/upload/videos"
          accept=".mp4,.rmvb,.webm,.ogv,.mpg,"
          :file-list="fileList">
          <el-button size="small" type="primary" class="sptn">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传视频格式,上传成功后去我的视频查看</div>
        </el-upload>
      </div>

      <div class="ss">
        <el-upload
          name="file"
          class="upload-demo"
          action="/api/v1/upload/images"
          accept=".jpg,.png,.gif,.jpeg"
          :file-list="fileList">
          <el-button size="small" type="primary" class="sptn">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传图片,上传成功后去我的图片查看</div>
        </el-upload>
      </div>
      <footer_component></footer_component>
    </div>
</template>

<script>
  import header from "../main/header.vue"
  import footer_component from "../main/footer_component.vue"

    export default {
        data(){
            return{
              fileList: []
            }
        },
      methods: {

      },
        components:{
          "header-component":header,
          "footer_component":footer_component
        }
    }
</script>

<style scoped>
.ss{
  width: 500px;
  height: 300px;
  margin: 10px auto;
}
.sptn{
  margin-bottom: 10px;
}
  .sptn:hover{
    color: #bfddff;
  }

</style>
