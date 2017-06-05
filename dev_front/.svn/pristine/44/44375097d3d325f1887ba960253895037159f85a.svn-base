<template>
	<div class="pay">
		<ul>
			<li v-for="(item, index) in payItem" v-on:click="showPayFun(item,index)" v-bind:class="{'pay_li': (index + 1) !== payItem.length}">
        <div>{{item.name}}</div>
      </li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import $ from 'jquery'
export default{
  data () {
    return {
      payItem: [{name: '信用卡', type: 'visa'}, {name: 'paypal', type: 'paypal'}, {name: '电汇', type: 'dh'}, {name: '比特币', type: 'btb'}, {name: '短信', type: 'email'}, {name: '', type: 'final'}]
    }
  },
  methods: {
    showPayFun: function (item, index) {
      if ((index + 1) !== this.payItem.length) {
        if ($('.pay_li').eq(index + 1).find('.pay_area').length < 1) {
          $('.pay_area').remove()
          var liDom = '<li class="pay_area">' +
                        '<div class="pay_detail">支付细节</div>' +
                      '</li>'
          $('.pay_li').eq(index).after(liDom)
        } else {
          $('.pay_area').remove()
        }
      }
    }
  }
}
</script>
<style type="text/css">
	.pay_li {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
  }

  .pay_detail {
    width: 100%;
    height: 100%;
    background-color: #ddd
  }

  .pay_area {
    border-bottom: 1px solid #ddd;
    line-height: 150px;
    animation: showPay 0.5s ease-in-out forwards;
    overflow: hidden;
  }

  @keyframes showPay {
    0% {
      height: 0
    }
    100% {
      height: 150px
    }
  }
</style>
