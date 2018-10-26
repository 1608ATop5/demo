<template>
	<div class = 'hot'>
		<heads/>
		<div class = "reco">
			<bscroll>
				<div class ='list'>
					<swipers />
					<p class = "reco_info" @click='btn'>热门歌单推荐</p>
					<div class = 'item' v-for='item,index in hotDatas' @click = 'getlist(item)'>
						<img v-lazy="item.imgurl" alt="" />
						<div class = 'reco_title'>
							<p>{{item.creator.name}}</p>
							<p>{{item.dissname}}</p>
						</div>
					</div>
				</div>
			</bscroll>
		</div>
		<transition name='slide'>
			<router-view />
		</transition>
	</div>
</template>

<script>
import swipers from "@/components/swipers/swipers"
  export default{
  	data(){
  		return {
  			hotDatas:[],
  			flag:true
  		}
  	},
  	components:{
  		swipers
  	},
  	mounted(){
  		this.axios.get("../../static/json/hotDatas.json").then(res=>{
  			this.hotDatas = res.data.data.list;
  		})
  	},
  	methods:{
  		btn(){
  			this.axios.get('/apis/hotData').then(res=>{
	  			console.log(res);
	  		})
  		},
  		getlist(item){
  			
  			this.$router.push({
				path:`/MyHot/defaultList/${item.dissid}`,
  				
  			})
  		}
  	}
  }
</script>

<style lang = 'scss'>
.slide-enter,.slide-leave-to{
	transform:translateX(100%);
}
.slide-enter-active,.slide-leave-active{
	transition:all .5s;
}
.slide-enter-to,.slide-leave{
	transform:translateX(0);
}
.hot{
	background: #282828;
}
	.reco_info{
		text-align:center;
		font-size:16px;
		color:#ffd100;
		line-height:40px;
		background: #282828;
	}
	.reco{
		width:100%;
		background: #282828;
		height:calc(100vh - 100px);
		overflow:hidden;
		.list{
			width:100%;
			background: #282828;
			.item{
				display:flex;
				flex-direction:row;
				padding:15px 30px;
				width:calc(100% - 60px);	
				img{
					display: block;
					width:70px;
					height:70px;
				}
				.reco_title{
					margin-left:20px;
					p{
						color:#5b5b5b;
					}
					p:first-child{
						margin-top:5px;
						color:#fff;
						margin-bottom:20px;
					}
				}
			}
		}
	}
</style>