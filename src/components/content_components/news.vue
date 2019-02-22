<template>
    <div class="content_header container">
        <div class="ctn">
            <div class="content-left-1">
                <div class="left_top">
                        <ul class="top_ul">
                            <li><h3>新闻资讯</h3></li>
                            <li class="ll" @mouseover="li1">综合新闻</li>
                            <li class="ll" @mouseover="li2">官方公告</li>
                            <li class="ll" @mouseover="li3">赛事新闻</li>
                            <li class="ll" @mouseover="li4">论坛资讯</li>
                        </ul>
                    </div>
                <div class="left_bottom">
                    <div class="news">
                        <div class="news_i">
                            <img :src="news.img" class="fl">
                            <span class="h">{{news.h}}</span>
                            <span class="p">{{news.p1}}</span>
                        </div>
                        <div class="news_li">
                            <ul>
                                <li v-for="item in newss" :key="item.id">
                                    <button class="btn1">{{item.value}}</button>
                                    <span class="sp">{{item.p}}</span>
                                    <span class="time">{{item.time}}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn2">阅读获取<span class="gengduo">更多资讯</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right-2 hidden-md hidden-sm hidden-xs">
                <div class="right_top">
                    <ul>
                        <li @mouseover="i1">最新皮肤</li>
                        <li @mouseover="i2">最新英雄</li>
                        <li @mouseover="i3">周免英雄</li>
                    </ul>
                </div>
                <div class="right_bottom">
                    <ul>
                        <li v-for="items in img">
                            <img :src="items.image_src" alt="">
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        data(){
           return{
               news:{},
               newss:[],
               img:[],


           }
        },
        created(){
            this.li1();
            this.i1();
        },
        methods: {
            li1(){
                axios.get("/api/v3/news/1").then((res)=>{
                  this.news = res.data.data;
                  this.newss = res.data.data.news
                })
            },
            li2(){
              axios.get("/api/v3/news/2").then((res)=>{
                this.news = res.data.data;
                this.newss = res.data.data.news
              })
            },
            li3(){
              axios.get("/api/v3/news/3").then((res)=>{
                this.news = res.data.data;
                this.newss = res.data.data.news
              })
            },
            li4(){
              axios.get("/api/v3/news/4").then((res)=>{
                this.news = res.data.data;
                this.newss = res.data.data.news
              })
            },

            i1(){
                var that = this;
                axios.get("/api/v3/latest_skins").then(function (res) {
                  that.img = res.data.data
                })
            },
            i2(){
              var that = this;
              axios.get("/api/v3/latest_heros").then(function (res) {
                that.img = res.data.data
              })
            },
            i3(){
              var that = this;
              axios.get("/api/v3/weekly_heros").then(function (res) {
                that.img = res.data.data
              })
            },

        }
    }
</script>

<style scoped>
    .gengduo{
        color: #d1ab57;
        font-style: normal;
    }
    .news_li li:hover{
         color:#d1ab57;
     }
    .news_li li:hover .btn1{
        background-color: #d1ab57;
        color: #fff;
    }
    .btn1{
        background-color: #ebebeb;
        border: 0;
    }
    .btn2{
        background-color: #ebebeb;
        border: 0;
        cursor: pointer;
        border-radius: 5px;
    }
    @media screen and (max-width: 768px){
        .content_header{
            margin-top: 30px;
            padding: 5px;
            box-sizing: border-box;
        }
        .ctn{
            width:100%;
        }
        .content-left-1{
            width: 100%;
            height: auto;
        }

        .left_top{
            height: 40px;
            width: 100%;
            border-bottom: 3px solid #ededee;
        }
        .top_ul{
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .left_top li{
            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;
            font-size: 12px;
        }
        .left_top h3{
            font-weight: bold;
            color: #404040;
        }
        .left_top .ll:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 14px;
            color:#d1ab57;
        }
        .left_bottom{
            width: 100%;
            margin-top: 15px;
        }

        .news{
            width: 100%;
        }
        .news_i{
            height: 90px;
        }
        .news_i img{
            width: 140px;
            height: 100px;
            margin-right: 10px;
        }
        .news .h{
            font-size: 18px;
            overflow: hidden;
            display: block;
        }
        .news .p{
            overflow: hidden;
            display: block;
            font-size: 12px;
            color: #898989;
        }
        .news_li{
            margin-top: 20px;
        }
        .news ul li{
            width: 100%;
            height: 25px;
            margin-bottom: 4px;
            font-size: 14px;
            position:relative;
            cursor: pointer;
            overflow: hidden;
        }
        .btn1{
            width: 40px;
            margin-right: 10px;

        }
        .btn2{
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            margin-top: 5px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
        }
        .btn2:hover{
            background-color: #DADBDB;
        }
        .time{
            position:absolute;
            right: 10px;
        }
    }
    @media screen and (min-width:768px) and (max-width:992px){
        .content_header{
            margin-top: 60px;
        }
        .ctn{
            width:100%;
        }
        .content-left-1{
            width: 100%;
        }

        .left_top{
            height: 53px;
            width: 100%;
            margin-bottom: 10px;
            border-bottom: 3px solid #ededee;
        }
        .top_ul{
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .left_top li{
            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;
            font-size: 16px;
        }
        .left_top h3{
            font-size: 26px;
            font-weight: bold;
            color: #404040;
        }
        .left_top .ll:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            font-weight: bold;
            color:#d1ab57;
        }

        .news{
            width: 100%;
            height: 578px;
        }
        .news_i{
            height: 124px;
        }
        .news_i img{
            width: 200px;
            height: 124px;
            margin-right: 20px;
        }
        .news .h{
            font-size: 36px;
            overflow: hidden;
            display: block;
        }
        .news .p{
            overflow: hidden;
            display: block;
            font-size: 14px;
            color: #898989;
        }
        .news_li{
            margin-top: 15px;
        }
        .news ul li{
            width: 100%;
            height: 35px;
            margin-bottom: 4px;
            font-size: 16px;
            position:relative;
            cursor: pointer;
        }
        .btn1{
            width: 68px;
            height: 100%;
            margin-right: 10px;

        }
        .btn2{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            margin-top: 5px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
        }
        .btn2:hover{
            background-color: #DADBDB;
        }
        .time{
            position:absolute;
            right: 10px;
        }
    }
    @media screen and (min-width:992px) and (max-width:1200px){
        .content_header{
            margin-top: 60px;
        }
        .ctn{
            width:100%;
        }
        .content-left-1{
            width: 100%;
        }
        .news{
            width: 100%;
            height: 578px;
        }
        .left_top{
            height: 53px;
            width: 100%;
            margin-bottom: 10px;
            border-bottom: 3px solid #ededee;
        }
        .top_ul{
            height: 53px;
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .left_top li{
            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;
            font-size: 16px;
        }
        .left_top h3{
            font-size: 26px;
            font-weight: bold;
            color: #404040;
        }
        .left_top .ll:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            font-weight: bold;
            color:#d1ab57;
        }

        .news_i{
            height: 124px;
        }
        .news_i img{
            width: 200px;
            height: 124px;
            margin-right: 20px;
        }
        .news .h{
            font-size: 36px;
            overflow: hidden;
            display: block;
        }
        .news .p{
            overflow: hidden;
            display: block;
            font-size: 14px;
            color: #898989;
        }
        .news_li{
            margin-top: 15px;
        }
        .news ul li{
            width: 100%;
            height: 35px;
            margin-bottom: 4px;
            font-size: 16px;
            position:relative;
            cursor: pointer;
        }
        .btn1{
            width: 68px;
            height: 100%;
            margin-right: 10px;

        }
        .btn2{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            margin-top: 5px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
        }
        .btn2:hover{
            background-color: #DADBDB;
        }
        .time{
            position:absolute;
            right: 10px;
        }
    }
    @media screen and (min-width: 1200px){
        .content_header{
            margin-top: 60px;
        }
        .left_top{
            width: 820px;
            height: 53px;
            display: flex;
            align-items:center;
        }
        .top_ul{
            width: 680px;
            height: 40px;
            display: flex;
        }
        .left_top li{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items:center;
            border-bottom:3px solid #ededee;
            cursor: pointer;
            font-size: 16px;

        }
        .left_top h3{
            font-size: 26px;
            color: #404040;
            border-bottom:3px solid #ededee;
        }
        .left_top .ll:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            font-weight: bold;
            color:#d1ab57;
        }

        .content-left-1{
            float:left;
        }
        .news{
            width: 820px;
            height: 578px;
        }
        .news_i{
            height: 124px;
        }
        .news_i img{
            width: 200px;
            height: 124px;
            margin-right: 20px;
        }
        .news .h{
            font-size: 36px;
            overflow: hidden;
            display: block;
        }
        .news .p{
            overflow: hidden;
            display: block;
            font-size: 14px;
            color: #898989;
        }
        .news_li{
            margin-top: 15px;
        }

        .news ul li{
            width: 100%;
            height: 35px;
            margin-bottom: 4px;
            font-size: 16px;
            position:relative;
            cursor: pointer;
        }
        .btn1{
            width: 68px;
            height: 100%;
            margin-right: 10px;
        }
        .btn2{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            margin-top: 5px;
            border-radius: 5px;

        }
        .btn2:hover{
            background-color: #DADBDB;
        }
        .time{
            position:absolute;
            right: 10px;
        }

        .content-right-2{
            width: 330px;
            height: 623px;
            padding: 5px;
            float:right;
        }
        .right_top{
            height: 40px;
        }
        .right_top ul{
            height: 40px;
            display: flex;
        }
        .right_top ul li{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items:center;
            border-bottom:3px solid #ededee;
            cursor: pointer;
            font-size: 16px;

        }
        .right_top ul li:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            font-weight: bold;
            color:#d1ab57;
        }
        .right_bottom li img{
            width: 100%;
            height: 139px;
            margin-top: 5px;
        }
    }

</style>
