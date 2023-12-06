<script>
import axios from 'axios';
import {store} from './data/store';

export default{
  name : 'App',
  data(){
    return{
      titolo : 'Bentornati su vue'
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(results =>{
        console.log(results.data);
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
    <h1>{{ titolo }}</h1>
  </div>
</template>

<style lang="scss">

</style>
