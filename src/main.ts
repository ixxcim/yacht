import '@/assets/css/style.css';
import '@/assets/scss/bootstrap.scss';
import 'uno.css';

import App from './app.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import createRouter from '@/router';

const store = createPinia();
const app = createApp(App);
const router = createRouter();

app.use(store).use(router);
app.mount('#app');
