<script>
import axios from 'axios';
import {store} from '../data/store';
import BlogComponent from '../components/BlogComponent.vue';
import Loader from '../components/partials/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';


export default{
  name : 'Blog',
  components:{
    BlogComponent,
    Loader,
    Navigator

   
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
      axios.get(endpoint)
      .then(results =>{
        this.isLoaded = true;
        store.projects = results.data.data;
        this.paginator.links = results.data.links;
    
        
      })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}
</script>

<template>

    <loader v-if="!isLoaded" />
    <div v-else >
      <BlogComponent />
    <Navigator :paginator="paginator" @callApi="getApi" />
    </div>
    
  
</template>

<style lang="scss">

</style>
