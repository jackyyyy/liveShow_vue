<template>
	<div class="box">
      <div class="zb_item" v-for="(item, index) in LookItems">
        <img src="../../../static/img/a.jpg">
        <span> {{item.label}} </span>
      </div>
	</div>
</template>

<script type="text/javascript">
import Store from '../../store'
export default{
  data () {
    return {
      LookItems: Store.fetch(),
      msg: 'Hello from comp1'
    }
  }
}
</script>
<style type="text/css">
    h1 {
        color: red;
    }
</style>
