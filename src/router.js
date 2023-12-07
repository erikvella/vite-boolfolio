import { createRouter , createWebHistory } from "vue-router";

// importo i vari componenti delle pagine
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const router = createRouter({
  history : createWebHistory(),

  routes : [
    {
      path : '/',
      name : 'home',
      component : Home
    },
    {
      path : '/chi-siamo',
      name : 'about',
      component : About
    },
  ]
});

export {router}