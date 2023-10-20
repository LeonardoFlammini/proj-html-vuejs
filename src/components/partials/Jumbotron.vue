<script>
export default {
  name:"Jumbotron",
  methods:{
    getImagePath(i){
      return new URL (`../../assets/images/client-logo-0${i}.png`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lf">
      <div class="row">
        <!-- CTA -->
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
            <img class="over" src="../../assets/images/maxcoach-shape-07.png" alt="">
            <img class="over" src="" alt="">
            <img class="over" src="" alt="">
            <img class="over" src="" alt="">
            <div class="img-frame scaled">
              <img src="../../assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="about me">
            </div>
          </div>
        </div>
      </div>
      <!-- LOGOS -->
      <div class="row row-cols-6 my-5" id="logos">
        <div
          class="col"
          v-for="i in 6"
          :key="i"
        >
          <img :src="getImagePath(i)" :alt="`logo${i}`">
        </div>
      </div> 
    </div>
  </main>
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
  .over{
    position: absolute;
    z-index: -1;
  }
  .scaled{
    width: 500px;
    height: 500px;
  }
}
#logos{
  max-height: 100px;
  
}
</style>