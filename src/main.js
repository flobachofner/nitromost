import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'

createApp(App)
    .use(VueGtag, {
        config: { id: 'G-BDQVRJEG0F' }
    })
    .mount('#app');

