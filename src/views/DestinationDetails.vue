<template>
    <section class="destinations">
        <h2>{{destination.name}}</h2>
        <div class="destination-details">
            <img v-if="destination" :src="require(`@/assets/${destination.image}`)" alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script>
import store from "@/store.js";

export default {
    data(){
        return{
            destinationId: this.$route.params.id
        }
    },
    
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.id == this.destinationId
            )
        }
    }
}

</script>

<style scoped>
img{
    border-radius:15px;
    max-width: 500px;
    width:100%;
    height: auto;
    margin: 30px;
}
.destination-details{
    display:flex;
    justify-content: space-between;
}
p{
    margin: 20px 50px;
    text-align: justify;
}
</style>