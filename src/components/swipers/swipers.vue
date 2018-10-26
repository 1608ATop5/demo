<template>
	<div class="swiper-container" v-show='slider'>
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for ='item in slider'>
            	<img :src="item.picUrl" alt="" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class = "swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import "../../assets/swiper/css/swiper.css"
  export default{
  	data(){
  		return {
  			slider:[]
  		}
  	},
   mounted(){
	   	this.$nextTick(()=>{
	   		this.sliders();
	   		this.swipers();
	   	})
	},
  	methods:{
  		sliders(){
 			this.axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540275035465').then(res=>{
  			this.slider = res.data.data.slider;
		})
	},
  		swipers(){
  			new Swiper ('.swiper-container', {
  				autoplay:2000,
  				speed:500,
			    loop: true, // 循环模式选项
    			observer:true,//修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      clickable:true
			    }
		  	})
  		}
  	}
  }
</script>

<style lang = 'scss'>
 .swiper-container {
    width: 100%;
    height: 200px;
}
.swiper-slide img{
	display:block;
	width:100%;
	height:100%;
}
.swiper-wrapper div{
	width: 100vw;
}
</style>