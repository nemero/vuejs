import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AboutUsPage from './components/pages/aboutus.vue'
import HomePage from './components/pages/home.vue'
import ContactUsPage from './components/pages/contactus.vue'

const api_url = 'http://localhost'
const router = new VueRouter({
 	routes: [
 		{ 
	  		path: '/home', 
	  		component: HomePage 
	  	},
	  	{ 
		  	path: '/about-us', 
	  		component: AboutUsPage 
	  	},
	  	{ 
		  	path: '/contact-us', 
	  		component: ContactUsPage 
	  	}
]})


Vue.config.productionTip = false

new Vue({
	router,
  	render: h => h(App)
}).$mount('#app')
