import { createRouter , createWebHistory } from "vue-router";

// importo i vari componenti delle pagine
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Error404 from './pages/Error404.vue';

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

    // rotta 404 da mettere come ultima rotta
    // '/:pathMatch(.*)*' <---- significa tutte le rotte possibili , ed è per questo che intecetta tutte le rotte sbagliate ad esclusione di quelle precedenti
    {
      path : '/:pathMatch(.*)*',
      // non mettiamo il name per il 404
      component : Error404
    },
  ]
});

export {router}