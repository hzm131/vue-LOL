<template>
    <div class="footer_f">
        <div class="container footer_content">
            <div class="footer_left">
                <div class="footer_logo">
                    <div class="logo1 hidden-sm hidden-xs">
                        <a href="#">腾讯互动娱乐</a>
                    </div>
                    <div class="logo2 hidden-sm hidden-xs">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <div class="footer_right">
                <ul>
                    <li>
                        <a href="#">腾讯互动娱乐</a>
                        <span>|</span>
                        <a href="#">服务条款</a>
                        <span>|</span>
                        <a href="#">隐私政策</a>
                        <span>|</span>
                        <a href="#">腾讯游戏招聘</a>
                        <span>|</span>
                        <a href="#">腾讯游戏客服</a>
                        <span>|</span>
                        <a href="#">游戏地图</a>
                        <span>|</span>
                        <a href="#">商务合作</a>
                    </li>
                    <li><a href="#">腾讯公司版权所有</a></li>
                    <li><a href="#" class="show">OPYRIGHT © 1998 - 2018 TENCENT. ALL RIGHTS RESERVED.</a>C</li>
                    <li><a href="#" class="show">COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</a></li>
                    <li><a href="#">本网络游戏适合18+岁的用户使用；为了您的健康，请合理控制游戏时间</a></li>
                    <li><a href="#" class="show">粤网文[2017]6138-1456号<span>|</span>>新出网证（粤）字010号</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer_f{
        clear: both;
    }

    .logo1{
        width: 180px;
        height: 30px;
        background: url("../../../static/images/logo-3.png");
        text-indent: -999em;
        margin-top: 50px;
    }

    .logo2{
        width: 75px;
        height: 66px;
        background: url("../../../static/images/logo-2.png");
        margin-top: 40px;
    }
    .footer_content .footer_right li a{
        color: #A5A5A5;
    }
    .footer_content .footer_right li span{
        color: #1d3939;
        font-size: 1px;
    }

    .footer_right li a{
        font-size: 10px;
    }
    @media screen and (max-width: 768px){
        .footer_f{
            height: 140px;
            background-color: #000000;
            text-align: center;
        }
        .show{
            display: none;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px){
        .footer_f{
            height: 160px;
            background-color: #000000;
            text-align: center;
        }
        .footer_f .footer_right{
            padding-top: 10px;
        }
    }
    @media screen and (min-width: 992px){
        .footer_f{
            height: 180px;
            background-color: #000000;
        }
        .footer_right{
            margin-top: 30px;
            float: right;
        }
        .footer_left{
            float:left;
            margin-top: 20px;
        }
        .logo1{
            float: left;
        }
        .logo2{
            float: right;
        }
    }
</style>
