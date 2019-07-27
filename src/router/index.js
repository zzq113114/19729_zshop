	/**
	 * ====================================================================
	 *功 能：路由器对象
	----------------------------------------------------------------------
	 *修改记录 ：
	 *日 期  版本 修改人 修改内容
     *
	 *2019-07-26 v0.0.1 zhangzhenqing 创建
	====================================================================
	 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //配置所有路由
  routes:[
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    //默认显示
    {
      path: '/',
      redirect: '/home'
        //默认不写false
    }
  ]
})
