<template>
	<div class = 'search'>
		<heads/>
		<minput :flag='flag' :len='lena' @flagSum='flagSum' @changelen='changelen'></minput>
		<div class = 'hotList' v-show='!flag'>
			<p class = 'hot_title'>热门搜索</p>
			<div class = 'hot_label'>
				<span v-for ='item in arr' @click='mon'>{{item.k}}</span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import minput from './input.vue'
	import slist from './sear_list.vue'
	export default{
		components:{
			minput,slist
		},
		data(){
			return {
				flag:false,
				arr:[],
				lena:""
			}
		},
		mounted(){
			this.axios.get('/api/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541082493196').then(res=>{
				this.arr = res.data.data.hotkey.slice(0,10);
			})
		},
		methods:{
			mon(e){
				this.lena = e.target.innerHTML;
			},
			flagSum(index){
				this.flag = index
			},
			changelen(data){
				this.lena = data
			}
		},
		watch:{
			lena(){
				if(this.lena){
					this.flag = true;
				}else{
					this.flag = false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		background: #282828;
		width:100vw;
		height:100vh;
		
		overflow:hidden;
		.hotList{
			width:calc(80% - 30px);
			margin:0 10%;
			p{
				color:#929292;
				margin-top:10px;
				margin-bottom:20px;
			}
			.hot_label{
				display:flex;
				flex-direction:row;
				flex-wrap:wrap;
				span{
					padding:8px 12px;
					color:#757575;
					background:#363636;
					border-radius:10px;
					margin-right:10px;
					margin-bottom:8px;
				}
			}
		}
	}
</style>