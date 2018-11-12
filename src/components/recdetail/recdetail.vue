<template>
	<div>
		<transition name='slide'>
			<slist></slist>
		</transition>
	</div>
</template>

<script>
import slist from '@/views/hot/defaultList'
	export default{
		components:{
			slist
		}
	}
</script>

<style>
.slide-enter,.slide-leave-to{
	transform:translateX(100%);
}
.slide-enter-active,.slide-leave-active{
	transition:all .5s;
}
.slide-enter-to,.slide-leave{
	transform:translateX(0);
}
</style>