import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router/index'
import store from './stores'

import './tools/styles/app.styl'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBSJVQmTmk-75_F9exEHV77ONmi3pSiEb4'
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
