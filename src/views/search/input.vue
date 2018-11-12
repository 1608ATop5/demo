<template>
	<div class = "container">
		<div class = 'input'>
			<i class = 'iconfont icon-sousuo'></i>
			<input type = "text" placeholder = '搜索歌曲、歌手' v-model = 'query' />
			<i class = 'iconfont icon-guanbi' v-show = 'query.length' @click = 'clearContent'></i>
		</div>
		<slist v-show = 'query.length' :len = 'query'></slist>
	</div>
	
</template>

<script>
	import slist from './sear_list.vue'
	export default{
		components:{
			slist
		},
		data(){
			return {
				query:""
			}
		},
		mounted(){
			this.query = this.len;
		},
		props:['len','flag'],
		methods:{
			clearContent (){
				this.query = '';
				this.$emit('flagSum',false);
			}
		},
		watch:{
			query(){
				this.$emit('changelen',this.query);
			},
			len(){
				this.query = this.len;
			}
		}
	}
</script>

<style lang = "scss" scoped >
.container{
	margin-top:20px;
}
	.input{
		width:calc(80% - 30px);
		margin:0 10%;
		background: #363636;
		border-radius:10px;
		height:40px;
		font-size:20px;
		display:flex;
		align-items:center;
		padding:0 15px;
		input{
			border:none;
			height:40px;
			flex:1;
			color:#fff;
			outline:none;
			text-indent:1em;
			font-size:18px;
			background: none;
		}
		i{
			
			color:#fff;
			font-size:20px;
		}
	}
</style>