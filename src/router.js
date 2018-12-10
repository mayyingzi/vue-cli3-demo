import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // FIXME:部分提前加载 webpackPrefetch: true
            component: () => import(/* webpackChunkName: "about" , webpackPrefetch: true */ './views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            // route level code-splitting
            component: () => import(/* webpackChunkName: "about", webpackPrefetch: 0 */ './views/contact.vue')
        }
    ]
})
