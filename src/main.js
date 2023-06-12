import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//importiere router
import router from "./router";

//hinzufügen von use(router)
createApp(App).use(router).mount('#app')
