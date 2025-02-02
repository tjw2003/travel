import { createRouter, createWebHistory } from 'vue-router';  // 使用新的 API
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
});

export default router;
