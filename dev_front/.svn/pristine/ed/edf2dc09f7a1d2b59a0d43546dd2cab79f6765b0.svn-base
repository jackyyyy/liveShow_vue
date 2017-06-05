<template>
  <div class="homewrap">
    <div class="form_area">
      <div class="form_item">
        <span>邮箱：</span><input type="email" name="name" v-model="itemEmail">
      </div>
      <div class="form_item">
        <span>密码：</span><input type="password" name="password" v-model="itemPassword">
      </div>
      <div class="btn btn-info btn-mid" v-on:click="Register()">注册</div>
    </div>
  </div>
</template>
<script src="/static/js/index.js"></script>
<script>
import Store from './../../../store'
export default {
  name: 'Login',
  data () {
    return {
      items: Store.registerGet(),
      itemEmail: '',
      itemPassword: '',
      login: '',
      register: ''
    }
  },
  methods: {
    Register: function () {
      this.items.push({
        email: this.itemEmail,
        password: this.itemPassword
      })
      this.itemEmail = ''
      this.itemPassword = ''
      window.localStorage.setItem('isLogin', 'true')
      Store.registerSet(this.items)
      this.$router.push({path: '/frontend', query: {userId: 123}})
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
