<script>
export default {
  name:"Header"
}
</script>

<template>
  <header>
    <div class="container-lf d-flex debug">
      <div class="logo d-flex align-items-center debug">LOGO</div>
      <div class="menu-search"></div>
    </div>
  </header>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
header{
  height: 120px;
  width: 100%;
  .logo{
    width: 180px;
  }
}


</style>