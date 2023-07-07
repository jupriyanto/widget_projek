import './assets/main.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdGamesSharp} from 'oh-vue-icons/icons';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

addIcons(MdGamesSharp);
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
