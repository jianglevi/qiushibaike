<template>
	<view class="index-box">
		<view class="index-content-1 u-f-jub">
			<view class="u-f-jac">
				<image :src="item.userPic" mode="widthFix"></image>{{citem.userName}}
			</view>
			<view class="icon iconfont icon-zengjia" v-if="!citem.isguanzhu" @tap="attation">
				关注
			</view>
		</view>
		<view class="index-content-2">
			{{citem.title}}
		</view>
		<view class="index-content-3 u-f-jac" >
			<image  src="../../static/demo/datapic/26.jpg" mode="widthFix" v-if="citem.type==='image'"></image>
			<!-- 视频 -->
			<template v-if="citem.type==='video'">
				<view class="icon iconfont icon-bofang">
				</view>
				<view class="time">
					{{citem.showtime.num}} 次播放 {{citem.showtime.time}}
				</view>
			</template>
		</view>
		<view class="index-content-4 u-f-jub">
			<view class="u-f-ac">
				<view class="icon iconfont icon-icon_xiaolian-mian" :class="[citem.info.index===1?'active':'']" @tap="operation('zan')">
				</view>{{citem.info.smileNum}}
				<view class="icon iconfont icon-kulian" :class="[citem.info.index===2?'active':'']" @tap="operation('cai')">	
				</view>{{citem.info.cryNum}}
			</view>
			<view class="u-f-ac">
				<view class="icon iconfont icon-xiaoxi">	
				</view>{{citem.info.commentNum}}
				<view class="icon iconfont icon-fenxiang">			
				</view>{{citem.info.shareNum}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{			
		props:{
			item: {
				type: Object,
				default: () => {}
			},
			index: Number
		},
		data(){
			return{
				citem:this.item
			}
		},
		methods:{
			attation(){
				this.citem.isguanzhu = !this.citem.isguanzhu
			},
			operation(type){
				if(type==='zan'){
					if(this.citem.info.index === 1){
						this.citem.info.index = 0,
						this.citem.info.smileNum--;
						return;
					};
					if(this.citem.info.index === 2){
						this.citem.info.index = 1;
						this.citem.info.cryNum--;
						this.citem.info.smileNum++;
						return;
					}
					this.citem.info.index = 1;
					this.citem.info.smileNum++;
				}
				if(type==='cai'){
					if(this.citem.info.index === 1){
						this.citem.info.index = 2,
						this.citem.info.smileNum--;
						this.citem.info.cryNum++;
						return;
					};
					if(this.citem.info.index === 2){
						this.citem.info.index = 0;
						this.citem.info.cryNum--;
						return;
						
					};
					this.citem.info.index = 2;
					this.citem.info.cryNum++;
				}
			}
		}
	}
	
</script>

<style scoped>
	.active{
		color: #FEEA59 !important;
	}
	.index-box {
		padding: 10px 30rpx;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.index-content-1>view:nth-child(1) {
		color: #CCCCCC;
		font-size: 28rpx;
	}
	
	.index-content-1>view:nth-child(1)>image {
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
		border-radius: 50%;
	
	}
	
	.index-content-1>view:nth-child(2) {
		padding: 0 10rpx;
		background-color: #EEEEEE;
		font-size: 28rpx;
	}
	
	.index-content-2{
		padding: 20rpx 10rpx;
		font-size: 30rpx;
	}
	.index-content-3{
		position: relative;
	}
	.index-content-3>image {
		width: 100%;
		border-radius: 10rpx;
	}
	.icon-bofang{
		position: absolute;
		font-size: 140rpx;
		color: #fff;
	}
	.time{
		padding: 5rpx 10rpx;
		color: #fff;
		background-color: rgba(0,0,0,.4);
		position: absolute;
		bottom: 10rpx;
		right: 10rpx;
		border-radius: 10rpx;
		font-size: 24rpx;
	}
	.index-content-4{
		padding-top: 20rpx;
		color: #CCCCCC;
	}
	.index-content-4>view>view{
		
		padding-right:10rpx;
	}
	.index-content-4>view>view:last-child{
		padding-left: 10rpx;
	}
</style>
