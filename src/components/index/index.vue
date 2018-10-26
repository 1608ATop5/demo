<template>
	<div class="container">
		<header>
			<div>
				<i class = 'iconfont icon-bofang'></i>
				<span>Music player</span>
			</div>
			<i class = 'iconfont icon-shenfenzheng'></i>
		</header>
		<div class="nav">
			<router-link to = '/MyHot'>推荐</router-link>
			<router-link to = '/MyRecommend'>歌手</router-link>
			<router-link to = '/MySinger'>排行</router-link>
			<router-link to = '/MySearch'>搜索</router-link>
		</div>
		<!--<p>您好:{{user}}<a href="##" @click = "back">退出登录</a></p>-->
	</div>
</template>

<script>
	import MyHeader from "../header/header"
	export default{
		data(){
			return {
				user: window.localStorage.getItem("user") || ""
			}
		},
		methods:{
			back(){
				window.localStorage.removeItem("user");
				this.$router.push("Mylogin");
			}
		},
		components:{
			MyHeader
		}
	}
</script>

<style lang="scss">
	@import url("../../assets/font/iconfont.css");
	.container{
		width:100%;
		header{
			width:100%;
			padding:5px 0;
			height:40px;
			background: #282828;
			color:#ffc200;
			position:relative;
			font-size:20px;
			.icon-bofang{
				margin-right:10px;
			}
			i{
				font-size:20px;
			}
			div{
				margin:0 auto;
				text-align:center;
				line-height:40px;
			}
			.icon-shenfenzheng{
				position:absolute;
				right:10px;
				top:50%;
				margin-top:-10px;
			}
		}
		.nav{
			width:100%;
			display:flex;
			flex-direction:row;
			align-items:center;
			justify-content:space-around;
			font-size:20px;
			background: #282828;
			padding:10px 0;
			a{
				color:#8c8c8c;
				padding-bottom:8px;
				border-bottom:2px solid transparent;
			}
			.router-link-active{
				color:#ffc300;
				border-color:#ffc300;
			}
		}
	}
</style>