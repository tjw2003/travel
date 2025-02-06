import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 导入路由配置
import './assets/tailwind.css'  // 引入 Tailwind CSS 文件

createApp(App)
  .use(router)  
  .mount('#app');