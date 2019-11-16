import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import "@common/components";
import "@common/filter";
import store from './store'


// import "./lib/loading/index.js";

Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  store,
  router, 
  render: h => h(App)
}).$mount('#app')
