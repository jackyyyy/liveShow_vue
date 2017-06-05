import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/frontend/Home'
import Category from '@/components/frontend/Cate/Category'
import CateDetail from '@/components/frontend/Cate/CateDetail'
import History from '@/components/frontend/History/History'
import AddPage from '@/components/frontend/UserInfo/AddPage'
import Recharge from '@/components/frontend/Recharge/Recharge'
import UserInfo from '@/components/frontend/UserInfo/UserInfo'
import Login from '@/components/frontend/login/login'
import Play from '@/components/frontend/PlayPage/play'

import Backend from '@/components/backend/Backend'
import '../../static/lib/bootstrap-3.3.7/js/bootstrap.min.js'
import '../../static/lib/bootstrap-3.3.7/css/bootstrap.min.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/frontend',
      name: 'HomePage',
      component: Home // 首页
    },
    {
      path: '/frontend/Home',
      name: 'Home',
      component: Home // 首页
    },
    {
      path: '/frontend/Category',
      name: 'Category',
      component: Category // 分类
    },
    {
      path: '/frontend/AddPage',
      name: 'Addpage',
      component: AddPage // 添加
    },
    {
      path: '/frontend/CateDetail',
      name: 'CateDetail',
      component: CateDetail // 分类详情
    },
    {
      path: '/frontend/History',
      name: 'History',
      component: History // 历史记录
    },
    {
      path: '/frontend/Recharge',
      name: 'Recharge',
      component: Recharge // 充值中心
    },
    {
      path: '/frontend/UserInfo',
      name: 'UserInfo',
      component: UserInfo // 个人中心
    },
    {
      path: '/frontend/Login',
      name: 'Login',
      component: Login // 登录注册
    },
    {
      path: '/frontend/Play',
      name: 'Play',
      component: Play // 直播界面
    },
    {
      path: '/frontend/backend',
      name: 'Backend',
      component: Backend // 直播界面
    }
  ]
})
