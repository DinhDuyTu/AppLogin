import VueRouter from 'vue-router';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import DashboardLayout from './components/./main/DashboardLayout.vue';
import Error404 from './components/Errors/404.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import ListUser from './components/users/ListUser.vue';

const routes = [
    // path for determined page
    {
        path: '/',
		redirect: 'login',
	},
    {
        path: '/register',
        name: 'register',
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
        component: DashboardLayout,
        name: 'dashboard',
        meta: {
            auth: true
        },
        children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: Dashboard
			},
			{
				path: '/listuser',
				name: 'listuser',
				component: ListUser,
			},
		]
    },
    {
		path: '/404', name: 'error404', component: Error404
	},
	{
		path: '*', redirect: '/404'
	}
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;