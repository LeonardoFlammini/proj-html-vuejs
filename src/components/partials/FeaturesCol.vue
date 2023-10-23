<script>
export default {
  name: 'FeaturesCol',
  props:{
    title: String,
    img: String,
    text: String,
    aText: String
  }
}
</script>

<!-- FIXME: capire perché non stampa immagini -->
<template>
  <div class="col d-flex align-items-center justify-content-center">
    <div class="card-lf d-flex flex-column gap-2">
      <div class="image">
        <img :src="`../../assets/images/${img}`" :alt="img"> 
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