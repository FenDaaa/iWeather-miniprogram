import Vue from 'vue'
import App from './App'

// import net from '@/utils/net'// 导入封装好的net
Vue.config.productionTip = false
App.mpType = 'app'
// Vue.prototype.$net = net// 微信小程序网络请求的配置
const app = new Vue(App)
app.$mount()
