<script>
import axios from 'axios';
import {store} from '../data/store';
export default {
  name : 'ContactForm',
  data(){
    return{
      name: '',
      email: '',
      message: '',
      success: true,
    }
    
  },
  components:{
  },
  methods:{
    sendForm(){
      console.log('Invio avvenuto!!!!!');
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(store.apiUrl + 'send-email' , data)
           .then(response =>{
            console.log(response.data);
            this.success = response.data.success;
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
    <h1>Inviaci un messaggio</h1>
    <form @submit.prevent="sendForm()">
      <div>
        <label for="name">Nome</label>
        <input v-model="name" type="text" name="name" id="name">
        <p v-if="!success" class="error">errore</p>
      </div>
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email">
      </div>
      <div>
        <label for="message">Messaggio</label>
        <textarea v-model="message" name="message" id="message" cols="30" rows="3"></textarea>
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
  button{
    padding: 10px;
    border-radius: 9px;
  }
}

.error{
  color: rgb(203, 203, 5);
}
</style>