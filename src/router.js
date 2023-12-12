import { createRouter , createWebHistory } from "vue-router";

// importo i vari componenti delle pagine
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Blog from './pages/Blog.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history : createWebHistory(),
  linkExactActiveClass : 'active',

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
    {
      path : '/blog',
      name : 'blog',
      component : Blog
    },
    {
      path : '/contatti',
      name : 'contacts',
      component : Contacts
    },
    {
      // rotta con elemento dinamico come parametro (slug)
      path : '/dettaglio-progetto/:slug',
      name : 'projectDetail',
      component : ProjectDetail
    },

    // rotta 404 da mettere come ultima rotta
    // '/:pathMatch(.*)*' <---- significa tutte le rotte possibili , ed è per questo che intecetta tutte le rotte sbagliate ad esclusione di quelle precedenti
    {
      path : '/:pathMatch(.*)*',
      // non mettiamo il name per il 404 , oppure lo mettiamo per reindirizzare in casi particolare (vedasi la chiamata all'API secondo lo slug)
      name : 'error-404',
      component : Error404
    },
  ]
});

export {router}