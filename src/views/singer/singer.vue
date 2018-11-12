<template>
	<div class='singer'>
		<heads/>	
		<div class = 'singer_list'>
		<bscroll>
			<div >
				<div class="singer-items" v-for='item,index in topList' @click ='navto(item)'>
					<img :src="item.picUrl" alt=""/>
					<div class = 'right_list'>
						<ol>
							<li v-for='a,b in item.songList'>{{b+1}} {{a.singername}}-{{a.songname}}</li>
						</ol>
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
	import {mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
		data(){
			return {
				topList:[],
				xlist:[]
			}
		},
		mounted(){
			this.axios.get("../../../static/json/ranking.json").then(res=>{
				let data = res.data.data.topList
				this.topList = data;
			})
		},
		methods:{
			...mapMutations(["set_list"]),
			navto(item){
				this.getData(item.id);
				this.set_list({
					"title":item.topTitle,
					"id":item.id,
					"picUrl":item.picUrl,
					"songList":this.xlist
				})
				this.$router.push({
					path:`/MySinger/defaultList`,
	  			})
			},
			getData(index){
				this.xlist = [];
				this.axios.get('/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid='+ index).then(res=>{
				var ret = res.data.songlist;
				ret.forEach(item => {
					this.xlist.push({
						"songname":item.data.songname,
						"id":item.data.albummid,
						"singername":item.data.singer[0].name,
						"mid":item.data.songmid,
						"picImg":`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.data.albummid}.jpg?max_age=2592000`,
						'url':`http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${item.data.songmid}.m4a?guid=6591036760&vkey=B3AACB99FE16F3C16972A2EAA97B3C93B1218295CD182156026D9DBDEE7C7714695B21A611677145604FA6DA78A823FEE7C4A339BE6171DA&uin=0&fromtag=38`,
						"interval":item.data.interval
					})
				})
			})
			}
		},
		computed:{
			...mapGetters(['get_list','set_currentData'])
		}
	}
</script>

<style scoped>
.slide-enter,.slide-leave-to{
	transform:translateX(100%);
}
.slide-enter-active,.slide-leave-active{
	transition:all .5s;
}
.slide-enter-to,.slide-leave{
	transform:translateX(0);
}
.singer{
	height:100vh;
	background: #282828;
	overflow:hidden;
}
.singer_list{
	width:100%;
	height:calc(100vh - 100px);
	overflow:scroll;
}
.singer-items{
	width:calc(100vw - 40px);
	margin:10px 20px;
	height:103px;
	display:flex;
	background: #363636;
	flex-direction:row;
}
.singer-items img{
	display:block;
	width:100px;
	height:100px;
}
.right_list{
	flex:1;
	padding:20px 10px;
}
.right_list ol{
	width:100%;
	overflow:hidden;
}
.right_list ol li{
	width:230px;
	color:#545454;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-top:5px;
	flex:1;
}
</style>