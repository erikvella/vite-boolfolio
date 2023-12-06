<script>

import {store} from '../data/store';
export default {
  name : 'BlogComponent',
  data(){
    return{
      store
    }
    
  },
  components:{},
  methods:{},
  mounted(){},
  computed:{}

}
</script>


<template>
  <div>
    <h1>I miei progetti!!!</h1>
    <ul>
     <li v-for="project in store.projects" :key="project.id">
          <p>{{ project.title }}</p>
     </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>