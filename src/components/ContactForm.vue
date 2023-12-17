<script>

import {store} from '../data/store';
export default {
  name : 'ContactForm',
  data(){
    return{
      
      store
    }
    
  },
  components:{
  },
  methods:{},
  mounted(){},
  computed:{}

}
</script>


<template>
  <div>
    <h1>Inviaci un messaggio</h1>
    <form action="">
      <div>
        <label for="name">Nome</label>
        <input type="text" name="name" id="name">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email">
      </div>
      <div>
        <label for="message">Messaggio</label>
        <textarea name="message" id="message" cols="30" rows="3"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-check ">Invia</button>
      </div>
    </form>
  </div>
  
</template>

<style lang="scss" scoped>
form{
  label , input , textarea{
    display: block;
    margin-bottom: 8px;
    width: 100%;
    border-radius: 7px;
    padding: 10px;
  }
}
</style>