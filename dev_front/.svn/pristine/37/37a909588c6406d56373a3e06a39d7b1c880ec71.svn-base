<template>
  <div class="homewrap">
    backend
  </div>
</template>
<script src="/static/js/index.js"></script>
<script>
import Store from './../../store'
export default {
  name: 'Backend',
  data () {
    return {
      items: Store.fetch(),
      hotItem: Store.fetch(),
      newItem: '',
      liveList: [{name: '关注', type: 'attention'}, {name: '电商', type: 'E-commerce'}, {name: '歌舞', type: 'dancer'}, {name: '游戏', type: 'game'}, {name: '户外', type: 'outdoor'}]
    }
  },
  methods: {
    changeCate: function (item) {
      this.items = Store.fetch()
      var tmpArr = []
      for (var i = 0, len = this.items.length; i < len; i++) {
        if (this.items[i].type === item.type) {
          tmpArr.push(this.items[i])
        }
      }
      console.log(item.type, tmpArr)
      if (tmpArr.length > 0) {
        this.items = tmpArr
      } else {
        this.items = []
      }
    },
    GoToHouse: function (item, index) {
      this.$router.push({path: '/Play', query: {liveId: 1001}})
    }
  }
}
</script>
<style scoped>
  /*@import '/static/css/home.css'*/
.homewrap {
  width: 100%;
  height: 100%;
}

.hot_title {    
  height: 35px;
  line-height: 45px;
}

.live_show_list {
  border-top: 1px solid #ddd;
  line-height: 17px;
}

.live_list_item {
  flex: 1;
}
</style>
