import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultLayout from "@/layouts/DefaultLayout";
import LoadingContent from "@/components/exceptions/LoadingContent";

const app = createApp(App)

app.use(store)
app.use(router)

app.component("default-layout", DefaultLayout);
app.component("LoadingContent", LoadingContent);

app.config.globalProperties.$api = require("@/utils/api/index").default
app.config.globalProperties.$notify = require("@/utils/notifications")

app.mount('#app')
