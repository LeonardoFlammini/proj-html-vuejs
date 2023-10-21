<script>
import SectionHeading from "./SectionHeading.vue"
export default {
  name: "Tutoring",
  components:{
    SectionHeading
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
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;

</style>