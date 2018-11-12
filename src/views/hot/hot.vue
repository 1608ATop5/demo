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
import swipers from "@/components/swipers/swipers";
import {mapMutations} from 'vuex'
  export default{
  	data(){
  		return {
  			hotDatas:[],
  			flag:true,
  			xlist:[]
  		}
  	},
  	components:{
  		swipers
  	},
  	mounted(){
  		this.axios.get("../../static/json/hotDatas.json").then(res=>{
  			this.hotDatas = res.data.data.list;
  		})
  		this.axios.get("../../static/json/songList.json").then(res => {
//				console.log(res.data.cdlist[0].songlist);
//	console.log(res);
				res.data.cdlist[0].songlist.forEach(item=>{

					this.xlist.push({
						"songname":item.songname,
						"id":item.albumid,
						"singername":item.albumname,
						"picImg":`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
						'url':`http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?guid=2088301926&vkey=EA1C7C91D5305C7ADDB67544E0946E931DAAA67331FDB4C5E18D865F4EC28171B3CEC5B584D1C932BE3395AC8FF79D62001C20C4168A0F23&uin=0&fromtag=38`,
						"interval":item.interval
					})
				})
  		})
  	},
  	methods:{
  		...mapMutations(["set_list"]),
  		btn(){
  			this.axios.get('/apis/hotData').then(res=>{
	  			console.log(res);
	  		})
  		},
  		getlist(item){
			this.set_list({
				"title":item.dissname,
				"id":item.dissid,
				"picUrl":item.imgurl,
				"songList":this.xlist
			})
console.log(item);
  			this.$router.push({
				path:`/MyHot/defaultList`,
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