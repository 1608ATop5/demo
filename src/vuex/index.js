import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

plugins: debug ? [createLogger()] : []

export default store
