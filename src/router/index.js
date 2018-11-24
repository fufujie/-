import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import User from '@/pages/User'
import Chart from '@/pages/Chart'
import Setting from '@/pages/setting'
import SettingInfo from '@/pages/setting/Info'
import SettingAuth from '@/pages/setting/Auth'
import SettingAdv from '@/pages/setting/Adv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Chart
    },{
    	path:'/category',
    	component:Category
    },{
    	path:'/user',
    	component:User
    },{
    	path:'/article',
    	component:Article
    },{
      path:'/setting',
      component:Setting,
      children:[{
        path:'info',  /* /setting/info -> SettingInfo */
        component:SettingInfo
      },{
        path:'auth',  
        component:SettingAuth
      },{
        path:'adv', 
        component:SettingAdv
      }]
    }
  ]
})
