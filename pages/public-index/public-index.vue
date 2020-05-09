<template>
	<view class="body">
		<!-- 自定义导航 -->
		<uni-nav-bar leftIcon="arrowleft" rightText="发布" statusBar="true" @clickLeft="back" @clickRight="public">
			<view class="medium u-f-jac" @tap="select">
				{{optionText}}<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 输入框 -->
		<textarea  placeholder="说一句话吧~" class="inputText" placeholder-style="color:#CCC"/>
	</view>
</template>

<script>
	import uniNavBar from "../../component/uni-nav-bar/uni-nav-bar.vue"
	var item = ['所有人可以','仅自己可见']
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				optionText:'所有人可以'
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			public(){
				console.log('发布')
			},
			select(){		
				uni.showActionSheet({
					itemList:item,
				    success: (res)=> {
				         this.optionText = item[res.tapIndex]
				    }
				});
			}
		}
	}
</script>

<style scoped>
	.body{
		width: 100%;
	}
	.medium{
		font-size: 28rpx;
		width: 100%;
	}
	.inputText{
		height: 300rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;
	}
	.uni-uploader__input-box {
		position: relative;
		margin:10rpx;
		width: 208rpx;
		height: 208rpx;
		border: 2rpx solid #D9D9D9;
	}
	.uni-uploader__input-box:before,
	.uni-uploader__input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}
	.uni-uploader__input-box:before {
		width: 4rpx;
		height: 79rpx;
	}
	.uni-uploader__input-box:after {
		width: 79rpx;
		height: 4rpx;
	}
	.uni-uploader__input-box:active {
		border-color: #999999;
	}
	.uni-uploader__input-box:active:before,
	.uni-uploader__input-box:active:after {
		background-color: #999999;
	}
	.uni-uploader__input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.uni-uploader__files {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.uni-uploader__file {
		margin: 10rpx;
		width: 210rpx;
		height: 210rpx;
	}
</style>
