// import { createApp } from 'vue';
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import App from './App.vue';

import vuetify from './plugins/vuetify.js';
import globalComponents from './plugins/globalComponents';

import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);

app.use(vuetify);
app.use(globalComponents);
app.use(createPinia());
app.use(router);

app.mount('#app');