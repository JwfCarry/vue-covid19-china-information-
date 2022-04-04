import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
//CSS初始化
import './assets/css/base.css'
//引入vant库
import './plugins/vant'
//使用开发分插件 
import echarts from './plugins/echarts'
Vue.use(echarts)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
