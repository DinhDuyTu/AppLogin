require('./bootstrap');

import './bootstrap';
import Vue from 'vue';
import router from './routes';
import App from './components/App'
import VueAuth from '@websanova/vue-auth';
import axios from 'axios';
import VueAxios from 'vue-axios';
import auth from './auth';
import VueRouter from 'vue-router';

Vue.use(VueAxios, axios);

Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);


Vue.use(VueAuth, auth);

new Vue(App).$mount('#app');