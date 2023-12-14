<script>


export default {
  name : 'Navigator',
  props:{
   paginator : Object
  },
  data(){
    return{
      // 
    }
    
  },
  components:{},
  methods:{
    callApi(linkUrl){
      linkUrl = linkUrl.substring(26);
      this.$emit('callApi' , linkUrl);

    
      console.log(linkUrl);
    
    }
  },
  mounted(){},
  computed:{}

}
</script>


<template>
   <div class="nav-wrap">

    
      <button v-for="link in paginator.links" :key="link.label" v-html="link.label" 
      :disabled="link.active|| !link.url" @click="callApi(link.url)"></button>
      
    </div>
</template>

<style lang="scss" scoped>
.nav-wrap{
  text-align: center;
  margin: 10px;
  button{
    padding: 6px;
    margin: 8px;
  }
}
</style>