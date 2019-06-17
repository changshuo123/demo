import Vue from 'vue'
import App from './App'
import './static/common.scss'
import './static/_minix.scss'
import './utils/flexble'
import './static/font/iconfont'
import router from './router'
import store from './store'

import Header from './components/header.vue'
import Nav from './components/nav.vue'
import baseui from './plugins/base-ui'
import {DatePicker,TimePicker} from 'element-ui'
console.log(DatePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(baseui)
Vue.component("Header",Header)
Vue.component("Nav",Nav)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
