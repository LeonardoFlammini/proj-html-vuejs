<script>
import {store} from "../../data/store"
import Card from "./Card.vue"
import SectionHeading from "./SectionHeading.vue"
export default {
  name:"Courses",
  components:{
    Card,
    SectionHeading
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <section>
    <div class="container-lf d-flex flex-column align-items-center">
      <SectionHeading
      :title="'featured online courses '"
      :subTitle="'stimulated to learn?'"
      />
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
  </section>
  
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.container-lf{
  .cards{
    width: 100%;
  }
}
</style>