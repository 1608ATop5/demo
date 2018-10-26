import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from './vuex'
Vue.config.productionTip = false
import axios from 'axios'
import MyHeader from "./components/index/index"
import MyScroll from "./components/scroll/scroll"
import Vuelazyload from "vue-lazyload";

Vue.use(Vuelazyload,{
	loading:"../static/logoS.gif"
})

Vue.prototype.axios = axios;

Vue.component('heads',MyHeader)
Vue.component('bscroll',MyScroll)

new Vue({
  el: '#app',
  router,
  store:vuex,
  components: { App },
  template: '<App/>'
})
