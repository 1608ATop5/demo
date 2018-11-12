import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Mint from 'mint-ui';
import { Switch } from 'mint-ui';
Vue.use(Mint);
Vue.component(Switch.name, Switch);

Vue.use(Button)
Vue.use(Select)
Vue.use(ElementUI);

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
