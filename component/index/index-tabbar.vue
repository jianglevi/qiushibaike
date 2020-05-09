<template>
	<view class="tab-box">
		<scroll-view scroll-x class="tabbar-scroll">
			<block v-for="(item,index) in tabBar" :key='index'>
				<view class="tab-list" :class="[index == tabIndex ? 'active':'']" @tap='taptab(index)'>{{item}}
					<view></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			tabBar:Array,
			tabIndex:Number
		},
		methods:{
			taptab(index) {
				this.$emit('taptab',index)	
			}
		}
	}
</script>

<style scoped>
	.tab-box {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}
	
	.tabbar-scroll {
		width: 100%;
		white-space: nowrap;
		line-height: 100rpx;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.tab-list {
		font-size: 30rpx;
		width: 150rpx;
		display: inline-block;
		text-align: center;
		color: #CCC;
		font-weight: 700;
	}
	
	.active>view {
		border: 5rpx solid #FEEA59;
		border-radius: 4rpx;
		width: 60rpx;
		margin: 0 auto;
	}
	
	.active {
		color: #000;
	}
</style>
