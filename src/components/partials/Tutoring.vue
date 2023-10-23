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
      store
    }
  }
}
</script>

<template>
  <section>
    <div class="container-lf">
      <!-- FIXME: fare in modo che lo span venga stilato -->
      <SectionHeading
      :title="`Access <span>smart tutoring</span> program for benefits`"
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
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;

</style>