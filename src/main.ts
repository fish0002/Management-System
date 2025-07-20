import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import './style.css';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@/access/index';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component);
}
app.use(router);
app.use(pinia);
app.mount('#app');
