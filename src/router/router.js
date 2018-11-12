import MyLogin from "@/components/login/login"
import MyReg from "@/components/reg/reg"
import MyIndex from "@/components/index/index"

import MyHot from "@/views/hot/hot"
import MyRecommend from "@/views/recommend/recommend"
import MySinger from "@/views/singer/singer"
import MySearch from "@/views/search/search"
import project from '@/components/project'

import defaultList from '@/views/hot/defaultList'

import demo1 from '@/components/demo'
import details from "@/components/details/details"

let routes = [
    {
      path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
		redirect:'/MyLogin'
    },
    {
    	path:"/demo1",
    	component:demo1
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
				path:'defaultList',
				component:defaultList
			}
		]
	},	
	{
		path:"/MyRecommend",
		component:MyRecommend,
		children:[
			{
				path:'defaultList',
				component:defaultList
				
			}
		]
	},
	{
		path:"/MySinger",
		component:MySinger,
		children:[
			{
				path:'defaultList',
				component:defaultList,
				children:[
					{
						path:"details",
						component:details
					}
				]
			}
		]
	},
	{
		path:"/MySearch",
		component:MySearch,
		children:[
			{
				path:"details",
				component:details
			}
		]
	},
	{
		path:"/project",
		component:project
	},
	{
		path:"/details",
		component:details
	}
  ]
export default routes;