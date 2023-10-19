<script>
import HeaderMenu from "./HeaderMenu.vue"
export default {
  name:"Header",
  components: {
    HeaderMenu
  }
}
</script>

<template>
  <header>
    <div class="container-lf d-flex justify-content-between debug">
      <div class="logo d-flex align-items-center debug">LOGO</div>
      
      <HeaderMenu />
      
    </div>
  </header>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
header{
  height: 50px;
  width: 100%;
  .logo{
    width: 180px;
  }
}


</style>