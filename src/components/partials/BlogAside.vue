    <script>
    import {store} from '../../data/store'
    export default {
      name: 'BlogAside',
      data() {
        return {
          store
        }
      },
      computed: {},
      mounted() {},
      methods: {}
    }
  </script>
<template>
  
  <div class="d-flex j-center">
    <div class="box">
      <h2>Filtra progetti per tecnologia</h2>
      <ul>
        <li v-for="tecnology in store.tecnologies" :key="tecnology.id">
        <router-link class="routes" :to="{name:'projectsTecnology' , params:{tecnology_slug: tecnology.slug}}">{{ tecnology.name }}</router-link>
        </li>
      </ul>
    </div>

    <div class="box">
      <h2>Filtra progetti per tipo</h2>
      <ul>
        <!-- ho ciclato "tipo" anzichè "type" perchè sennò mi sputtana i tag con i colori (provare per credere) -->
        <!-- <li v-for="type in store.types" :key="type.id">{{ type.name }}</li> -->
        <li v-for="tipo in store.types" :key="tipo.id">
          <router-link class="routes" :to="{name:'projectsType' , params:{type_slug: tipo.slug}}">{{ tipo.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.box{
  border: 2px solid rgb(255, 255, 255);
  margin: 10px;
  width: 40%;
}

li{
  list-style: none;
  margin: 6px;
}
.routes{
  text-decoration: none;
  color: white;
  &:hover{
    color: rgb(162, 160, 160);
  }
}
</style>