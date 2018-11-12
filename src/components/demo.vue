<template>
	<div>
		<button @click = 'click'>1111</button>
		<mt-switch :value.sync="value"></mt-switch>
		<!--<mt-switch :value.sync="value">Switch</mt-switch>-->
	</div>
</template>

<script>
	import { Toast ,Switch } from 'mint-ui';
	export default{
		data(){
			return {
				value:false
			}
		},
		methods:{
			click(){
				console.log(1);
				Toast({
				  message: 'Upload Complete',
				  position: 'bottom',
				  duration: 5000
				});
			}
		}
		
	}
</script>

<style>
</style>