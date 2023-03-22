import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue';
import Home from '../views/Home.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
});

export default router
