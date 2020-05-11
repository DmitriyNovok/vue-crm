import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        meta:{layout: 'empty'},
        component: () => import('../views/Login.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        meta:{layout: 'main'},
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta:{layout: 'main'},
        component: () => import('../views/History.vue')
    },
    {
        path: '/detail-record',
        name: 'detail-record',
        component: () => import('../views/DetailRecord.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        component: () => import('../views/Planning.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/record',
        name: 'record',
        component: () => import('../views/Record.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
