<script>
import axios from 'axios';
import {store} from '../data/store'
export default{
  name : 'ProjectsTypeTecnology',

  data(){
    return{
       store,
       projects:[],
      //  il topic fa riferimento all'argomento per cui sto filtrando , nella fattispecie possono essere il "tipo" o la "tecnologia"
       topic: '',
       title: '',
    }
  },

  components:{},
  methods:{
    getApi(slug){
      // axios.get(store.apiUrl + 'projects-by-type/' + slug)
      // creo una chiamata dinamica che mi vada bene sia per i type che per i tecnology
      axios.get(`${store.apiUrl}projects-by-${this.topic}/${slug}`)
           .then(res=> {
            this.title = res.data.name;
            this.projects = res.data.projects;
           })
    }
  },
  mounted(){
    this.topic = this.$route.params.topic;
    this.getApi(this.$route.params.slug)
  },
  computed:{}
}
</script>


<template>
  <div>
    <h1>Progetti filtrati per {{ topic }}: {{ title }}</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{name: 'projectDetail' , params:{slug: project.slug}}">{{ project.title }}</router-link>
      </li>
    
    </ul>
  </div>
</template>

<style lang="scss" scoped>
li{
  list-style: none;
  margin: 14px;
  a{
    text-decoration: none;
    color: white;
    &:hover{
      text-decoration: underline;
      color: grey;
    }
  }
}
</style>