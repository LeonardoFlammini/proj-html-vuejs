<script>
import HeaderMenu from "./partials/HeaderMenu.vue"
export default {
  name:"Header",
  components: {
    HeaderMenu
  }
}
</script>

<template>
  <header class="fixed-top">
    <div class="container-lf d-flex justify-content-between ">
      <div class="logo d-flex align-items-center ">
        <img src="../assets/images/dark-logo.png" alt="logo">
      </div>
      
      <HeaderMenu />
      
    </div>
  </header>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
header{
  height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0px 10px 0px lightgrey;
  .logo{
    width: 180px;
  }
}


</style>