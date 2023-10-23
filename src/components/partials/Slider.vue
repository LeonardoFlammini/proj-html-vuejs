<script>
import {store} from "../../data/store"
import SliderCard from "./SliderCard.vue";
export default {
  name: "Slider",
  components:{
    SliderCard
  },
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
      getImagePath(img){
        return new URL (`../../assets/images/${img}`, import.meta.url).href;
      }
    }
}
</script>

<template>
  <div class="container-lf">
    <div class="carousel-lf d-flex ">
      <div class="card-container"> 
      <!-- CONTAINER IMMAGINI-->
        <SliderCard
        :cardObj="store.learners[counter]" />
        <div @click.stop="nextPrev(false)" class="arrow-lf left-lf">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div @click.stop="nextPrev(true)" class="arrow-lf right-lf">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.carousel-lf{
  .card-container{
    position: relative;
    width: 100%;
    height: 100%;
    .arrow-lf{
      position: absolute;
      z-index: 999;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      text-align: center;
      background-color: rgba(255, 255, 255, .5);
      transition: all .2s;
      &:hover{
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .arrow-lf.left-lf{
      left: -70px;
    }
    .arrow-lf.right-lf{
      right: -70px;
    }
  

  }
  
}


</style>