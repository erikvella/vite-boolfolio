<script>
import axios from 'axios';
import {store} from '../data/store';
import BlogComponent from '../components/BlogComponent.vue';
import Loader from '../components/partials/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';
import BlogAside from '../components/partials/BlogAside.vue';


export default{
  name : 'Blog',
  components:{
    BlogComponent,
    Loader,
    Navigator,
    BlogAside,

   
},

  data(){
    return{
     
     isLoaded : false,
      store,
      paginator : {
        links : [],
        firstPageUrl : '',
        lastPageUrl : '',

      }
    }
  },

  methods:{
    getApi(endpoint){
      store.isLoaded = false;
      axios.get(store.apiUrl + endpoint)
      .then(results =>{
  
        switch(endpoint){
          case 'types':
          store.types = results.data;
          break;
          case 'tecnologies':
          store.tecnologies = results.data;
          break;
          default:
          store.isLoaded = true;
          store.projects = results.data.data;
          store.paginator.links = results.data.links;
         if(!endpoint.includes('search/')) store.titleBlog = 'Elenco di tutti i progetti';
          
        }
        
    
        
      })
    }
  },
  mounted(){
    this.getApi('projects');
    this.getApi('types');
    this.getApi('tecnologies');
  }
}
</script>

<template>

    <loader v-if="!store.isLoaded" />
    <div v-else >
      <BlogAside/>

      <BlogComponent />
     
       <Navigator v-if="store.projects.length > 0" :paginator="store.paginator" @callApi="getApi" />

    </div>
    
  
  
</template>

<style lang="scss" scoped>

</style>
