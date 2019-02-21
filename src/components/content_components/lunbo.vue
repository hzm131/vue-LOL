<template>
    <div class="content-lunbo">
        <div class="container lunbo" @mouseover="ting" @mouseout="kaishi">
            <ul class="lunbo_ul">
                <li @click="dian1" class="lil"></li>
                <li @click="dian2" class="lil"></li>
                <li @click="dian3" class="lil"></li>
            </ul>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
    let set
    export default {
        data(){
            return{
                i: 0,
                list: [],
            }
        },
        mounted(){
            this.dian()
        },
        created(){
          this.getImage();
        },
        methods: {
            dian1() {
              let url1 = this.list[0].image_src;
              let lunbo = document.querySelector(".lunbo");
              lunbo.style.backgroundImage = "url(" + url1 + ")"
            },
            dian2() {
                let url1 = this.list[1].image_src;
                let lunbo = document.querySelector(".lunbo");
                lunbo.style.backgroundImage = "url(" + url1 + ")"
            },
            dian3() {
                let url1 = this.list[2].image_src;
                let lunbo = document.querySelector(".lunbo");
                lunbo.style.backgroundImage = "url(" + url1 + ")"
            },
            dian() {
                let that = this;
                set = setInterval(() => {
                    let url1 = this.list[that.i].image_src;
                    let lunbo = document.querySelector(".lunbo");
                    lunbo.style.backgroundImage = "url(" + url1 + ")";
                    that.i++;
                    if (that.i > 2)
                        that.i = 0
                }, 2000)
            },
            ting() {
                clearInterval(set)
            },
            kaishi() {
                let that = this;
                set = setInterval(() => {
                    let url1 = this.list[that.i].image_src;
                    let lunbo = document.querySelector(".lunbo");
                    lunbo.style.backgroundImage = "url(" + url1 + ")";
                    that.i++;
                    if (that.i > 2)
                        that.i = 0
                }, 2000)
            },
            getImage(){
              var that = this;
              axios.get("/api/v3/lunbotu").then(function (res) {
                that.list = res.data.data
              })
            }
        }
    }
</script>

<style scoped>
    .content-lunbo{
        background-color: #14171e;
    }
    .lunbo{
        position:relative;
        background:url("http://127.0.0.1:8000/public/lunbo1.jpg") no-repeat;

    }
    .lunbo  ul{
        position:absolute;
        width: 50%;
        height: 15%;
        bottom:8%;
        left:40%
    }
    .lunbo ul li{
        border: 1px solid #fff;
        border-radius: 50%;
        background-color: #fff;
        float: left;
    }
    @media screen and (max-width:768px) {
        .lunbo{
            height: 200px;
            background-size: 100% 200px;
        }
        .lunbo  ul li{
            margin-left: 9px;
            width: 14px;
            height: 14px;
        }

    }
    @media screen and (min-width: 768px) and (max-width:992px) {
        .lunbo{
            height: 300px;
            background-size: 100% 300px;
        }
        .lunbo  ul li{
            margin-left: 11px;
            width: 16px;
            height: 16px;
        }


    }
    @media screen and (min-width:992px) and (max-width: 1200px) {
        .lunbo {
            height: 350px;
            background-size: 100% 350px;
        }
        .lunbo ul li {
            margin-left: 13px;
            width: 18px;
            height: 18px;
        }

    }
    @media screen and (min-width: 1200px){
        .lunbo{
            height: 400px;
            background-size: 100% 400px;
        }
        .lunbo  ul li{
            margin-left: 15px;
            width: 20px;
            height: 20px;
        }


    }
</style>
