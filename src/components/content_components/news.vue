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
               news1:{
                       img: "../../../static/images/akali.jpg",
                       h: "8.15版本更新公告：阿卡丽重做归来",
                       p1: "8月7日4点关闭排位赛入口(不影响已经在进行中的对局)，凌晨5点全区停机维护，更新8.15新版本。"
                   },
               newss1: [
                   {id1: 1, value: '新闻', p: '英雄重做更新：离群之刺阿卡丽', time: '8/18'},
                   {id1: 2, value: '新闻', p: '8.15版本更新：克隆模式欢乐归来', time: '8/18'},
                   {id1: 3, value: '新闻', p: '8月8日0点发售！洛与霞七夕限量饰品来袭)', time: '8/18'},
                   {id1: 4, value: '新闻', p: '教你一招：掌握新版阿卡丽究极连招', time: '8/18'},
                   {id1: 5, value: '新闻', p: 'Cool成都再面老东家 WE主场迎战TOP', time: '8/18'},
                   {id1: 6, value: '新闻', p: '《英雄麦克疯》：2比0送他回家！', time: '8/18'},
                   {id1: 7, value: '新闻', p: '克隆模式开启公告', time: '8/18'},
                   {id1: 8, value: '新闻', p: '英雄联盟7周年玩家创作大赛正式开启', time: '8/18'},
                   {id1: 9, value: '新闻', p: '克隆模式欢乐归来', time: '8/18'},
                   {id1: 10, value: '新闻', p: '2018泳池派对活动视频预告', time: '8/18'}
               ],
               news2:{
                   img:'../../../static/images/jie.jpg',
                   h: '8.15版本更新：克隆模式欢乐归来',
                   p1: '什么，盖伦也能出ap。'
               },
               newss2:[
                   {id1: 1, value: '公告', p: '阿卡丽部分皮肤上架销售及价格调整公告', time: '8/18'},
                   {id1: 2, value: '公告', p: '克隆模式开启公告', time: '8/18'},
                   {id1: 3, value: '公告', p: '无知者在劫难逃', time: '8/18'},
                   {id1: 4, value: '公告', p: '7月游戏环境声明及处罚公告', time: '7/20'},
                   {id1: 5, value: '公告', p: '018年8月2日不停机更新公告', time: '8/18'},
                   {id1: 6, value: '公告', p: '8月3日免费英雄更换公告', time: '8/10'},
                   {id1: 7, value: '公告', p: '我有两把枪，一把叫98k，还有一把叫sks', time: '8/18'},
                   {id1: 8, value: '公告', p: '7月30日比赛服下载地址更新公告', time: '7/30'},
                   {id1: 9, value: '公告', p: '7月26日不停机更新公告', time: '7/26'},
                   {id1: 10, value:'公告', p: '7月26日不停机更新公告', time: '7/26'}
               ],
               news3:{
                   img:'../../../static/images/yasuo.jpg',
                   h: 'G豪取八连胜 RNG主场爆冷不敌',
                   p1: ''
               },
               newss3:[
                   {id1: 1, value: '赛事', p: 'Fury阿狸峡谷天秀 夏季赛登场英雄破百', time: '8/09'},
                   {id1: 2, value: '赛事', p: 'RNG主场迎战SNG IG强势冲击八连胜', time: '8/08'},
                   {id1: 3, value: '赛事', p: 'FPX客胜OMG TOP双杀WE升入西部三甲', time: '8/06'},
                   {id1: 4, value: '赛事', p: 'xiye生日抱憾而归 Rookie立下女装Flag', time: '7/05'},
                   {id1: 5, value: '赛事', p: '动联盟化和主客场 LPL将扩充至16支战队', time: '8/10'},
                   {id1: 6, value: '赛事', p: 'LDL第五周：SDG七连胜保持不败', time: '8/11'},
                   {id1: 7, value: '赛事', p: 'WE迎战OMG TOP对阵EDG剑指小组次席', time: '8/13'},
                   {id1: 8, value: '赛事', p: 'IG再度横扫西部 FW入围全球总决赛', time: '7/3'},
                   {id1: 9, value: '赛事', p: 'Clearlove出山 EDG不敌LGD遭五连败', time: '7/27'},
                   {id1: 10, value: '赛事', p:'7月26日不停机更新公告', time: '7/26'}
               ],
               news4:{
                   img:'../../../static/images/daomei.jpg',
                   h: '【问拳头第七十二期】新英雄',
                   p1: '这期就是聊新英雄。'
               },
               newss4:[
                   {id1: 1, value: '论坛', p: '一起为英雄联盟洲际赛花式打call！', time: '8/18'},
                   {id1: 2, value: '论坛', p: '【话题】SNG能否抵挡RNG的猛攻？', time: '8/18'},
                   {id1: 3, value: '论坛', p: '菲兹或将在8.16版本削弱的探讨', time: '8/18'},
                   {id1: 4, value: '论坛', p: '小苍手机当面被抢；表示网恋没有未来', time: '7/20'},
                   {id1: 5, value: '论坛', p: '【每周一辩】你会玩另类组合吗？', time: '8/18'},
                   {id1: 6, value: '论坛', p: '当你遇上喜欢吃全家桶的卢锡安', time: '8/10'},
                   {id1: 7, value: '论坛', p: '【话题】状态回暖的WE能否击败TOP？', time: '8/18'},
                   {id1: 8, value: '论坛', p: '美测服：蕾欧娜或将削弱对线期能力', time: '7/30'},
                   {id1: 9, value: '论坛', p: 'Doinb狂飚戏，TheShy回归赛场', time: '7/26'},
                   {id1: 10, value: '论坛', p: '英雄而战 重金招募美工小能手', time: '7/26'}
               ],
               img:[],
               img1:[
                   {id:1,images:'../../../static/images/阿卡丽1.jpg'},
                   {id:2,images:'../../../static/images/阿卡丽2.jpg'},
                   {id:3,images:'../../../static/images/阿卡丽3.jpg'},
                   {id:4,images:'../../../static/images/阿卡丽4.jpg'}
               ],
               img2:[
                   {id:1,images:'../../../static/images/剑魔.jpg'},
                   {id:2,images:'../../../static/images/佐伊.jpg'},
                   {id:3,images:'../../../static/images/凯隐.jpg'},
                   {id:4,images:'../../../static/images/卡莎.jpg'}
               ],
               img3:[
                   {id:1,images:'../../../static/images/牛头.jpg'},
                   {id:2,images:'../../../static/images/末日.jpg'},
                   {id:3,images:'../../../static/images/猴子.jpg'},
                   {id:4,images:'../../../static/images/艾希.jpg'}
               ],
               newssn:[
                   {id1: 11, value: '赛事', p: 'Fury阿狸峡谷天秀 夏季赛登场英雄破百', time: '8/09'},
                   {id1: 12, value: '赛事', p: 'RNG主场迎战SNG IG强势冲击八连胜', time: '8/08'},
                   {id1: 13, value: '赛事', p: 'FPX客胜OMG TOP双杀WE升入西部三甲', time: '8/06'},
                   {id1: 14, value: '赛事', p: 'xiye生日抱憾而归 Rookie立下女装Flag', time: '7/05'},
                   {id1: 15, value: '赛事', p: '动联盟化和主客场 LPL将扩充至16支战队', time: '8/10'}
               ]

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
