<template>
	<div class = 'search_list'>
		<ul class = 'list'>
			<li v-for='item,index in arr' @click = 'navto(item,index)'>
				<i class = 'iconfont icon-shoucang' @click = 'mm'></i>
				<p>{{item.songname}}-{{item.singername}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	export default{
		data () {
			return {
				arr:[]
			}
		},
		mounted () {
		},
		props:['len'],
		methods:{
			...mapMutations([
				"set_singerList",
				"set_index",
				"set_playing"
			]),
			mm(){
			},
			navto(item,index){
				this.$router.push({
					path:"/MySearch/details"
				})
				this.set_singerList({
					"title":"搜索结果",
					"id":'001',
					"picUrl":'https://y.gtimg.cn/music/photo_new/T002R300x300M000001P8Ajd0ibC7q.jpg?max_age=2592000',
					"songList":this.arr
				});
				this.set_index(index);
				this.set_playing(true);
			},
			getArr(num){
				this.axios.get("/api/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key="+num+"&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0").then(res=>{
					let ret = res.data.data.song.itemlist;
					this.arr = []
					ret.forEach(item => {
						this.arr.push({
							"songname":item.name,
							"id":item.id,
							"singername":item.singer,
							"mid":item.mid,
							"picImg":`https://y.gtimg.cn/music/photo_new/T002R300x300M000004ScIop3cYRkD.jpg?max_age=2592000`,
							'url':`http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${item.mid}.m4a?guid=6591036760&vkey=B3AACB99FE16F3C16972A2EAA97B3C93B1218295CD182156026D9DBDEE7C7714695B21A611677145604FA6DA78A823FEE7C4A339BE6171DA&uin=0&fromtag=38`,
							"interval":150
						})
					})
					console.log(this.arr);
				})
			},
			getArr1(){
				this.axios.get("../../../static/json/searchList.json").then(res=>{
					console.log(res);
				})
			}
		},
		computed:{
			...mapGetters([
				'get_list',
				"get_singer_list",
				"get_index"
				]),
			tShow(){
				return this.len? true :false
			}
		},
		watch:{
			len(){
				if(!this.len){
					return 
				}
				this.getArr(this.len);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search_list{
		width:calc(80% - 30px);
		margin:0 10%;
		font-size:20px;
		display:flex;
		align-items:center;
		padding:0 15px;
		.list{
			display:flex;
			flex-direction: column;
			li{
				margin:10px 0;
				display:flex;
				flex-direction:row;
				color:#ccc;
				p{
					text-indent: 1em;
					font-size:16px;
					color:#5f5f5f;
				}
				i{
					color:red;
					font-size:20px;
				}
			}
		}
	}
	
</style>