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
      <ul>
        <li v-for="tecnology in store.tecnologies" :key="tecnology.id">{{ tecnology.name }}</li>
      </ul>
    </div>

    <div class="box">
      <ul>
        <!-- ho ciclato "tipo" anzichè "type" perchè sennò mi sputtana i tag con i colori (provare per credere) -->
        <!-- <li v-for="type in store.types" :key="type.id">{{ type.name }}</li> -->
        <li v-for="tipo in store.types" :key="tipo.id">{{ tipo.name }}</li>
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
</style>