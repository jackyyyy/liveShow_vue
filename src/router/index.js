import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Cate/Category'
import CateDetail from '@/components/Cate/CateDetail'
import History from '@/components/History/History'
import AddPage from '@/components/UserInfo/AddPage'
import Recharge from '@/components/Recharge/Recharge'
import UserInfo from '@/components/UserInfo/UserInfo'
import Login from '@/components/login/login'
import Play from '@/components/PlayPage/play'
import '../../static/lib/bootstrap-3.3.7/js/bootstrap.min.js'
import '../../static/lib/bootstrap-3.3.7/css/bootstrap.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home // 首页
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home // 首页
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category // 分类
    },
    {
      path: '/AddPage',
      name: 'Addpage',
      component: AddPage // 添加
    },
    {
      path: '/CateDetail',
      name: 'CateDetail',
      component: CateDetail // 分类详情
    },
    {
      path: '/History',
      name: 'History',
      component: History // 历史记录
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge // 充值中心
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo // 个人中心
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login // 登录注册
    },
    {
      path: '/Play',
      name: 'Play',
      component: Play // 直播界面
    }
  ]
})
