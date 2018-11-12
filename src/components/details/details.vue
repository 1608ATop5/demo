<template>
	<div class="details">
		<img :src = "singer.picImg" alt="" class = "bg_img"/>
		<div class = 'top'>
			<div class = 'details_title'>
				<p>{{singer.songname}}</p>
				<p>{{singer.singername}}</p>
			</div>
			<img :src = "singer.picImg" alt="" ref = 'bg_img' :class = "play"/>
			<footer>
				<div class = 'progress_bar'>
					<div class="to">{{sumNumber(currentTime)}}</div>
					<div class="bar" @touchstart.prevent = "progressTouchStart"
      @touchmove.prevent = "progressTouchMove"
      @touchend = "progressTouchEnd">
						<div class = 'progress_' ref ='progress'></div>
						<span class ='move_arc' ref = 'arc'></span>
					</div>
					<div class="from">{{sumNumber(singer.interval)}}</div>
				</div>
				<div class = 'playing'>
					<i class = 'iconfont icon-fenxiang'></i>
					<i class = 'iconfont icon-left-circle' @click = 'up'></i>
					<i class = "iconfont" :class = 'plays'@click = 'playing'></i>
					<i class = "iconfont icon-iconfontroundright" @click = 'next'></i>
					<i class = 'iconfont icon-shoucang'></i>
				</div>
				<audio :src="singer.url" autoplay loop ref = 'audio' @timeupdate="vide($event)" 
   ></audio>
			</footer>
		</div>
		
		<i class = 'back icon-left-circle iconfont' @click = 'back'></i>
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	export default{
		data(){
			return {
				flag:true,
				singer:{},
				flag:true,
				currentTime:0,
				sum:1,
				start:0,
				move1:0,
				to:0
			}
		},
		created () {
			if(this.get_index == -1){
				this.$router.push({
					path:"/MySinger"
				})
			}
		},
		mounted () {
			this.move();
			if(this.get_index !== -1){
				this.singer = this.get_singer_list.songList[this.get_index];
			}
//			console.log(this.singer);
		},
		methods:{
			...mapMutations([
				"set_index",
				'set_playing'
			]),
			 // 点击按钮 
		   progressTouchStart (e) {
		   		this.start = e.touches[0].pageX;
		   },
		   // 开始移动 
		   progressTouchMove (e) {
		   		this.move1 = e.touches[0].pageX;
		   		this.to = this.move1 - this.start;
		   },
		   // 移动结束 
		   progressTouchEnd (e) {
		   		let refs = this.$refs;
		   		let arc = refs.arc;
				let progress = refs.progress;
				let w = progress.clientWidth;
				progress.style.width = w + this.to + 'px' 
				arc.style.left = w + this.to - 10 + 'px';
				this.currentTime += parseInt(this.singer.interval * this.to/300);
				
				let audios = refs.audio;
				audios.currentTime = this.currentTime
		   },
			vide (e) {
				this.currentTime = e.target.currentTime;
				let refs = this.$refs;
				let arc = refs.arc;
				let progress = refs.progress; 
				this.sum = (300 * this.currentTime / this.singer.interval);
				progress.style.width = this.sum + 'px' 
				arc.style.left = this.sum - 10 + 'px';
			},
			sumNumber (num) {
				num = Math.floor(num);
				let m = this.addZero(num % 60);
				let s = this.addZero(parseInt(num / 60))
				num = s + ':' + m
				return num
			},
			addZero (num) {
				if(num < 10){
					num = "0" +num
				}
				return num
			},
			playing () {
				this.set_playing(!this.get_playing);
				if(!this.get_playing){
					clearInterval(this.timer);
				}else{
					this.move();
				}
			},
			move () {
				let refs = this.$refs;
				let arc = refs.arc;
				let progress = refs.progress;
			},
			back () {
				this.$router.back();
			},
			next () {
				let len = this.get_singer_list.songList.length;
				let sum = this.get_index;
				sum++;
				if(sum > len-1){
					sum = 0;
				}
				this.set_index(sum);
				this.set_playing(true);
				
			},
			up () {
				let len = this.get_singer_list.songList.length;
				let sum = this.get_index;
				sum--;
				if(sum < 0){
					sum = len-1
				}
				this.set_index(sum);
				this.set_playing(true);
			}
		},
		computed:{
			...mapGetters([
				'get_index',
				"get_singer_list",
				"get_playing"
			]),
			play () {
				return this.get_playing ? 'play' : 'play pause'
			},
			plays () {
				return this.get_playing ? 'icon-timeout' :'icon-play-circle'
			}
		},
		watch:{
			get_index (next,val) {
				this.singer = this.get_singer_list.songList[next]
				
			},
			get_playing (val) {
				let audio1 = this.$refs.audio
				val ? audio1.play() : audio1.pause();
			}
		}
	}
</script>

<style lang="scss" scoped>
@-webkit-keyframes ror{
	0%{transform: rotate(0)}
    100%{transform: rotate(360deg)}
}
	.details{
		width:100vw;
		height:100vh;
		background: #f2f2f2;
		position:absolute;
		overflow:hidden;
		top:0;
		.back{
			position:absolute;
			top:20px;
			left:30px;
			color:#ffd230;
			font-size:30px;
		}
		.bg_img{
			width:100%;
			height:100%;
			filter:blur(10px);
		}
		.top{
			position:absolute;
			top:0;
			width:100%;
			height: 100vh;
			.details_title{
				color:#fff;
				p{
					font-size:20px;
					text-align:center;
					margin-top:20px;
				}
			} 
			img{
				display:block;
				width:300px;
				height:300px;
				border-radius:50%;
				margin:0 auto;
				margin-top:30px;
				transition:all .5s;
				border:10px solid rgba(255,255,255,.3);
				
				&.play{
	              animation: ror 10s linear infinite
				}
	            &.pause{
	              animation-play-state: paused
	            }
			}
			footer{
				position:absolute;
				bottom:100px;
				width:100vw;
				.progress_bar{
					width:100%;
					display:flex;
					flex-direction:row;
					align-items:center;
					color:#fff;
					justify-content: space-around;
					margin-bottom:20px;
					.bar{
						width:300px;
						height:5px;
						background: #4f4353;
						position:relative;
						margin:0 10px;
						.progress_{
							width:0px;
							background: #ffcc30;
							height:5px;
						}
						.move_arc{
							width:10px;
							height:10px;
							position:absolute;
							left:2px;
							border:4px solid yellow;
							background: #fff;
							top:50%;
							transform:translateY(-50%);
							border-radius:50%;
						}
					}
				}
				.playing{
					width:100%;
					display:flex;
					flex-direction: row;
					justify-content: space-around;
					i{
						font-size:28px;
						color:#ffcc30;
					}
				}
			}
		}
	}
</style>