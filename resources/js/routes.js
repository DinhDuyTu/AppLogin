import VueRouter from 'vue-router';
import Login from './components/auth/LoginComponent.vue';
import Register from './components/auth/RegisterComponent.vue';
import Dashboard from './components/DashboardComponent';

const routes = [
    // path for determined page
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            auth: false
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            auth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;