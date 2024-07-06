import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { useStore } from "./stores";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.config.globalProperties.$store = useStore();
app.mount("#app");
