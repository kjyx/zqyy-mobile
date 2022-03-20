import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/icon/iconfont.css'
// 引入 自适应
import 'lib-flexible/flexible'

import Vant from 'vant'
import 'vant/lib/index.css'
// 将 vant 组件库安装到 Vue 上
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
