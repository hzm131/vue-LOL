<template>
    <div class="v_video container">
           <div class="top"></div>
           <div class="v_top">
                <ul class="v_ul">
                    <li class="oli1">最新推荐</li>
                    <li class="oli2" @mouseover="oli2">视频推荐</li>
                    <li class="oli2" @mouseover="oli3">活动推荐</li>
                </ul>
            </div>
           <div class="v_bottom">
               <ul>
                   <li v-for="items in list" :key="items.id">
                       <div>
                           <img :src="items.img">
                           <span class="spa">{{items.sp}}</span>
                       </div>
                       <div>
                           {{items.p}}
                       </div>
                   </li>
               </ul>
            </div>
           <div class="v_bottom2">
               <ul>
                   <li v-for="item in list" :key="item.id">
                       <div class="ul_div1">
                           <img :src="item.img">
                           <div class="spa">已有 <span class="guanzhu">{{item.gz}}</span> 人关注</div>
                       </div>
                       <div class="ul_div2">
                            <h4>{{item.h4}}</h4>
                            <h4 class="h41"><span class="ho">活动时间</span>: &nbsp;{{item.time}}</h4>
                            <p>{{item.p}}</p>
                       </div>
                   </li>
               </ul>
            </div>
            <div class="b_b">
                <button class="btn">浏览<span class="spn">更多视频</span></button>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                list1:[
                    {id:1,img:"../../../static/images/v1.jpg",p:"顶级主播秀118：Uzi再秀本命薇恩 自豪式失误五杀",sp:"04:16"},
                    {id:2,img:"../../../static/images/v2.jpg",p:"质量王者局846：DEFT Mata Rush Untara",sp:"04:16"},
                    {id:3,img:"../../../static/images/v3.jpg",p:"大神怎么玩：Faker新阿卡丽 各种极限操作",sp:"04:12"},
                    {id:4,img:"../../../static/images/v4.jpg",p:"两版阿卡丽终极对决 哪个才是你心目中的刺客",sp:"06:58"},
                    {id:5,img:"../../../static/images/v5.jpg",p:"最强锐雯逆天操作 丝血秀翻武器",sp:"02:55"},
                    {id:6,img:"../../../static/images/v6.jpg",p:"民间大神秀：国服路人23劫！移形换影完美击杀",sp:"04:45"},
                ],
                list2:[
                    {id:1,img:"../../../static/images/推荐1.jpg",gz:"1379064",h4:"泳池派对幸运宝藏",time:"2018-08-07~2018-08-20",p:"开启宝藏赢珍惜皮肤"},
                    {id:2,img:"../../../static/images/推荐2.jpg",gz:"1973064",h4:"洛与霞七夕饰品",time:"2018-08-08~2018-09-30",p:"英雄联盟周边携手周大福工厂打造洛与霞七夕主题贵.."},
                    {id:3,img:"../../../static/images/推荐3.jpg",gz:"1452682",h4:"7周年创作大赛",time:"2018-08-05~2018-09-25",p:"7周年玩家创作大赛，pick出最优秀的辣个他！"},
                    {id:4,img:"../../../static/images/推荐4.jpg",gz:"246913",h4:"海克斯惊奇能量球",time:"2018-07-30~2018-08-12",p:"开启能量球抽皮肤 有机会掉落福袋赢限定皮肤"},
                ]
             }
        },
        created(){
          this.oli()
        },
        methods:{
            oli(){
                this.list = [];
                for (let v in this.list1){
                    this.list[v] = this.list1[v]
                }
            },
            oli2(){
                let bottom1 = document.getElementsByClassName("v_bottom")[0];
                bottom1.style.display = "block";
                let bottom2 = document.getElementsByClassName("v_bottom2")[0];
                bottom2.style.display = "none";
                this.list = [];
                for (let v in this.list1){
                    this.list[v] = this.list1[v]
                }
            },
            oli3(){
                let bottom1 = document.getElementsByClassName("v_bottom")[0];
                bottom1.style.display = "none";
                let bottom2 = document.getElementsByClassName("v_bottom2")[0];
                bottom2.style.display = "block";
                this.list = [];
                for (let v in this.list2){
                    this.list[v] = this.list2[v]
                }
            }
        }
    }
</script>

<style scoped>
.v_video{
    clear: both;
}
li{
    list-style: none;
}
    @media screen and (max-width: 768px){
        .v_video{
            margin-bottom: 30px;
            padding: 5px;
            box-sizing: border-box;
        }
        .top{
            height:50px;
        }
        .v_ul{
            width: 100%;
            height: 53px;
            border-bottom: 3px solid #ededee;
            display: flex;
        }
        .v_top li{
            width: 150px;
            height: 53px;
            line-height: 53px;
            text-align: center;
        }
        .v_ul .oli2:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            color:#d1ab57;
        }
        .v_top .oli1{
            font-size: 26px;
            color: black;
            font-weight: bold;
        }
        .v_bottom{
            padding: 5px;
            box-sizing: border-box;
        }
        .v_bottom ul {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            flex-wrap:wrap;
        }
        .v_bottom ul li{
            width: 100%;
            height: auto;
            position:relative;
            margin: 15px 0;
            font-size: 18px;
        }
        .v_bottom li img{
            width: 100%;
            height: 100%;
        }
        .spa{
            position: absolute;
            right: 3%;
            bottom:20%;
            z-index: 999;
            color:#fff;
            font-size: 16px;
        }
        .b_b .btn{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            margin-top: 10px;
            border-radius: 5px;
        }
        .b_b .btn:hover{
            background-color: #DADBDB;
        }
        .spn{
            color: #d1ab57;
        }

        .v_bottom2{
            display: none;
            margin-bottom: 20px;
        }
        .v_bottom2 ul{
            margin-top: 20px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction:column;
        }
        .v_bottom2 ul li{
            width: 100%;
            height: auto;
            margin-bottom: 10px;
        }
        .v_bottom2 ul li img{
            width: 100%;
            height: auto;
        }
        .v_bottom2 ul .ul_div1{
            width: 100%;
            height: auto;
            position: relative;
            text-align: center;
        }
        .v_bottom2 ul .ul_div1 .spa{
            color: #fff;
            font-size: 14px;
            background-color: rgba(1,1,1,0.5);
            width: 100%;
            text-align: center;
            height: 26px;
            line-height: 26px;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .v_bottom2 ul .ul_div1 .spa .guanzhu{
            color: #e4ca6f;
        }
        .v_bottom2 .ul_div2{
            height: 100px;
            padding: 5px;
            box-sizing: border-box;
            box-shadow: 0 3px 6px rgba(0,0,0,.15);
        }
        .v_bottom2 .ul_div2 h4{
            font-size:12px;
            height: 5px;
            color: #666;
        }
        .v_bottom2 .ul_div2 p{
            font-size: 14px;
            color: #8e8e8e;
        }
        .v_bottom2 .ul_div2 .ho{
            color: #d1ab57;
        }
        .h41{
            color: #8e8e8e;
        }


    }
    @media screen and (min-width: 768px) and (max-width: 992px){
        .v_video{
            margin-bottom: 70px;
        }
        .top{
            height:50px;
        }
        .v_ul{
            width: 100%;
            height: 53px;
            border-bottom: 3px solid #ededee;
            display: flex;
        }
        .v_top li{
            width: 150px;
            height: 53px;
            line-height: 53px;
            text-align: center;
        }
        .v_ul .oli2:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            color:#d1ab57;
        }
        .v_top .oli1{
            font-size: 26px;
            color: black;
            font-weight: bold;
        }
        .v_bottom ul {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap:wrap;
        }
        .v_bottom ul li{
            width: 350px;
            height: 320px;
            margin: 10px;
            position:relative;
        }
        .v_bottom li img{
            width: 100%;
            height: 250px;
        }
        .spa{
            position: absolute;
            right: 3%;
            bottom:30%;
            z-index: 999;
            color:#fff;
            font-size: 14px;
        }
        .b_b .btn{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            margin-top: 10px;
            border-radius: 5px;
        }
        .b_b .btn:hover{
            background-color: #DADBDB;
        }
        .spn{
            color: #d1ab57;
        }


        .v_bottom2{
            display: none;
            margin-bottom: 20px;
        }
        .v_bottom2 ul{
            margin-top: 20px;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .v_bottom2 ul li{
            width: 370px;
            height: 350px;
            margin-top: 10px;
        }
        .v_bottom2 ul li img{
            width: 100%;
            height: 230px;
        }
        .v_bottom2 ul .ul_div1{
            width: 100%;
            height: 230px;
            position: relative;
            text-align: center;
        }
        .v_bottom2 ul .ul_div1 .spa{
            color: #fff;
            font-size: 14px;
            background-color: rgba(1,1,1,0.5);
            width: 100%;
            text-align: center;
            height: 26px;
            line-height: 26px;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .v_bottom2 ul .ul_div1 .spa .guanzhu{
            color: #e4ca6f;
        }
        .v_bottom2 .ul_div2{
            height: 120px;
            padding: 5px;
            box-sizing: border-box;
            box-shadow: 0 3px 6px rgba(0,0,0,.15);
        }
        .v_bottom2 .ul_div2 h4{
            font-size:12px;
            height: 5px;
            color: #666;
        }
        .v_bottom2 .ul_div2 p{
            font-size: 14px;
            color: #8e8e8e;
        }
        .v_bottom2 .ul_div2 .ho{
            color: #d1ab57;
        }
        .h41{
            color: #8e8e8e;
        }



    }
    @media screen and (min-width: 992px) and (max-width: 1200px){
        .v_video{
            margin-bottom: 70px;
        }
        .top{
            height:50px;
        }
        .v_ul{
            width: 100%;
            height: 53px;
            border-bottom: 3px solid #ededee;
            display: flex;
        }
        .v_top li{
            width: 150px;
            height: 53px;
            line-height: 53px;
            text-align: center;
        }
        .v_ul .oli2:hover{
               border-bottom:3px solid #d1ab57;
               font-size: 18px;
               color:#d1ab57;
           }
        .v_top .oli1{
            font-size: 26px;
            color: black;
            font-weight: bold;
        }
        .v_bottom{
            margin-bottom: 70px;
        }
        .v_bottom ul {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap:wrap;
        }
        .v_bottom ul li{
            width: 300px;
            height: 300px;
            margin:10px;
            position:relative;
            z-index: -1;
            cursor: pointer;
            font-size: 16px;
        }
        .v_bottom li img{
            width: 100%;
            height: 200px;
        }
        .spa{
            position: absolute;
            right: 3%;
            bottom:35%;
            z-index: 999;
            color:#fff;
            font-size: 14px;
        }
        .b_b .btn{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
        }
        .b_b .btn:hover{
            background-color: #DADBDB;
        }
        .spn{
            color: #d1ab57;
        }


        .v_bottom2{
            display: none;
            margin-bottom: 20px;
        }
        .v_bottom2 ul{
            margin-top: 20px;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .v_bottom2 ul li{
            width: 450px;
            height: 400px;
        }
        .v_bottom2 ul li img{
            width: 100%;
            height: 250px;
        }
        .v_bottom2 ul .ul_div1{
            width: 100%;
            height: 250px;
            position: relative;
            text-align: center;
        }
        .v_bottom2 ul .ul_div1 .spa{
            color: #fff;
            font-size: 18px;
            background-color: rgba(1,1,1,0.5);
            width: 100%;
            text-align: center;
            height: 35px;
            line-height: 35px;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .v_bottom2 ul .ul_div1 .spa .guanzhu{
            color: #e4ca6f;
        }
        .v_bottom2 .ul_div2{
            height: 110px;
            padding: 5px;
            box-sizing: border-box;
            box-shadow: 0 3px 6px rgba(0,0,0,.15);
        }
        .v_bottom2 .ul_div2 h4{
            font-size:14px;
            height: 5px;
            color: #666;
        }
        .v_bottom2 .ul_div2 p{
            font-size: 16px;
            color: #8e8e8e;
        }
        .v_bottom2 .ul_div2 .ho{
            color: #d1ab57;
        }
        .h41{
            color: #8e8e8e;
        }


    }
    @media screen and (min-width: 1200px){
        .top{
            height:30px;
        }
        .v_video{
            margin-bottom: 70px;
        }
        .v_top{
            width: 100%;
            height: 53px;
            border-bottom: 3px solid #ededee;
        }
        .v_top li{
            width: 150px;
            height: 53px;
            line-height: 53px;
            float:left;
            text-align: center;
        }
        .v_ul .oli2:hover{
            border-bottom:3px solid #d1ab57;
            font-size: 18px;
            color:#d1ab57;
        }
        .v_top .oli1{
            font-size: 26px;
            color: black;
            font-weight: bold;
        }
        .v_bottom{
            margin-top: 10px;
        }
        .v_bottom li{
            width: 180px;
            height: 180px;
            position: relative;
            float: left;
            list-style: none;
            margin:0 7px;
            cursor: pointer;
        }
        .v_bottom li img{
            width: 100%;
            height: 100%;
            z-index: -999;
        }
        .v_bottom li .spa{
            position: absolute;
            right: 3%;
            bottom:35%;
            z-index: 999;
            color:#fff;
            font-size: 13px;
        }
        .b_b .btn{
            width: 100%;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            background-color: #ebebeb;
            border: 0;
            cursor: pointer;
            margin-top: 10px;
            border-radius: 5px;
        }
        .b_b .btn:hover{
            background-color: #DADBDB;
        }
        .spn{
            color: #d1ab57;
        }



        .v_bottom2{
             display: none;
            margin-bottom: 30px;
         }
        .v_bottom2 ul{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
        }
        .v_bottom2 ul li{
            width: 270px;
            height: 250px;
        }
        .v_bottom2 ul li img{
            width: 100%;
            height: 140px;
        }
        .v_bottom2 ul .ul_div1{
            width: 100%;
            height: 140px;
            position: relative;
            text-align: center;
        }
        .v_bottom2 ul .ul_div1 .spa{
            color: #fff;
            font-size: 14px;
            background-color: rgba(1,1,1,0.5);
            width: 100%;
            text-align: center;
            height: 26px;
            line-height: 26px;
            position: absolute;
            bottom: 0;
        }
        .v_bottom2 ul .ul_div1 .spa .guanzhu{
            color: #e4ca6f;
        }
        .v_bottom2 .ul_div2{
            height: 110px;
            padding: 5px;
            box-sizing: border-box;
            box-shadow: 0 3px 6px rgba(0,0,0,.15);
        }
        .v_bottom2 .ul_div2 h4{
            font-size:12px;
            height: 5px;
            color: #666;
        }
        .v_bottom2 .ul_div2 p{
            font-size: 14px;
            color: #8e8e8e;
        }
        .v_bottom2 .ul_div2 .ho{
            color: #d1ab57;
        }
        .h41{
            color: #8e8e8e;
        }
    }

</style>
