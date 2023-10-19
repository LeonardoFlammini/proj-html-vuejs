<script>
export default {
  name:"Jumbotron"
}
</script>

<template>
  <div class="container-lf">
    <div class="row">
      <div class="col col-5">
        <div class="cta-info">
          <h2>Distant learning for further expansion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas facere, tempore quam nemo vero?</p>
          <button class="btn btn-success green">
            <i class="fa-solid fa-download"></i>
            Download free guide
          </button>
          <div>Have questions?<a href="#">Get Free Sample <i class="fa-solid fa-arrow-right"></i> </a></div>
        </div>
      </div>
      <div class="col col-7">
        <div class="image">
          <div class="img-frame scaled">
            <img src="../../assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="about me">
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-6">
      <!-- <div
        class="col"
        v-for="i in 6"
        :key="i"

      >
        <img :src="`../../assets/images/client-logo-0${i}.png`" :alt="`logo${i}`">
      </div> -->
      <div class="col">
        <img src="../../assets/images/client-logo-02.png" alt=""> 
        <!-- FIXME: farlo dinamicamente -->
      </div>
    </div>

  </div>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.col{
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 80px 10px;
}
.cta-info{
  display: flex;
  flex-direction: column;
  gap: 20px;
  .btn.btn-success.green{
    padding: 20px 30px;
    background-color: $green;
    border: none;
  }
  div{
    a{
      color: $green;
      font-weight: bold;
      i{
        text-decoration: underline;
      }
    }
  }
}
.image{
  position: relative;
  .scaled{
    width: 500px;
    height: 500px;
  }
}
</style>