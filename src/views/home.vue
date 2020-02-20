<template>
<!-- 首页 -->
<div class='home'>
    <main class="width-min">
        <img src="@/assets/img/banner.jpg" alt="">
    </main>
    <main class='width-1180'>
        <header class="box-flex header">
            <div class='header-left'>
                <div class='header-left-top box-flex'>
                    <h3 class='title'>通知公告</h3>
                    <router-link to="#">了解更多</router-link>
                </div>
                <ul class='header-left-ul'>
                    <li class='header-left-ul-item text-hidden' v-for="item in 9" :key='item'>
                        <router-link to="#1">2018年度水利行业工法评审结果公示2018年度水利行业工法评审结果公示</router-link>
                    </li>
                </ul>
            </div>
            <div class='header-right'>
                <div class='header-right-top box-flex'>
                    <div class='header-right-top-left box-flex'>
                        <h3 class='title'>会员天地</h3>
                        <div class='pointer'>
                            <span :class="pointerIndex==0?'active':''" @click="pointerIndex = 0">会员名单</span>
                            <span :class="pointerIndex==1?'active':''" @click="pointerIndex = 1">入会指南</span>
                            <span :class="pointerIndex==2?'active':''" @click="pointerIndex = 2">会员动态</span>
                        </div>
                    </div>
                    <router-link class='a' to="#">了解更多</router-link>
                </div>
                <ul class='header-right-ul'>
                    <li class="header-right-item text-hidden" v-for='item in 26' :key='item'>
                        <router-link to='#'>北京城市排水集团有限责任公司北京城市排水集团有限责任公司</router-link>
                    </li>
                </ul>
            </div>
        </header>
        <main class="main-border1">
            <div class='main-border-top box-flex'>
                <div class="main-border-top-title box-flex pointer">
                    <h3 class='title'>协会新闻</h3>
                    <h3>会员单位</h3>
                    <h3 class='active'>行业动态</h3>
                </div>
                <router-link to='#'>了解更多</router-link>
            </div>
            <div class='main-border-bot box-flex'>
                <div class="main-border-bot-left">
                    <img src="@/assets/img/fuwu.jpg" alt="">
                </div>
                <div class='main-border-bot-right'>
                    <h3>2018年度水利行业秋季博览会</h3>
                    <p class='p'>ACB News《澳华财经在线》7月21日讯澳大利亚是排名在法国、意大利、西班牙及智利之后的全球第五大葡萄酒出口地，据澳葡萄酒局（Wine Australia）本周最新发布的出口报告，截至到今年6月的2017财年。</p>
                    <ul class="header-left-ul">
                        <li class="header-left-ul-item text-hidden" v-for="item in 6" :key="item">
                            <router-link to="#">2018年度水利行业工法评审结果公水利行业工法评审结果公示2018年度水利行业工法评审结果公水利行业工法评审结果公示</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <main class='main-border2'>
            <div class='box-flex main-border-top'>
                <div class='box-flex main-border-top-title'>
                    <h3 class='title'>协会服务</h3>
                    <div class='pointer'>
                        <span :class="associationIndex==0?'active':''" @click="associationIndex = 0">专业评审</span>
                        <span :class="associationIndex==1?'active':''" @click="associationIndex = 1">行业标准</span>
                        <span :class="associationIndex==2?'active':''" @click="associationIndex = 2">会议展示</span>
                    </div>
                </div>
                <router-link to='#'>了解更多</router-link>
            </div>
            <div class="box-flex main-border-box">
                <div class="main-border-box-item">
                    <img src="@/assets/img/1.jpg" alt="">
                    <p class="text-hidden">2018年度水利行业秋李博览会</p>
                </div>
                <div class="main-border-box-item">
                    <img src="@/assets/img/1.jpg" alt="">
                    <p class="text-hidden">22018年度水利行业秋李博览会</p>
                </div>
                <div class="main-border-box-item">
                    <img src="@/assets/img/1.jpg" alt="">
                    <p class="text-hidden">2018年度水利行业秋季博冠会</p>
                </div>
            </div>
        </main>
    </main>
    <div class="width-min">
        <router-link to="#">
            <img src="@/assets/img/footerbanner.jpg" alt="">
        </router-link>
    </div>
    <footer class="obx-footer width-1180 box-flex">
        <div class='footer-left'>
            <div class="footer-left-title">
                <h3 class='title'>京津冀协同发展</h3>
            </div>
            <div class="footer-left-main box-flex">
                <div class="footer-left-main-le">
                    <img src="@/assets/img/4.jpg" alt="">
                    <p class="p-hover text-hidden">2018年度水利行业秋季博览会</p>
                </div>
                <ul class="header-left-ul footer-left-main-re">
                    <li class="header-left-ul-item text-hidden" v-for="item in 6" :key="item">
                        <router-link to="#">2018年度水利行业工法评审结果公水利行业工法评审结果公示2018年度水利行业工法评审结果公水利行业工法评审结果公示</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class='footer-right'>
            <div class="footer-right-title box-flex">
                <div class='footer-right-obx box-flex'>
                    <h3 class='title'>行业智库</h3>
                    <div class='pointer'>
                        <span :class="pointerIndex==0?'active':''" @click="pointerIndex = 0">专家库</span>
                        <span :class="pointerIndex==1?'active':''" @click="pointerIndex = 1">知识库</span>
                    </div>
                </div>
                <router-link class='a' to="#">了解更多</router-link>
            </div>
            <div class='footer-right-main box-flex'>
                <p class="p-left">&lt;</p>
                <ul class="footer-right-ul box-flex">
                    <li class='footer-right-ul-item'>
                        <img src="@/assets/img/l1.jpg" alt="">
                        <p>王星</p>
                    </li>
                    <li class='footer-right-ul-item'>
                        <img src="@/assets/img/l2.jpg" alt="">
                        <p>李晓峰</p>
                    </li>
                    <li class='footer-right-ul-item active'>
                        <img src="@/assets/img/l3.jpg" alt="">
                        <p>高丽水</p>
                    </li>
                    <li class='footer-right-ul-item'>
                        <img src="@/assets/img/l4.jpg" alt="">
                        <p>王小娟</p>
                    </li>
                    <li class='footer-right-ul-item'>
                        <img src="@/assets/img/l5.jpg" alt="">
                        <p>高丽水</p>
                    </li>
                </ul>
                <p class='p-right'>&gt;</p>
            </div>
        </div>
    </footer>
</div>
</template>
<script>
export default {
    data(){
        return {
            pointerIndex:0,
            associationIndex:0,//协会服务
        }
    }
}
</script>
<style lang="less" scoped>
    .header-left-ul{
        padding-top:6px;
        line-height: 28px;
        .header-left-ul-item{
            a{
                font-size:@size-min;
                color:@color-51;
            }
        }
        .header-left-ul-item::before{
            content:'·';
            display:inline-block;
            font-size:@size-max;
            color:@color-blue;
            margin-right:6px;
        }
    }
    .pointer{
        color:@color-black;
        span + span::before{
            content:'|';
            display:inline-block;
            margin:0 6px;
            color:@color-black;
        }
        span.active{
            color:@color-blue;
        }
    }
    .box-flex.header{
        padding-top:30px;
        .header-left{
            width:30%;
            border:1px solid @color-e;
            padding:8px;
            .header-left-top{
                align-items: center;
                padding-bottom:8px;
                border-bottom:1px solid @color-e;
                a{
                    font-size:@size-min;
                }
            }
            // .header-left-ul
        }
        .header-right{
            width:68.5%;
            border:1px solid @color-e;
            padding:8px;
            .header-right-top{
                padding-bottom:8px;
                border-bottom:1px solid @color-e;
                .header-right-top-left{
                  width:46%;
                  align-items:center;
                }
                .a{
                    font-size:@size-min;
                }
            }
            .header-right-ul{
                padding-top:6px;
                display:flex;
                flex-wrap: wrap;
                .header-right-item{
                    width:33.33%;
                    padding:0 2px;
                    line-height:28px;
                    a{
                        font-size:@size-min;
                        color:@color-51;
                    }
                }
            }
        }
    }
    .main-border1{
        margin:20px 0;
        padding:8px;
        border:1px solid @color-e;
        .main-border-top{
            align-items:center;
            border-bottom:1px solid @color-e;
            .main-border-top-title{
                align-items:center;
                padding-bottom:8px;
                h3 + h3{
                    margin-left:20px;
                }
                h3.active{
                    color:@color-blue;
                }
            }
            a{
                font-size:@size-min;
            }
        }
        .main-border-bot{
            padding-top:8px;
            .main-border-bot-left{
                width:40%;
            }
            .main-border-bot-right{
                width:60%;
                padding-left:12px;
                .p{
                    text-indent:32px;
                    padding-top:12px;
                    color:@color-black;
                }
            }
        }
    }
    .main-border2{
        margin-bottom:20px;
        padding:8px;
        border:1px solid @color-e;
        .main-border-top{
            padding-bottom:8px;
            border-bottom:1px solid @color-e;
            .main-border-top-title{
                align-items:center;
                .pointer{
                    margin-left:50px;
                }
            }
        }
        .main-border-box{
            padding:26px 30px 16px;
            .main-border-box-item{
                width:26%;
                p{
                    text-align:center;
                    color:@color-51;
                    font-size:@size-min;
                    padding-top:8px;
                }
            }
        }
    }
    .obx-footer{
        margin:20px auto;
        height:280px;
        overflow: hidden;
        .footer-left,.footer-right{
            width:49.5%;
            border:1px solid @color-e;
            padding:8px;   
        }
        .footer-left{
            .footer-left-title{
                padding-bottom:8px;
                border-bottom:1px solid @color-e;
            }
            .footer-left-main{
                padding:12px;
                .footer-left-main-le{
                    width:50%;
                    position:relative;
                    img{
                        height:100%;
                    }
                    .p-hover{
                        position: absolute;
                        bottom:0;
                        width:100%;
                        height:30px;
                        background-color:rgba(0,0,0,.5);
                        color:white;
                        line-height:30px;
                        padding-left:12px;
                        font-size:@size-min;
                    }
                }
                .footer-left-main-re{
                    width:50%;
                    padding-left:8px;
                }

            }
        }
        .footer-right{
            .footer-right-title{
                border-bottom:1px solid @color-e;
                .footer-right-obx{
                    align-items:center;
                    padding-bottom:8px;
                    .pointer{
                        padding-left:30px;
                    }
                }
            }
            .footer-right-main{
                padding-top:42px;
                align-items:center;
                .p-left,.p-right{
                    font-size:@size-max;
                    color:@color-blue;
                    cursor: pointer;
                    margin-top: -20px;
                }
                .footer-right-ul{
                    width:86%;
                    align-items:center;
                    .footer-right-ul-item{
                        width:90px;
                        height:146px;
                        p{
                            text-align:center;
                            color:@color-51;
                        }
                    }
                    .footer-right-ul-item.active{
                        p{
                            color:@color-blue;
                        }        
                    }
                }
            }
        }
    }
</style>
