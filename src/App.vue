<template>
  <div id = "app">
    <router-view />
  </div>
</template>

<script>
	import MyIndex from "./components/index/index"
export default {
  name: 'App',
  components:{
  	MyIndex
  }
}
</script>

<style>
	@import url("./assets/css/reset.css");
*{margin: 0;padding: 0;}
a{text-decoration:none;color:black;}
ul,ol{list-style:none;}
img{display:block;}
#app{
	/*background: #282828;*/
}
</style>
