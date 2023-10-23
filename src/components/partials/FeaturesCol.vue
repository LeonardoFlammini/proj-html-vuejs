<script>
export default {
  name: 'FeaturesCol',
  props:{
    title: String,
    img: String,
    text: String,
    aText: String
  },
  methods:{
    getImagePath(img){
      return new URL (`../../assets/images/${img}`, import.meta.url).href;
    }
  }
}
</script>

<!-- FIXME: mettere le card tutte alla stessa altezza -->
<template>
  <div class="col d-flex align-items-center justify-content-center">
    <div class="card-lf d-flex flex-column justify-content-between gap-2">
      <div class="image">
        <img :src="getImagePath(img)" :alt="img"> 
      </div>
      <h4>{{title}}</h4>
      <p>{{ text }}</p>
      <a href="#">
        {{aText}}
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>
</template>


<style scoped lang="scss">
.col{
  .card-lf{
    
    width: 80%;
    max-width: 300px;
    img{
      display: block;
    }
    h4,a{
      text-transform: capitalize;
    }
  }
}
</style>