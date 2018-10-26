<template>
	<div class = "recom">
		<heads/>
			<div class = 'recom_list' ref='recom1'>
				<div>
					<div class = "recom_box" v-for='item,indexs in arr' ref='title' v-if='arr[indexs].length'>
						<div class = "input" v-if='arr[indexs].length'>
							<p>{{item.mIndex}}<span v-if='indexs == 0'>门</span></p>
						</div>
						<div class = "items" v-for='items,index in arr[indexs]' v-if='arr[indexs].length'>
							<img v-lazy="items.imgUrl" alt="" />
							<p>{{items.Fsinger_name}}</p>
						</div>
					</div>
				</div>
			</div>
		<div class = "recom_fixed" ref = 'lou'>
			<p v-for='item,a in arr' @click = 'scrollElement(a)' v-if='arr[a].length' :class = "{active:a == mIndex}">{{item.mIndex}}</p>
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default{
		data(){
			return {
				index:[],
				arr:[],
				currentIndex:0,
				scrollY:0,
				ScrollHeight:[]
			}
		},
		mounted(){
			this.arr = [];
			this.index = ['热','A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.axios.get("../../../static/json/singer.json").then(res => {
				let data = res.data.data.list;
					let datas = []
				data.forEach(item => {
item.imgUrl = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
				})
				let mon = [];
				mon.mIndex = '热' 
				for(let d = 0;d < 10;d++){
					mon.push(data[d]);
				}
				this.arr.push(mon);
				for(let i = 1;i < this.index.length;i++){
					let ires = data.filter(item => item.Findex === this.index[i]);
					ires.mIndex = this.index[i];
					this.arr.push(ires);
				}
			})
			let ref = this.$refs.recom1;
			setTimeout(() => {
				let refs = this.$refs.title;
				let height = 0;
				this.ScrollHeight.push(height);
				for(let j = 0;j < refs.length;j++){
					height += refs[j].clientHeight;
					this.ScrollHeight.push(height);
				}
			})
			this.scroll = new Bscroll(ref,{
				click:true,
				probeType:3,
				scrollY:true
			})
			this.scroll.on('scroll',position =>{
				this.scrollY = -position.y;
			})
		},
		methods:{
			scrollElement(index){
				let content = this.$refs.recom1
				let title = this.$refs.title;
				let Y = this.ScrollHeight[index]
				console.log(index);
//				console.log(index,this.ScrollHeight[index+1],this.ScrollHeight);
//				this.scroll.scrollToElement(title[index],300);
				this.scroll.scrollToElement(content,300,0,Y);
			}
		},
		computed:{
			mIndex(){
				for(let i = 0;i < this.ScrollHeight.length;i++){
					let prev = this.ScrollHeight[i];
					let next = this.ScrollHeight[i+1];
					if(this.scrollY >= prev && this.scrollY <= next){
						return i
					}
				}
				return 0;
			}
		}
	}
</script>

<style lang="scss">
	.recom_fixed{
		position:fixed;
		top:150px;
		right:0px;
		width:30px;
		padding:20px 0;
		background: #1c1c1c;
		border-radius:20px;
		text-align:center;
		p{
			color:#9c9c9c;
			margin:4px 0;
		}
		p.active{
			color:#c99f2c;
		}
	}
	.recom{
		width:100%;
		background: #282828;
		height:100vh;
		.input{
			width:100%;
			background:#363636;
			p{
				height:30px;
				font-size:20px;
				color:#828282;
				line-height:30px;
				text-indent: 1em;
			}
		}
		.recom_list{
			width:100%;
			height:calc(100% - 100px);
			overflow:auto;
			position:relative;
			.items{
				padding:0 50px;
				display:flex;
				width:calc(100% - 50px);
				flex-direction:row;
				align-items:center;
				padding:15px 25px;
				color:#bbb;
				img{
					display:block;
					width:50px;
					height:50px;
					border-radius:50%;
					margin-right:20px;
				}
			}
		}
	}
</style>