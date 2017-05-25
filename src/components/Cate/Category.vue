<template>
    <div class="wrap">
      <ul>
        <li class="cate_item" v-for="(item, index) in catefory" v-on:click="GoToCate(index)">
          <span>{{item.name}}</span><span class="crow">></span>
        </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
export default{
  data: function () {
    return {
      catefory: [{name: '跨境电商', type: 'E-commerce'}, {name: '游戏', type: 'game'}, {name: 'APP', type: 'APP'}, {name: '户外', type: 'outdoor'}, {name: '歌舞', type: 'dancer'}]
    }
  },
  // props: ['msga'],
  methods: {
    GoToCate: function (item) {
      window.localStorage.setItem('currentUrl', '/Category')
      this.$emit('child-tell-me', item)
      this.$router.push({path: '/CateDetail'})
    }
  }
}
</script>

<style type="text/css">
  .cate_item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: left;
    padding: 10px 0 10px 15px;
    border-bottom: 1px solid #ddd;
  }
  .crow {
    float: right;
    color: #666;
    display: inline-block;
    width: 30px;
    height: 34px;
    transform: scaleY(1.8);
    font-size: 18px;
  }
</style>
