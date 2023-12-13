<script>

import {store} from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';
export default {
  name : 'BlogComponent',
  data(){
    return{
      store
    }
    
  },
  components:{
    ProjectCard
  },
  methods:{},
  mounted(){},
  computed:{}

}
</script>


<template>
  <div>
    <h1>I miei progetti!!!</h1>
    
   <ProjectCard/>
  </div>
  
</template>

<style lang="scss" scoped>

</style>