<template>
    <nav id="nav">
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li v-for="destination in destinations"
        :key="destination.name"
        class="links">
        <router-link :to="{
          name: 'DestinationDetails',
          params: {id:destination.id}
        }"> 
        {{ destination.name }}

        </router-link>

        </li>
      </ul>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/panama">Panama</router-link>
        <router-link to="/hawaii">Hawaii</router-link>
        <router-link to="/jamaica">Jamaica</router-link> -->
    </nav>
</template>

<script>
import store from "@/store";
export default{
  data(){
    return{
      destinationId: this.$route.params.id,
      destinations: store.destinations
    };
  }
}
</script>




<style scoped>
#nav{
    display:flex;
  }
.nav-links {
    display: flex;
    gap: 10px;
  }
.links{
  text-decoration: none;
  list-style-type: none;


}
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
  }
  
  #nav a.router-link-exact-active {
    color: #f4cb01;
  }

</style>