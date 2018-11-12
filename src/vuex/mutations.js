export default{
	//详情列表
	set_list(state,payload){
		return state.list = payload
	},
	
	set_singerList(state,payload){
		state.singerList = payload
	},
	//播放歌曲
	set_index(state,payload){
		state.index = payload
	},
	set_playing(state,payload){
		state.playing = payload
	}
}
