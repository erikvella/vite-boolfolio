<script>
import axios from 'axios';
import {store} from '../../data/store'
export default{
  name : 'Header',

  data(){
    return{
      store,
      tosearch: ''
    }
  },

  components:{},
  methods:{
    getApi(){
      store.isLoaded = false;
      const endpoint = (this.tosearch.length > 0) ? store.apiUrl + 'search/' + this.tosearch : store.apiUrl + 'projects/';
      axios.get(endpoint)
           .then(results => {
            store.isLoaded = true;
            store.projects = results.data.data;
            store.paginator.links = results.data.links;
            store.titleBlog = (this.tosearch.length > 0) ? 'Risultati della ricerca per: ' + this.tosearch : 'Elenco di tutti i progetti';
            this.tosearch = '';
           })
    }
  },
  mounted(){},
  computed:{}
}
</script>


<template>
  <header class="d-flex">
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">chi siamo</router-link>
        </li>
        <li>
          <router-link :to="{name: 'blog'}">blog</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">contatti</router-link>
        </li>
      </ul>
    </nav>

    <div class="form">
      <input type="text" placeholder="Cerca" v-model.trim="tosearch" @keyup.enter="getApi">
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
justify-content: center;
position: fixed;
width: 100%;
text-align: center;
align-items: center;
  ul{
    list-style: none;
    li{
      display: inline-block;
      margin: 15px;
      a{
        text-decoration: none;
        color: white;
        &.active{
          color: yellow;
          text-decoration: underline;
        }
        &:hover{
          text-transform: uppercase;
          text-decoration: underline;
        }
      }
    }
  }
  .form{
    margin: 15px;
    input{
      padding: 5px;
      border-radius: 8px ;
      
    }
  }
}
</style>