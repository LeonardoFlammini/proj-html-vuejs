<script>
import {store} from "../../data/store"
export default {
  name: "Slider",
  data(){
    return{
      store,
      counter: 0,
      autoPlayEl: null

    }
  },
    methods: {
      nextPrev(isNext) {
        isNext ? this.counter++ : this.counter--;
        if(this.counter > (store.learners.length - 1)){
          this.counter = 0;
        }else if ( this.counter < 0 ){
          this.counter = (store.learners.length - 1);
        }
        
      },
      autoPlay(){
        this.autoPlayEl = setInterval( ()=> {
          this.counter++;
          if(this.counter > (store.learners.length - 1)){
            this.counter = 0;
          }
        },3000)
      },
      stopPlay(){
        clearInterval(this.autoPlayEl);
      },
      getImagePath(img){
        return new URL (`../../assets/images/${img}`, import.meta.url).href;
      }
    },
    mounted(){
      this.autoPlay();
    }
}
</script>

<template>
  <div class="container-c bg-light-lf" id="app">
    <div
      class="carousel-lf d-flex debug"
      @mouseenter
      =
      "stopPlay"
      @mouseleave
      =
      "autoPlay">
    
      <div class="images-lf debug"> 
      <!-- CONTAINER IMMAGINI-->
        <img :src="photos[counter]" alt="photo">
      </div>
      <div class="thumb-nail-lf d-flex flex-wrap debug">
        <div @click.stop="nextPrev(false)" class="arrow-lf up-lf">
          <i class="fa-solid fa-chevron-up"></i>
        </div>
        <div @click.stop="nextPrev(true)" class="arrow-lf bottom-lf">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div
          v-for="card in store.learners"
          :key="card.id"
          class="img-card-lf debug"
          @click="counter = index"
          :class="[{'active-lf': index  === counter}]">
          <img :src="getImagePath(card.src)" :alt="card.src">
        </div>
        
      </div>
    </div>
  </div>
</template>


<style>

</style>