// main.js
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js'; // Importe a modules do Vuex
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "http://145.223.95.36:8080";

const app = createApp(App);

app.use(router);
app.use(store); // Use a modules do Vuex no app

app.mount('#app');
import "bootstrap/dist/js/bootstrap.js";
import axios from "axios";
