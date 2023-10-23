<script>
import SectionHeading from "./SectionHeading.vue";
export default {
  name: "CtaTutor",
  props:{
    text: String,
    aTextHighlighted: String
  },
  components:{
    SectionHeading
  }
}
</script>

<template>
  <div class="row ">
    <div class="col col-7">
      <div class="image">
        <img class="over green-stars" src="../../assets/images/maxcoach-shape-07.png" alt="green-stars">
        <img class="over gray-dots-1" src="../../assets/images/maxcoach-shape-08.png" alt="gray-dots">
        <img class="over gray-dots-2" src="../../assets/images/maxcoach-shape-08.png" alt="gray-dots">
        <img class="over blue-circle" src="../../assets/images/maxcoach-shape-02.png" alt="blue-circle">
        <img class="over yt" src="../../assets/images/icon-youtube-play.png" alt="youtube">
        <div class="image">
          <img src="../../assets/images/home-2-popup-video-poster.jpg" alt="about me">
        </div>
      </div>
    </div>
    <div class="col col-5">
      <div class="cta-info">
        <!-- TODO: highlight companionship -->
        <SectionHeading 
        :title="'Enjoy our companionship'"
        :subTitle="'get started effortlessly'"
        />
        <p>{{ text }}</p>
        
        <div>{{ aTextSimple }}<a href="#">{{ aTextHighlighted }} <i class="fa-solid fa-arrow-right"></i> </a></div>
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
      text-transform: capitalize;
      margin-left: 5px;
    }
  }
}
.image{
  position: relative;
  margin-right: 20px;
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
    top: 60%;
  }
  .blue-circle{
    z-index: 1;
    top: -10%;
    right: -10%;
  }
  .scaled{
    width: 500px;
    height: 500px;
  }
  .yt{
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
  }
}
</style>