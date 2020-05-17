require('./bootstrap');

import './bootstrap';
import Vue from 'vue';
import router from './assets/src/router';
import App from './assets/src/App.vue'
import VueAuth from '@websanova/vue-auth';
import axios from 'axios';
import VueAxios from 'vue-axios';
import auth from './auth';
import VueRouter from 'vue-router';
import './assets/src/registerServiceWorker';
import ArgonDashboard from './assets/src/plugins/argon-dashboard';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);
Vue.use(VueAuth, auth);
Vue.use(ArgonDashboard)

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')