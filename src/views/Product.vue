<template>
	<div>
		<!-- 详情页 -->
		<p>当前商品id为： {{this.$route.params.id}} </p>
		<!-- 请求服务器然后根据服务器返回数据 填充页面 -->
		
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item, index) in product.data.goods_info[0].gallery_v3" :key="index">
			<img :src="item.img_url" style="width: 100%;"/>
		  </van-swipe-item>
		</van-swipe>
		
		
		
		
		
		
		<van-goods-action style="z-index=30">
			<van-goods-action-icon icon="wap-home-o" text="首页"/>
			<van-goods-action-icon icon="cart-o" text="购物车" :info="num" />


			<van-goods-action-button type="danger" text="立即抢购" />
		</van-goods-action>
		
		
		<van-icon @click="$router.go(-1)" name="arrow-left" size=30  style="position: fixed; left: 20px; top: 20px;"/>
	</div>
</template>

<script>
	import {product} from '../data.js'
	export default {
		data(){
			return{
				product:product,
				num:this.$store.state.goods[0].num
			}
		}
	}
</script>

<style>

</style>
