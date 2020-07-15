// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false

// 导入ElementUI
import ElementUI from 'element-ui'
// 导入弹窗
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 全局配置弹窗
Vue.prototype.$message = Message

/*引入axios*/
import Axios from 'axios'
Vue.prototype.axios = Axios;

//Axios.defaults.withCredentials = true;

require('!style-loader!css-loader!../static/index.css');

import QS from 'qs'
Vue.prototype.qs = QS;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
