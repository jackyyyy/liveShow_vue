<template>
    <div class="app" id="app">
        <!-- <img src="./assets/logo.png"> -->
        <nav-a v-bind:msga="isShow" v-on:is-show="CloseMenu"></nav-a>
        
        <!-- 菜单 -->
        <menu-a v-bind:msga="isShow" v-on:close-menu="CloseMenu"></menu-a>

        <div class="main" v-bind:class="{'look_menu': !isShow, 'look_body': isShow}">
            <router-view></router-view>
            <div class="mask" v-show="!isShow"></div>
        </div>
    </div>
</template>
<script>
import menuA from './components/frontend/Menu/menuA'
import navA from './components/frontend/navA'
import $ from 'jquery'
import ComComponents from './ComComponents'
export default {
  name: 'app',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    navA, menuA, ComComponents
  },
  methods: {
    CloseMenu: function (bVal) {
      this.isShow = bVal
    }
  },
  watch: {
    isShow: {
      handler: function (val, oldval) {
        if (val === true) {
          $('.menu').addClass('hideAnimate').removeClass('showAnimate')
        } else {
          $('.menu').removeClass('hideAnimate').addClass('showAnimate')
        }
      },
      deep: true
    }
  }
}
</script>
<style>
@import '../static/css/base.css';
@import '../static/css/index.css';
</style>
