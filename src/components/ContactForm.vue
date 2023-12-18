<script>
import axios from 'axios';
import {store} from '../data/store';
import Loader from './partials/Loader.vue';
export default {
  name : 'ContactForm',
  data(){
    return{
      name: '',
      email: '',
      message: '',
      success: false,
      isLoading: false,
      errors:{
        name:[],
        email:[],
        messages:[]
      }
    }
    
  },
  components:{
    Loader
  },
  methods:{
    sendForm(){
      this.isLoading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(store.apiUrl + 'send-email' , data)
           .then(response =>{
            this.isLoading = false;
            console.log(response.data);
            this.success = response.data.success;
            if(!this.success){
              this.errors = response.data.errors;
            }
           })
           .catch(error =>{
            console.log(error);
           })
    }
  },
  mounted(){},
  computed:{}

}
</script>


<template>
  <div>
    <h1>Inviaci un messaggio:</h1>
    <form v-if="!success" @submit.prevent="sendForm()">
      <div v-if="!isLoading">
        <div>
        <label for="name">Nome</label>
        <input v-model="name" type="text" name="name" id="name">
        <p v-for="error in errors.name" class="error">{{ error }}</p>
      </div>
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email">
        <p v-for="error in errors.email" class="error">{{ error }}</p>
      </div>
      <div>
        <label for="message">Messaggio</label>
        <textarea v-model="message" name="message" id="message" cols="30" rows="3"></textarea>
        <p v-for="error in errors.message" class="error">{{ error }}</p>
      </div>
      <div>
        <button type="submit" class="btn btn-check ">Invia</button>
      </div>
      </div>

      <Loader v-else />
     
    </form>

    <div v-else>Email inviata correttamente!</div>
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
  button{
    padding: 10px;
    border-radius: 9px;
  }
}

.error{
  color: rgb(203, 203, 5);
}
</style>