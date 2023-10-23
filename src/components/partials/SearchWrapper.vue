<script>
export default {
  name: "SearchWrapper"
}
</script>

<template>
  <div class="wrapper ">
    <input type="text" class="search" placeholder="Search...">
    <span><i class="fa-solid fa-magnifying-glass"></i></span>
  </div>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.wrapper{
  display: flex;
  align-items: center;
  max-height: 100%;
  padding: 2px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: $search-gray;
  .search{
    width: calc(100% - 16px);
    border: none;
    background-color: $search-gray;
    &:focus{
      outline: none;
    }
  }
  span{
    display: inline-block;
    width: 16px;
    cursor: pointer;
    color: $green;
  }
}
</style>