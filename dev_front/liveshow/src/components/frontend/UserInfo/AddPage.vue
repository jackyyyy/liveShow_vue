<template>
  <div class="homewrap">
    <div class="form_area">
      <div class="form_item">
        <span>姓名：</span><input type="test" name="name" v-model="itemName">
      </div>
      <div class="form_item">
        <span>类别：</span><input type="test" name="type" v-model="itemType">
      </div>
      <div class="btn btn-info btn-mid" v-on:click="onEnter()">添加</div>
    </div>
    <ul>
      <li v-for="item in items" v-if="item.isFinished">
      <span>{{item.label}}</span>
      </li>
    </ul>
  </div>
</template>
<script src="/static/js/index.js"></script>
<script>
import Store from './../../../store'
export default {
  name: 'Home',
  data () {
    return {
      items: Store.fetch(),
      itemName: '',
      itemType: ''
    }
  },
  methods: {
    onEnter: function () {
      console.log(this.items)
      this.items.push({
        label: this.itemName,
        type: this.itemType,
        isFinished: true
      })
      this.itemName = ''
      this.itemType = ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '/static/css/home.css'*/
.homewrap {
  width: 100%;
  height: 100%;
}
.form_area {
  padding: 20px;
}
.form_item {
  height: 30px;
  line-height: 30px;
  width: 100%;
  margin: 10px 0;
}
.form_item input {
  height: 30px;
}
</style>
