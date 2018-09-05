// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import VueResource from 'vue-resource'

Vue.use(Vuefire)
Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http.firebaseio.com/'
Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
  if (request.method === 'GET') {
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('x-api-key', '472b2e99-a90b-4cc9-b88a-7329e19ffe5b')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
