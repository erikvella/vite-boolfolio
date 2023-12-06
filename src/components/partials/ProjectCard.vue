<script>
import {store} from '../../data/store';

export default {
  name : 'ProjectCard',

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
   <div class="card" v-for="project in store.projects" :key="project.id">
      <h3>Nome del progetto: {{ project.title }}</h3>
      <em>Tipologia: {{ project.type.name }}</em>
      <h4>Tecnologie usate:</h4>
      <h4 v-for="tecnology in project.tecnologies" :key="tecnology.id"> {{ tecnology.name }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.card{
  background-color: bisque;
  color: black;
  border: 1px solid rgb(249, 249, 249);
}
</style>