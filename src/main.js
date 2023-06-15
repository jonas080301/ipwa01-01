import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//importiere router
import router from "./router";

//Vue-App erstellen, hinzufügen von router und am HTML-Element mit der ID #app mounten
createApp(App).use(router).mount('#app')
