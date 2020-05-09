<template>
	<view class="">
		<!-- 顶部选项卡 -->
		<index-tabbar :tabBar='tabBar' :tabIndex='tabIndex' @taptab='taptab'></index-tabbar>
		<!-- 选项内容 -->
		<view class="">
			<swiper @change="change" :current="tabIndex" :style="{height:useHeight+'px'}">
				<swiper-item v-for="(Item,Index) in contentList" :key='Index'>
					<scroll-view scroll-y="true" class="scrollView" @scrolltolower="scrollToLower(Index)">
						<template class="" v-if="Item.list.length!==0">
							<block v-for="(item,index) in Item.list" :key="index">
								<index-list :item='item' :index='index'></index-list>
							</block>
							<view class="loading u-f-jac" v-if="Item.list.length>1" >{{Item.loadtext}}</view>
						</template>
						<template v-else>
							<view class="nothing u-f-jac">
								<image src="../../static/common/nothing.png" mode="aspectFit" class="image"></image>
							</view>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import indexList from "../../component/index/index-list.vue"
	import indexTabbar from "../../component/index/index-tabbar.vue"
	export default {
		components: {
			indexList,indexTabbar
		},
		
		data() {
			return {
				useHeight:700,
				tabIndex: 0,
				tabBar: ['关注', '推荐', '体育', '热点', '财经', '新闻', '娱乐'],
				contentList: [{
						loadtext:'上拉加载更多',
						list: [{
							userPic: "../../static/demo/demo66.jpg",
							userName: "卤大湿",
							isguanzhu: false,
							title: "国务院应对新型冠状病毒肺炎疫情",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						},
						{
							userPic: "../../static/demo/demo66.jpg",
							userName: "詹姆斯",
							isguanzhu: false,
							title: "湖人总冠军",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						},
						{
							userPic: "../../static/demo/demo66.jpg",
							userName: "科比",
							isguanzhu: false,
							title: "直升机坠落",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						},
						{
							userPic: "../../static/demo/demo66.jpg",
							userName: "青春有你2",
							isguanzhu: false,
							title: "lisa担任舞蹈老师",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						}]
					},
					{
						loadtext:'上拉加载更多',
						list: [{
							userPic: "../../static/demo/demo66.jpg",
							userName: "卤大湿",
							isguanzhu: false,
							title: "国务院应对新型冠状病毒肺炎疫情",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						}]
					},
					{
						loadtext:'上拉加载更多',
						list: [{
							userPic: "../../static/demo/demo66.jpg",
							userName: "卤大湿",
							isguanzhu: false,
							title: "国务院应对新型冠状病毒肺炎疫情",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						}]
					},
					{
						loadtext:'上拉加载更多',
						list: [{
							userPic: "../../static/demo/demo66.jpg",
							userName: "卤大湿",
							isguanzhu: false,
							title: "国务院应对新型冠状病毒肺炎疫情",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						},
						{
							userPic: "../../static/demo/demo66.jpg",
							userName: "卤大湿",
							isguanzhu: false,
							title: "国务院应对新型冠状病毒肺炎疫情",
							type: "image",
							showtime: {
								num: '20W',
								time: '2:49'
							},
							info: {
								smileNum: 20,
								cryNum: 14,
								index: 0, //0没操作1赞2踩
								commentNum: 21,
								shareNum: 2
							}
						}]
					},{
						loadtext:'上拉加载更多',
						list:[]
							
					},
					{
						loadtext:'上拉加载更多',
						list:[]
					}
				]
			}
		},
		onLoad(){
			this.getHeight();
		},
		methods: {		
			change(e){
				this.tabIndex = e.detail.current;
			},
			taptab(index){
				this.tabIndex = index;
			},
			getHeight(){
				uni.getSystemInfo({
				    success: (res) =>{
				        this.useHeight = res.windowHeight-uni.upx2px(100);
				    }
				});
			},
			scrollToLower(index){
				if(this.contentList[index].loadtext !== '上拉加载更多'){
					return
				};
				this.contentList[index].loadtext = '正在加载中';
				setTimeout(()=>{
					var arr = [
							{
								userPic: "../../static/demo/demo66.jpg",
								userName: "加载1",
								isguanzhu: false,
								title: "国务院应对新型冠状病毒肺炎疫情",
								type: "image",
								showtime: {
									num: '20W',
									time: '2:49'
								},
								info: {
									smileNum: 20,
									cryNum: 14,
									index: 0, //0没操作1赞2踩
									commentNum: 21,
									shareNum: 2
								}
							},
							{
								userPic: "../../static/demo/demo66.jpg",
								userName: "加载2",
								isguanzhu: false,
								title: "国务院应对新型冠状病毒肺炎疫情",
								type: "image",
								showtime: {
									num: '20W',
									time: '2:49'
								},
								info: {
									smileNum: 20,
									cryNum: 14,
									index: 0, //0没操作1赞2踩
									commentNum: 21,
									shareNum: 2
								}
							}	
					];
					this.contentList[index].list.push(...arr);
					this.contentList[index].loadtext = '上拉加载更多';
					
				},2000)
			}
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:"../search-index/search-index"
			})
		},
		onNavigationBarButtonTap(e){
			if(e.index === 1){
				uni.navigateTo({
					url:"../public-index/public-index"
				})
			}
		}
	}
</script>

<style scoped>
	.loading{ 
		height: 100rpx;	
	}
	.scrollView{
		height: 100%;
		width: 100%;
		position: relative;
	}
	.image{
		width: 400rpx;
	}
	.nothing{
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>
