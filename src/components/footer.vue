<template>
<div class="footer-footer width-min">
    <footer class='footer width-1180'>
        <ul class='footer-ul'>
            <li class='footer-ul-title'>走进协会</li>
            <li class='footer-ul-item' v-for="(item,i) in list[0]" :key="i">
                <router-link :to="item.path">{{item.test}}</router-link>
            </li>
        </ul>
        <ul class='footer-ul'>
            <li class='footer-ul-title'>新闻动态</li>
            <li class='footer-ul-item' v-for="(item,i) in list[1]" :key="i">
                <router-link :to="item.path">{{item.test}}</router-link>
            </li>
        </ul>
        <ul class='footer-ul'>
            <li class='footer-ul-title'>协会服务</li>
            <li class='footer-ul-item' v-for="(item,i) in list[2]" :key="i">
                <router-link :to="item.path">{{item.test}}</router-link>
            </li>
        </ul>
        <ul class='footer-ul'>
            <li class='footer-ul-title'>会员天地</li>
            <li class='footer-ul-item' v-for="(item,i) in list[3]" :key="i">
                <router-link :to="item.path">{{item.test}}</router-link>
            </li>
        </ul>
        <ul class='footer-ul'>
            <li class='footer-ul-title'>行业智库</li>
            <li class='footer-ul-item' v-for="(item,i) in list[4]" :key="i">
                <router-link :to="item.path">{{item.test}}</router-link>
            </li>
        </ul>
    </footer>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                [{
                    path:'/start/association/0',
                    test:'协会简介'
                },
                {
                    path:'/start/association/1',
                    test:'协会章程'
                },
                {
                    path:'/start/association/2',
                    test:'管理方法'
                },
                {
                    path:'/start/association/3',
                    test:'领导团队'
                },
                {
                    path:'/start/association/4',
                    test:'组织架构'
                },
                {
                    path:'/start/association/5',
                    test:'分支机构'
                },
                {
                    path:'/start/association/6',
                    test:'联系我们'
                }],

                [{
                    path:'#',
                    test:'通知公告'
                },
                {
                    path:'#',
                    test:'协会新闻'
                },
                {
                    path:'#',
                    test:'会员单位'
                },
                {
                    path:'#',
                    test:'行业动态'
                }],
                [{
                    path:'#',
                    test:'专业评审'
                },
                {
                    path:'#',
                    test:'行业标准'
                },
                {
                    path:'#',
                    test:'会议展示'
                }],
                [{
                    path:'#',
                    test:'会员名单'
                },
                {
                    path:'#',
                    test:'入会指南'
                },
                {
                    path:'#',
                    test:'互动窗口'
                }],
                [{
                    path:'#',
                    test:'专家库'
                },{
                    path:'#',
                    test:'知识库'
                }]
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .footer-footer{
        background-color:@color-blue;
        padding:30px 0 50px 0;
        .footer{
            display:flex;
            justify-content: space-between;
            color:white;
            .footer-ul-title{
                font-size:@size-middle;
                font-weight: bold;
                padding-bottom:10px;
            }
            .footer-ul-item{
                line-height: 26px;
                a{
                    color:#E9F6FC;
                    font-size:@size-min;
                }
            }
        }
    }
</style>