<script>
import SectionHeading from './SectionHeading.vue';
import Slider from './Slider.vue';
import SliderCard from './SliderCard.vue';
import {store} from '../../data/store'
export default {
  name: 'TopLearners',
  data(){
    return{
      store,
      titleProp: 'Our top <span class="highlighted">learner\'s</span>  verbatim'
    }
  },
  components:{
    SectionHeading,
    Slider,
    SliderCard
  }

}
</script>

<template>
  <section>
    <div class="container-lf">
      <SectionHeading
      :title="titleProp"
      :subTitle="'great words about maxcoach'"
      class="py-3"
      />
      <Slider/>
    </div>
  </section>
</template>


<style scoped lang="scss">
.container-lf{
  padding: 70px;
}
</style>