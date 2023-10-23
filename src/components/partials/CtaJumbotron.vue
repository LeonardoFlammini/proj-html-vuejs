<script>
export default {
  name: "CtaJumbotron",
  props:{
    title: String,
    btnText: String,
    text: String,
    aTextSimple: String,
    aTextHighlighted: String
  },
}
</script>

<template>
  <div class="row ">
    <!-- CTA -->
    <div class="col col-5">
      <div class="cta-info">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <button class="btn btn-success green">
          <i class="fa-solid fa-download"></i>
          {{ btnText }}
        </button>
        <div>{{ aTextSimple }}<a href="#">{{ aTextHighlighted }} <i class="fa-solid fa-arrow-right"></i> </a></div>
      </div>
    </div>
    <div class="col col-7">
      <div class="image">
        <img class="over green-stars" src="../../assets/images/maxcoach-shape-07.png" alt="green-stars">
        <img class="over gray-dots-1" src="../../assets/images/maxcoach-shape-08.png" alt="gray-dots">
        <img class="over gray-dots-2" src="../../assets/images/maxcoach-shape-08.png" alt="gray-dots">
        <img class="over blue-circle" src="../../assets/images/maxcoach-shape-02.png" alt="blue-circle">
        <img class="over" src="" alt="">
        <div class="img-frame scaled">
          <img src="../../assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="about me">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
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
      margin-left: 5px;
    }
  }
}
.image{
  position: relative;
  .over{
    position: absolute;
    z-index: -1;
  }
  .green-stars{
    bottom: 0;
    left: 60%;
  }
  .gray-dots-1,
  .gray-dots-2{
    left: -10%;
  }
  .gray-dots-1{
    top: 20%;
  }
  .gray-dots-2{
    top: 50%;
  }
  .blue-circle{
    z-index: 1;
    top: 10%;
    right: -20%;
  }
  .scaled{
    width: 500px;
    height: 500px;
  }
}
</style>