<template>
<div>
    <header class="width-1180">
        <div class="header-top">
            <img src="@/assets/img/logo.png" alt="logo">
            <div class="header-top-bot">
                <router-link to="javascript:;">登录</router-link>  |
                <router-link to="javascript:;">注册</router-link>
            </div>
        </div>
        <ul class="header-nav">
            <li class="header-nav-item">
                <router-link to="/start/home">首页</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="/start/association/0">走进协会</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="#">新闻动态</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="#">协会服务</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="#">会员天地</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="#">行业智库</router-link>
            </li>
            <li class="header-nav-item">
                <router-link to="#">理事单位</router-link>
            </li>
        </ul>
    </header>
</div>
</template>
<style lang="less" scoped>
    .header-top{
        padding-top:30px;
        padding-bottom:10px;
        display:flex;
        justify-content: space-between;
        align-items: flex-end;
        color:@color-blue;
        img{
            width:240px;
        }
        a{
            color:@color-blue;
        }
        
    }
    .header-nav{
        width:60%;
        margin-left:40%;
        display:flex;
        justify-content: space-between;
        .header-nav-item{
            a{
                color:@color-51;
                font-weight: bold;
                display:block;
                padding:0 12px;
                height:80px;
                line-height: 80px;
            }
            .router-link-active{
                color:white;
                background-color:@color-blue;
            }
        }
    }
</style>