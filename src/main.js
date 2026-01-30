import { createApp } from 'vue';
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