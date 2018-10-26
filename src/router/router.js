import MyLogin from "@/components/login/login"
import MyReg from "@/components/reg/reg"
import MyIndex from "@/components/index/index"

import MyHot from "@/views/hot/hot"
import MyRecommend from "@/views/recommend/recommend"
import MySinger from "@/views/singer/singer"
import MySearch from "@/views/search/search"

import defaultList from '@/views/hot/defaultList'

let routes = [
    {
      path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
		redirect:'/MyLogin'
    },
    {
    	path:"/MyLogin",
    	component:MyLogin
    },
    {
    	path:"/MyReg",
    	component:MyReg
    },
    {
    	path:"/MyIndex",
    	component:MyIndex,
    },
    {
		path:"/MyHot",
		component:MyHot,
			children:[
				{
					path:'defaultList/:id',
					component:defaultList
				}
			]
	},	
	{
		path:"/MyRecommend",
		component:MyRecommend
	},
	{
		path:"/MySinger",
		component:MySinger
	},
	{
		path:"/MySearch",
		component:MySearch
	}
    
  ]
export default routes;