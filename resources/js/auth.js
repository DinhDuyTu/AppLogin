import bearer from '@websanova/vue-auth/drivers/auth/bearer';
import axios from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'auth-token',
    tokenStore: ['cookie'],
    notFoundRedirect: {
        path: '/dashboard'
    },
    registerData: {
        url: '/api/register',
        method: 'POST',
        redirect: null,
    },
    loginData: {
        url: '/api/login',
        method: 'POST',
        redirect: '/dashboard',
        fetchUser: true,
    },
    logoutData: {
        url: '/api/logout',
        method: 'POST',
        redirect: '/login',
        makeRequest: true
    },
    fetchData: {
        url: '/api/user',  
        method: 'GET',
        enabled: true
    },
    parseUserData (data) {
        return data || {}
    },
};

export default config;