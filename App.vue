<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.net.on()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("common/uni.css");
	@import url("common/iconfont.css");
	@import url("common/animate.css");
	@import url("common/flex.css");
</style>
