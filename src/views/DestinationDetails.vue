<template>
    <section class="destinations">
        <!-- <h2>{{destination.name}}</h2> -->
        <div class="destination-details">
            <img v-if="destination" :src="require(`@/assets/${destination.image}`)" alt="destination.name">
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