import { createApp } from 'vue';
import App from './App.vue';

import vuetify from './plugins/vuetify.js';
import GlobalComponents from './plugins/globalComponents.js';

import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(GlobalComponents);

app.mount('#app');