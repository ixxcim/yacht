import '@/assets/css/style.css';
import '@/assets/scss/bootstrap.scss';
import 'uno.css';

import App from './app.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount('#app');
