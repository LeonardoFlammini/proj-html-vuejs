<script>
export default {
  name: 'FeaturesCol'
}
</script>

<template>
  <div class="col d-flex align-items-center justify-content-center">
    <div class="card-lf d-flex flex-column gap-2">
      <div class="image">
        <img src="../../assets/images/about-us-02-image-box-02.png" alt="img"> 
      </div>
      <h4>Cloud storage</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!</p>
      <a href="#">
        Start here
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
  }
}
</style>