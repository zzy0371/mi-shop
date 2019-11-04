<template>
	<div class="home">
		<van-tabs v-model="active">
			<van-tab v-for="item in data.data.tabs" :title="item.name">{{item.name}}</van-tab>
		</van-tabs>
		
		<!-- 轮播图 -->
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in data.data.data.sections[0].body.items" :key="index">
				<img class="full" :src="image.img_url_webp" />
			</van-swipe-item>
		</van-swipe>
		
		
		<!-- 宫格 -->
		
		<van-grid icon-size="72px" :column-num="5">
			<van-grid-item
				v-for="value in data.data.data.sections[1].body.items"
				:key="value"
				:icon="value.img_url_webp"
				
			/>
		</van-grid>
		
		<van-grid icon-size="72px" :column-num="5">
			<van-grid-item
				v-for="value in data.data.data.sections[2].body.items"
				:key="value"
				:icon="value.img_url_webp"
				
			/>
		</van-grid>


	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				active: 0,
				data:{}
			}
		},
		created(){
			// this.data={}
			this.$http({
				url:"http://biger.applinzi.com/page.php",
				method:'get'
			}).then(res=>{
				console.log(res);
				this.data=res.data;
			})
		}
		
		
	}
	
</script>

<style scoped="scoped">
	.full{
		width: 100%;
	}
	

	
</style>