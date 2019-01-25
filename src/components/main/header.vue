<template>
    <div>
        <div class="header">
            <div class="container c_c">
                <div class="header-left fl">
                    <div class="header-logo fl">
                        <a href="#">
                            <img src="../../../static/images/logo.png" alt="">
                        </a>
                    </div>
                    <ul class="header-content fr hidden-sm hidden-xs">
                        <li><router-link to="/home" class="lol a">首页</router-link></li>
                        <li><router-link to="/home/hero" class="a">我的英雄</router-link></li>
                        <li><router-link to="/home/pifu" class="a">我的皮肤</router-link></li>
                        <li><router-link to="/home/zhanji" class="a">我的战绩</router-link></li>
                        <li><router-link to="/home/bisai" class="a">热门比赛</router-link></li>
                    </ul>
                </div>
                <div class="header-right fr hidden-sm hidden-xs">
                    <router-link to="/register" class="d">登录</router-link>
                    <span class="ss">|</span>
                    <router-link to="/login" class="d">注册</router-link>
                </div>
                <span class="i_tb hidden-md hidden-lg"><img src="../../../static/images/more.png" @click="anniu"></span>
            </div>
        </div>

        <div class="y_list">
            <div class="z_j"></div>
            <ul>
                <li><router-link to="/home" class="c">首页</router-link></li>
                <li><router-link to="/home/hero" class="c">我的英雄</router-link></li>
                <li><router-link to="/home/pifu" class="c">我的皮肤</router-link></li>
                <li><router-link to="/home/zhanji" class="c">我的战绩</router-link></li>
                <li><router-link to="/home/bisai" class="c">热门比赛</router-link></li>
                <li><router-link to="/register" class="c">登录</router-link></li>
                <li><router-link to="/login" class="c">注册</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
          return{
          }
        },
        methods:{
            anniu(){
                let a = document.querySelector(".y_list");
                let b = a.style.display;
                if(b === "block"){
                    a.style.display = "none"
                }else{
                    a.style.display = "block"
                }
            }
        }
    }
</script>

<style scoped>

    .ss{
        color: #fff;
        font-size: 14px;
    }

    .i_tb{
        display: none;
    }
    .header{
        background-color: #030303;
        height: 100px;

    }
    .header-left img{
        width: 200px;
        height: 100px;
    }
    .header-content li{
        float: left;
        width: 130px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        cursor: default;
    }
    .header-content .lol{
        font-weight: 600;
    }
    .header-content .a:hover{
        color: #f4d057;
    }
    .header-content .a{
        color:#fff;
        font-size: 18px;
    }

    .header-right .d{
        display: inline-block;
        width: 50px;
        height:30px;
        font-size: 20px;
        color:#fff;
        margin-top: 35px;
        margin-left: 10px;
    }
    .header-right .d:hover{
        font-weight:600;
        color: #f4d057;
    }

    .y_list{
        display: none;
    }
    @media screen and (max-width: 992px){
        .c_c{
            position:relative;
        }
        .i_tb{
            display: inline-block;
            position:absolute;
            top:30px;
            right: 20px;
            border: 1px solid #fff;
            cursor: default;
        }
        .z_j{
            height: 30px;
            background-color: black;
            border-top:1px solid #fff;
            box-sizing: border-box;
        }
        .y_list{
            background-color: black;
        }
        .y_list li{
            height: 45px;
            line-height: 45px;
            text-align: center;
        }
        .y_list li .c{
            font-size: 18px;
            color:#fff;
        }
        .y_list li:hover{
            background-color:silver;
        }
        .y_list li .c:hover{
            color:red;
        }


    }

</style>
