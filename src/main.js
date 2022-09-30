import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 将store、router挂载到全局变量上, 方便使用
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
createApp(App).use(router).use(ElementPlus).mount('#app')
// app.config.globalProperties.$store = useStore();
// app.config.globalProperties.$router = useRoute();
// app
