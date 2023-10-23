<script>
export default {
  name: "SectionHeading",
  props:{
    title: String,
    subTitle: String
  }
}
</script>

<template>
  <div class="row row-cols-1 text-center title">
    <h6>{{ subTitle }}</h6>
    <h3 v-html="title"></h3>
  </div>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;

.title{
  h6{
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
  }
  h3{
    text-transform: capitalize;
  }
  }
</style>