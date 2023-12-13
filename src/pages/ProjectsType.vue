<script>
import axios from 'axios';
import {store} from '../data/store'
export default{
  name : 'ProjectsType',

  data(){
    return{
       store
    }
  },

  components:{},
  methods:{
    getApi(slug){
      axios.get(store.apiUrl + 'projects-type/' + slug)
           .then(res=> {
            console.log(res.data);
           })
    }
  },
  mounted(){
    this.getApi(this.$route.params.type_slug)
  },
  computed:{}
}
</script>


<template>
  <div>
    <h1>Progetti per tipo</h1>
  </div>
</template>

<style lang="scss" scoped>
</style>