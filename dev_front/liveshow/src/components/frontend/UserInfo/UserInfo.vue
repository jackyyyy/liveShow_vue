<template>
  <div class="user_detail">
    <div class="user_photo">
      <img src="../../../../static/img/a.jpg" alt="logo">
    </div>

    <div class="tab_menu">
      <ul>
        <li v-for="(item, index) in tabMenu" v-on:click="changeTab(item, index)">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div v-show="TabInfo===0" class="user_info_detail">
      <ul>
        <li v-for="(item, index) in userInfoDetail">
          <span class="item_name">{{item.name}}：</span><span class="item_value">{{item.value}}</span>
        </li>
      </ul>
    </div>

    <div v-show="TabInfo===1" class="user_info_album">
      <ul>
        <li v-for="(item, index) in album">
          <img v-bind:src="item.value" alt="myphoto">
        </li>
      </ul>
    </div>

    <div v-show="TabInfo===2" class="user_info_friend">
      <ul class="friend_nav">
        <li v-on:click="changeFriend(0)"><span>我关注的</span></li>
        <li v-on:click="changeFriend(1)"><span>关注我的</span></li>
      </ul>
      <ul v-show="myFriend===0" class="friend_list">
        <li v-for="(item, index) in myAttention">
          <span class="item_name">{{item.name}}</span>
        </li>
      </ul>
      <ul v-show="myFriend===1" class="friend_list">
        <li v-for="(item, index) in attentionMe">
          <span class="item_name">{{item.name}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      tabMenu: [{name: '资料'}, {name: '相册'}, {name: '朋友'}],
      userInfoDetail: [{name: '姓名', value: '德华'}, {name: '年龄', value: '23'}, {name: '城市', value: '杭州'}, {name: '职业', value: '前端开发工程师'}],
      album: [{name: '小花', value: '../../../static/img/a.jpg'}, {name: '小美', value: '../../../static/img/a.jpg'}, {name: '阿杰', value: '../../../static/img/a.jpg'}, {name: '阿菜', value: '../../../static/img/a.jpg'}],
      myAttention: [{name: '小花'}, {name: '小明'}, {name: '小李'}, {name: '小王'}, {name: '小景'}, {name: '小刘'}],
      attentionMe: [{name: '小李'}, {name: '小王'}, {name: '小花'}, {name: '小明'}, {name: '小景'}, {name: '小刘'}],
      TabInfo: 0,
      myFriend: 0,
      msg: 'Hello from comp1'
    }
  },
  methods: {
    changeTab: function (item, index) {
      this.TabInfo = index
    },
    changeFriend: function (index) {
      this.myFriend = index
    }
  }

}
</script>
<style type="text/css">
@import '/static/css/userinfo.css';
</style>
