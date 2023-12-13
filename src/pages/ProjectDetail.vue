<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';
export default{
  name : 'ProjectDetail',

  data(){
    return{
       project : {},
       isLoaded: false,
      
    }
  },

  components:{
    Loader
  },
  methods:{
    getProject(slug){

      axios.get(store.apiUrl + 'projects/get-project/' + slug) 
           .then(res=> {
            if(!res.data.success){
              // se l'API restituisce il fallmineto della chiamata reindirizzo alla pagina 404
              this.$router.push({name: 'error-404'});
            }
             this.isLoaded = true;
             this.project = res.data.project;
             
           })
    }
  },
  mounted(){
    this.getProject(this.$route.params.slug);
  },
  computed:{
    tecnologiesList(){
      return this.project.tecnologies?.map(tecnology => tecnology.name).join(', ') || 'NO TECNOLOGIES';
    },
    formattedDate(){
      const d = new Date(this.project.date);

      const options = {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      }
      return new Intl.DateTimeFormat(navigator.language , options).format(d)
    }
  }
}
</script>


<template>
  <Loader v-if="!isLoaded" />
  <div v-else>
    <h1>Dettagli del progetto</h1>
    <h2>Nome del progetto: : {{ project?.title }}</h2>
    <em>Data di creazione : {{ formattedDate }}</em>
    <p>Tipologia progetto : {{ project.type?.name || ' - '}}</p>
    <p>Tecnologie usate : {{ tecnologiesList }}</p>
    <div>
      <img :src="project?.image" :alt="project?.title">
    </div>
    <em>{{ project?.image_original_name }}</em>
    <p>{{ project.text }}</p>
  </div>


</template>

<style lang="scss" scoped>
img{
  max-width: 600px;
}

</style>