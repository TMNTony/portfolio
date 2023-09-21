import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from './store'
import router from './router'
import "@fortawesome/fontawesome-free/css/all.min.css";



// Create the Vuex store passing in the stored credentials
const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');