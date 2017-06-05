<template>
  <div class="contain">
    <div class="nava">
      <div class="menu-btn" v-on:click="ShowMenu()"><span class="glyphicon glyphicon-menu-hamburger"></span></div>
      <div class="logoname">
        <!-- {{menuItem[1].name}} -->
        <img v-show="currentTitle === null" src="../../../static/img/a.jpg" alt="logo">
        <span v-show="currentTitle !== null">{{currentTitle}}</span>
      </div>
      <div class="search-btn"></div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  props: [ 'msga' ],
  data () {
    return {
      isShow: this.msga,
      currentTitle: window.localStorage.getItem('currentTitle'),
      // menuItem: [{name: '选择语言', url: '/Home'}, {name: '分类', url: '/Category'}, {name: '历史记录', url: '/AddPage'}, {name: '购买虚礼货币', url: '/Home'}, {name: '完整版', url: '/Home'}, {name: '帮助', url: '/Home'}, {name: '新增', url: '/Home'}],
      currentUrl: window.localStorage.getItem('currentUrl')
    }
  },
  methods: {
    ShowMenu () {
      if (window.localStorage.getItem('currentUrl') === '/frontend') {
        $('.menu-btn').html('<span class="glyphicon glyphicon-menu-hamburger"></span>')
        this.isShow = !this.isShow
        $('.menu_item li').css('background', '#ccc')
        this.$emit('is-show', this.isShow)
        this.$router.push({path: window.localStorage.getItem('currentUrl')})
      } else {
        $('.menu-btn').html('<span class="glyphicon glyphicon-share-alt back_home"></span>')
        this.$router.push({path: window.localStorage.getItem('currentUrl')})
        window.localStorage.setItem('currentUrl', '/frontend')
      }
    }
  },
  watch: {
    msga: {
      handler: function (val) {
        this.isShow = val
      },
      deep: true
    }
  }
}
</script>
<style>
@import '/static/css/nav.css'
</style>
