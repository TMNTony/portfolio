import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from './store'
import router from './router'
import axios from 'axios'
import "@fortawesome/fontawesome-free/css/all.min.css";

/* sets the base url for server API communication with axios */
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;


// Create the Vuex store passing in the stored credentials
const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');