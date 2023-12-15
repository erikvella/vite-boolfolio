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
  <h2 v-if="store.projects.length == 0">Nessun progetto trovato!</h2>
   <div v-else class="card" v-for="project in store.projects" :key="project.id">
      <h3><router-link :to="{name: 'projectDetail' , params:{slug: project.slug}}" class="title">Nome del progetto: {{ project.title }}</router-link></h3>
      <em>Tipologia: {{ project.type.name }}</em>
      <br>
      <em>by {{ project.user.name }}</em>
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

.title{
        text-decoration: none;
        color: rgb(3, 3, 3);
        &.active{
        
          text-decoration: underline;
        }
        &:hover{
          color: rgb(82, 79, 79);
          text-decoration: underline;
      
        }
      }
</style>