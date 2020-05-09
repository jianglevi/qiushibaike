const net = {
	connect:false,
	on(){
		uni.getNetworkType({
			success:(res)=>{
				if(res.networkType !== 'none'){
					net.connect = true;
					return;
				};
				uni.showToast({
					title:"请连接网络",
					icon:"none"
				})
			}
		})
		uni.onNetworkStatusChange((res)=>{
			net.connect = res.isConnected;
			if(!res.isConnected){
				uni.showToast({
					title:"无连接网络"
				})
			}
		})
	}
}
// 网络监听
// const net = {
// 	// 网络状态
// 	isConnect:false,
// 	// 监听网络状态
// 	on(){
// 		// 获取当前网络状态
// 		uni.getNetworkType({
// 			success: (res) => {
// 				if(res.networkType!=='none'){ this.isConnect=true; return;}
// 				uni.showToast({
// 					icon:"none",
// 					title: '请先连接网络',
// 				});
// 			}
// 		})
// 		// 监听网络状态变化
// 		uni.onNetworkStatusChange((res)=>{
// 			this.isConnect = res.isConnected;
// 			if(!res.isConnected){
// 				uni.showToast({
// 					icon:"none",
// 					title: '您目前处于断网状态',
// 				});
// 			}
// 		})
// 	}
// }

export default{
      net
}