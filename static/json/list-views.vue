<template>
	<transition name="view">
	<div class="view">
			<div class="return" @click=goBack()><<</div>
			<div class="view-img">
				<div class="mask"></div>
				<div>
					<h1>{{title}}</h1>
					<img v-lazy="imgSrc">
				</div>
				<div class="s-play">随机播放</div>
			</div>
			<scroll :datas="songList" class="scroll">
				<div class="hot-song">
					<dl v-for="(item,index) in songList" @click="goPlay(item, index)">
						<!--歌手-->
						<dd v-if="item.musicData">
							<h2>{{item.musicData.songorig}}</h2>
							<p>{{item.musicData.songname}}</p>
						</dd>
						<!--排行-->
						<dd v-if="item.data" class="rank">
							<div class="rank-icon">
								
								<img :src="'/static/'+(index+1)+'.png'" v-if="index<3">
								<span v-if="index>=3 && index<10">{{index}}</span>
							</div>
							<div class="rank-text">
								<h2>{{item.data.songorig}}</h2>
								<p>{{item.data.singer[0].name}}</p>
							</div>
						</dd>
						<!--推荐-->
						<dd v-if="!item.musicData && !item.data">
							<h2>{{item.songorig}}</h2>
							<p>{{item.songname}}</p>
						</dd>
					</dl>
				</div>
			</scroll>
			<player></player>
	</div>
</transition>
</template>
<script type="text/javascript">
import Scroll from '../base/scroll'
  import Player from './play'
import {mapMutations} from 'vuex'
export default {
	data () {
		return {
		}
	},
	props: {
		title: '',
		imgSrc: '',
		songList: {
			type: Array,
			default: () => []
		}
	},
	components: {
		Scroll,
		Player
	},
	methods: {
		...mapMutations({
			setPlayObj: 'SET_PLAYOBJ'
		}),
		goBack () {
			this.$router.go(-1)
		},
		goPlay (item, index) {
			// this.$router.push({
			// 	name: 'play'
			// })
			// this.setPlayObj(item)
			this.$emit('selects', item, index)
		}
	}
}
</script>
<style lang="scss" scoped="">
@import '../assets/scss/list.scss';
	.rank{
		display: flex;
		.rank-icon{
			flex:1;
			text-align: center;
			color:#fff;
			img{
				width:25px;
				margin-top:10px;
			}
		}
		.rank-text{
			flex:4
		}
	}
	
	.view{
		position: absolute;
		top:0;
		width:100%;
		height:100%;
		background: #000;
		overflow: hidden;
		z-index: 100;
	}
	.view-enter,.view-leave-to{
		transform: translate3D(100%, 0, 0);
	}
	.view-enter-active, .view-leave-active{
		transition: all .5s;
	}
	.return{
		position: absolute;
		top:2rem;
		left:2rem;
		color:#fff;
		z-index: 2;
	}
	.view-img{
		position: relative;
		height:20.875rem;
		overflow: hidden;
		.mask{
			position: absolute;
			width:100%;
			height:100%;
			background: #000;
			opacity: .4
		}
		img{
			width:100%;
		}
		h1{
			position: absolute;
			top:2rem;
			left:50%;
			width:64%;
			transform: translate(-50%);
			font-size:1.425rem;
			font-weight:bold;
			color:#fff;
			padding:0 1rem;
			white-space:nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

		}
		.s-play{
			color: yellow;
			border:solid 1px yellow;
			padding:.5rem 0;
			width:50%;
			border-radius: 30px;
			text-align: center;
			position: absolute;
			bottom:2rem;
			left:50%;
			transform: translate(-50%);
			font-size:1.25rem;

		}
	}
	[v-clock]{
		display: none;
	}
	.scroll{
		height:300px;
		overflow: hidden;
	}
</style>