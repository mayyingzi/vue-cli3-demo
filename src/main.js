import 'lib-flexible/flexible.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

if (0 && process.env.NODE_ENV !== 'production') {
    const eruda = require('eruda')

    eruda.init()
}

Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
