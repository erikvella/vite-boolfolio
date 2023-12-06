<script>
import axios from 'axios';
import {store} from './data/store';
import BlogComponent from './components/BlogComponent.vue';


export default{
  name : 'App',
  components:{
    BlogComponent,
   
},

  data(){
    return{
      titolo : 'I miei progetti'
    }
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(results =>{
        console.log(results.data);
        store.projects = results.data;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div class="container">
    <BlogComponent />
  </div>
</template>

<style lang="scss">

</style>
