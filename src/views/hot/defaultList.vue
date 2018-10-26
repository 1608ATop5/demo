<template>
	<div class = 'defaultList'>
		<div class = 'default_box'>
				<img :src="arr.logo" alt="" class='bgimg'/>
				<header>
					<i @click = 'back' class = 'icon-fanhui iconfont'></i>
					<p>{{arr.dissname}}</p>
				</header>
				<div class="info">
					<i></i>
					<span>随机播放全部</span>
				</div>
			</div>
		<div class="reco">
			<bscroll>
				<div class="list">
					<div class="list-item" v-for='item,index in obj'>
						<p class = "p1">{{item.songname}}</p>
						<p class = "p2">{{item.albumname}}</p>
					</div>
				</div>
			</bscroll>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from "vuex"
	export default{
		created(){
			this.increment();
		},
		data(){
			return {
				id:this.$route.params.id,
				arr:{},
				obj:[]
			}
		},
		methods:{
			...mapActions([
				'increment'
			]),
			back(){
//				this.$router.push('/MyHot');
				this.$router.back();
			}
		},
		mounted(){
			this.axios.get("../../static/json/songList.json").then(res => {
	  			this.arr = res.data.cdlist[0];
	  			this.obj = res.data.cdlist[0].songlist;
	  		})
		},
		computed:{
			...mapGetters([
				'getList'
			])
		}
	}
</script>

<style lang="scss" scoped>
@import url("../../assets/font/iconfont.css");
	.defaultList{
		width:100%;
		background:#282828;
		height:100vh;
		position:absolute;
		top:0;
		.reco{
			width:100%;
			height:calc(100% - 200px);
		}
		.default_box{
			position:relative;
			.info{
				position:absolute;
				bottom:20px;
				color:#ffd100;
				border-radius:16px;
				border:1px solid #ffd100;
				left:50%;
				transform:translate(-50%);
				padding:5px 10px;
			}
		}
		.bgimg{
			width:100%;
			height:200px;
		}
	header{
		width:100%;
		top:10px;
		position:absolute;
		font-size:20px;
		i{
			left:15px;
			font-size:20px;
			position:absolute;
			color:#ffd100;
		}
		p{
			color:#fff;
			margin:0 auto;
			text-align:center;
		}
	}	
	.list{
			display:flex;
			flex-direction:column;
			.list-item{
				margin:10px 0;
				width:calc(100% - 40px);
				padding:0 20px;
				display:flex;
				flex-direction:column;
				p{
					margin:7px 0;
				}
				.p1{
					color:#fff;
					
				}
				.p2{
					color:gray;
				}
			}
		}
	}
</style>