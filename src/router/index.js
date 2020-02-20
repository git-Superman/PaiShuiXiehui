import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/start',
      component: ()=>import('@/components/index'),
      children:[
        {
          path:'/',
          redirect:'home'
        },
        {
          path:'home',
          component:()=>import('@/views/home')
        },
        {
          path:'association/:option',
          component:()=>import('@/views/Association')
        }
      ]
    },
    {
      path:'*',
      redirect:'start'
    }
  ]
})
