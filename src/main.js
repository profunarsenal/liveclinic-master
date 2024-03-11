import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n/index';
import YmapPlugin from 'vue-yandex-maps';
import settings from './maps/index';
import services from './plugins/services';

const app = createApp(App);

app.use(services);
app.use(i18n);
app.use(YmapPlugin, settings);
app.use(store);
app.use(router);

app.mount('#app');