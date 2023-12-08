<script>
export default{
  name : 'Header',

  data(){
    return{

    }
  },

  components:{},
  methods:{},
  mounted(){},
  computed:{}
}
</script>


<template>
  <header>
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
  </header>
</template>

<style lang="scss" scoped>
header{
position: fixed;
width: 100%;
text-align: center;
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
}
</style>