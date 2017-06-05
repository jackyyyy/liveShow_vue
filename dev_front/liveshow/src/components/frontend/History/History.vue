<template>
	<div>
        <div class="calendar">
            <div>2017.06.15-2017.07.18</div>
        </div>
		<div class="box">
	      <div class="zb_item" v-for="(item, index) in LookHistoryItems">
	        <img src="../../../../static/img/a.jpg">
	        <span> {{item.label}} </span>
	      </div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Store from '../../../store'
export default{
  data () {
    return {
      LookHistoryItems: Store.fetch(),
      msg: 'Hello from comp1'
    }
  }
}
</script>
<style type="text/css">
    h1 {
        color: red;
    }
    .calendar {
        height: 100px;
        width: 100%;
        line-height: 100px;
        font-size: 16px;
    }
</style>
