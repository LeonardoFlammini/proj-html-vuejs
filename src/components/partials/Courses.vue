<script>
import {store} from "../../data/store"
import Card from "./Card.vue"
export default {
  name:"Courses",
  components:{
    Card
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lf d-flex flex-column align-items-center">
      <div class="row row-cols-1 text-center title">
        <h6>stimulated to learn?</h6>
        <h3>featured online courses</h3>
      </div>
      <div class="row row-cols-2 row-gap-4 my-5 cards">
        <Card
          v-for="item in store.cardsArray"
          :key="item.id"
          :cardObj="item" />
      </div>
      <div class="row row-cols-1 my-5 justify-content-center">
        <button class="btn btn-success green">
          View all courses 
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </main>
  
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.container-lf{
  .title{
    margin-top: 50px;
    h6{
      text-transform: uppercase;
      font-weight: 300;
      font-size: 12px;
    }
    h3{
      text-transform: capitalize;
    }
  }
  .cards{
    width: 100%;
  }
}
</style>