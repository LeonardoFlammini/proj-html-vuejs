<script>
import SectionHeading from './SectionHeading.vue';
import Slider from './Slider.vue';
export default {
  name: 'TopLearners',
  components:{
    SectionHeading,
    Slider
  }

}
</script>

<template>
  <section>
    <div class="container-lf">
      <SectionHeading
      :title="'Our top learner\'s verbatim'"
      :subTitle="'great words about maxcoach'"
      class="py-3"
      />
      
    </div>
  </section>
</template>


<style scoped lang="scss">

</style>