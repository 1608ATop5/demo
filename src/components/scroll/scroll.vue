<template>
	<div ref = 'reco' class = 'reco_box'>
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	export default{
		mounted(){
			let reco = this.$refs.reco
			new BScroll(reco,{
				click:true,
				bounce:true,
				scrollY:true
			})
		}
	}
</script>

<style>
	.reco_box{
		width:100%;
		height:100%;
	}
</style>