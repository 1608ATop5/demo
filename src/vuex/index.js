import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

let arr = [];
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		list:[1]
	},
	getters:{
		getList(state){
			return state.list;
		}
	},
	mutations: {
	    increment (state,payload) {
	      	return state.list = payload
	    }
 	 },
  actions: {
	    increment ({commit}) {
	    	axios.get('../../static/json/hotDatas.json').then(res=>{
//	    		console.log(res.data.data.list)
	    		commit("increment",res.data.data.list);
	    	})
		}
    }
})

export default store
