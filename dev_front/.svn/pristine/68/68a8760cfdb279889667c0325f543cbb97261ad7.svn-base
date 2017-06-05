<template>
  <div class="menu">
    <div class="menu_item">
      <ul>
        <li v-for="(item, index) in menuItem" v-on:click="ShowMenu(item, index)">
          <div v-if="index===0" class="user_info">
            <div v-show="isLogin === true">
              <div class="user_head" v-on:click="ShowMenu(-1)">
                <router-link :to="{ path: item.url }"></router-link>
              </div>
              <div class="user_name">{{item.name}}</div>
            </div>
            <div class="login_area" v-show="isLogin === false">
              <div class="btn btn-info btn-sm mar_r15" v-on:click="GoToLogin(0)">登录</div>
              <div class="btn btn-default btn-sm" v-on:click="GoToLogin(1)">注册</div>
            </div>
          </div>
          <span v-if="index===1" class="link_li">{{item.name}}</span>
          <router-link v-if="index>1" :to="{ path: item.url }">
            <span class="link_li">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="language" v-show="choiseLanguage">
      <ul>
        <li v-for='item in language' v-on:click="ShowMenu(-1)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      menuItem: [{name: '大司马', url: '/frontend/UserInfo'}, {name: '选择语言', url: '/frontend/Home'}, {name: '分类', url: '/frontend/Category'}, {name: '历史记录', url: '/frontend/History'}, {name: '购买虚礼货币', url: '/frontend/Recharge'}, {name: '完整版', url: '/frontend/Home'}, {name: '帮助', url: '/frontend/Home'}, {name: '新增', url: '/frontend/AddPage'}],
      language: ['简体中文', '英文', '繁体中文'],
      choiseLanguage: false,
      isLogin: false
    }
  },
  methods: {
    ShowMenu: function (item, index) {
      window.localStorage.setItem('currentTitle', item.name)
      if (index === 1) {
        this.choiseLanguage = !this.choiseLanguage
      } else if (index !== 0) {
        this.choiseLanguage = false
        $('.menu_item li').eq(index).css('background', '#ddd')
        this.$emit('close-menu', true)
        $('.menu-btn').html('<span class="glyphicon glyphicon-share-alt back_home"></span>')
      }
    },
    GoToLogin: function (index) {
      this.$router.push({path: '/frontend/Login'})
      this.ShowMenu(-1)
    }
  },
  mounted () {
    if (this.$route.query.userId) {
      this.isLogin = true
    }
  }
}
</script>
<style>
@import '/static/css/menu.css'
</style>
