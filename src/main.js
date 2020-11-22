import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import { auth } from './firebase/firebase'
import vuetify from './plugins/vuetify';
import vueCookies from 'vue-cookies'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      created() {
        document.addEventListener('beforeunload', this.handler)
      },
      methods: {
        handler: async function () {
          await auth.signOut()
        }
      },
      vuetify,
      router,
      vueCookies,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
