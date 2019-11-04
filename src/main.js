import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import axios from 'axios'
Vue.prototype.$http=axios

import './assets/css/main.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
