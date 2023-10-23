<script>
  import CtaJumbotron from "./CtaJumbotron.vue";
export default {
  name:"Jumbotron",
  components:{
    CtaJumbotron
  },
  methods:{
    getImagePath(i){
      return new URL (`../../assets/images/client-logo-0${i}.png`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <section>
    <div class="container-lf">
      <CtaJumbotron 
      :title="'Distant learning for further expansion'" 
      :btnText="'download free guide'" 
      :text="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas facere, tempore quam nemo vero?'" 
      :aTextSimple="'Have questions?'"
      :aTextHighlighted="'Get free sample'"
      />
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
  </section>
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
#logos{
  max-height: 100px;
  
}
</style>