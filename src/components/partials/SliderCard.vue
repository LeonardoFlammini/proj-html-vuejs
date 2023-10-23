<script>
export default {
  name: 'SliderCard',
  props:{
    cardObj : Object
  },
  methods:{
    getImagePath(img){
      return new URL (`../../assets/images/${img}`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="card-lf d-flex flex-column justify-content-center gap-3">
    <h5 class="course">{{ cardObj.course }}</h5>
    <p class="text">{{ cardObj.text }}</p>
    <div class="student clearfix">
      <div class="img-frame">
        <img :src="getImagePath(cardObj.src)" :alt="cardObj.src">
      </div>
      <h5 class="name">{{ cardObj.name }}</h5>
      <span class="role">/{{ cardObj.role }}</span>
    </div>
  </div>
</template>


<style scoped lang="scss">
.card-lf{
  padding: 20px;
  height: 300px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  .img-frame{
    margin-right: 20px;
    float: left;
    width: 50px;
    height: 50px;
  }
}
</style>