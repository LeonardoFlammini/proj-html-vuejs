<script>
import SectionHeading from "./SectionHeading.vue"
import CtaTutor from "./CtaTutor.vue"
import FeaturesCol from "./FeaturesCol.vue"
import {store} from "../../data/store"
export default {
  name: "Tutoring",
  components:{
    SectionHeading,
    FeaturesCol,
    CtaTutor
  },
  data(){
    return{
      store,
      titleProp: 'Access <span class="highlighted">smart tutoring</span> program for benefits'
    }
  }
}
</script>

<template>
  <section class="section">
    <div class="container-lf">
      <!-- FIXME: fare in modo che lo span venga stilato -->
      <SectionHeading
      :title="titleProp"
      :subTitle="'maxcoach available courses'"
      />
      <div class="features row row-cols-3 my-5 p-3">
        <FeaturesCol
        v-for="item in store.featuresArray"
        :key="item.id"
        :title="item.title"
        :img="item.src"
        :text="item.text"
        :aText="item.aText"
        />
      </div>
      <CtaTutor
      class="py-5"
      :text="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas facere, tempore quam nemo vero?'" 
      :aTextHighlighted="'download free guide book'"
      />
    </div>
    <!-- <div class="wave">
      <img src="../../assets/images/wave.svg" alt="wave">
    </div> -->
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.section{
  position: relative;
  .wave{
    width: 100%;
    max-height: 100px;
    overflow: hidden;
    position: absolute;
    z-index: 999;
    bottom: -35px;
  }
}

</style>