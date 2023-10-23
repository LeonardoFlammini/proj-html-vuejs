<script>
import EmailInputWrapper from './EmailInputWrapper.vue';
export default {
  name: "NewsLetter",
  components:{
    EmailInputWrapper
  }
}
</script>

<template>
  <section>
    <div class="container-lf d-flex justify-content-center align-items-center">
      <div class="row row-cols-1 ">
        <div class="col text-center">
          <h1>Subscribe <span class="green">Newsletters</span></h1>
          <p class="text my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis cum eius eos distinctio libero maxime eaque reprehenderit incidunt autem.</p>
          <EmailInputWrapper />
          <!-- TODO: positions immagini -->
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.row{
  max-width: 700px;
}
.col{
  h1{
    font-weight: bold;
    .green{
      font-weight: 400;
      color: $green;
    }
  }
}
</style>