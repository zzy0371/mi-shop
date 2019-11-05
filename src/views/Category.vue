<template>
  <div class="category">
  
		<!-- 顶部导航 -->
		<div class="header">
			<van-nav-bar  title="分类" left-arrow   @click-left="onClickLeft" @click-right="onClickRight">
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
	
		<div class="content" >
			
			
			<div >
				<div style="position: absolute; top: 44px; bottom: 44px; width: 20%;  overflow-y: scroll; overflow-x: hidden; z-index: 5;" >
					<van-sidebar v-model="activeKey">
						<van-sidebar-item :title="item.category_name" v-for="item in categoryData.data" />
					</van-sidebar>
					
				</div>
				<div style="position: absolute; left: 21%; top: 44px; bottom: 44px;  overflow-y: auto; z-index: 5;">
					<div v-for="(item,index) in categoryData.data" v-show="activeKey==index">
						<div v-for="item1 in item.category_list">
							<div v-if="item1.view_type=='cells_auto_fill'">
								
								<img :src="item1.body.items[0].img_url_webp" alt="" style="width: 100%;">
							</div>
							<div v-else-if="item1.view_type=='category_title'" style="width: 50%; margin: 0 auto;">
								<van-divider>{{item1.body.category_name}}</van-divider>
								
							</div>
							
							<div v-else-if="item1.view_type=='category_group'">
								
								<van-grid :column-num="3" icon-size="57">
									<van-grid-item
										v-for="item2 in item1.body.items"
										
										:icon="item2.img_url_webp"
										:text="item2.product_name"
										
										@click = "goToProduct(item2.action.path)"
									/>
								</van-grid>
								
								
								
								
							</div>
							
							
						</div>					
					</div>				
				</div>
			</div>
		</div>

  </div>

</template>


<script>
	import {category} from '../data.js'
	export default{
		data() {
							return {
								activeKey: 0,
								categoryData:category
							};
						},
		methods:{
			goToProduct(path){
				// console.log("+++++");
				// alert("hello")
				this.$router.push(`/product/${path}`)
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$toast('sousuo ');
			}
		}
		
	}
	
	
</script>


<style>

	
</style>

