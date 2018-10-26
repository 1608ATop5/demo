<template>
	<div class="container">
		<header>
			<div>
				<i class = 'iconfont icon-bofang'></i>
				<span>Music player</span>
			</div>
			<i class = 'iconfont icon-shenfenzheng'></i>
		</header>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
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
	}
	
</style>