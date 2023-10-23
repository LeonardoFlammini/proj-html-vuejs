<script>
export default {
  name: "SearchWrapper"
}
</script>

<template>
  <div class="wrapper my-5">
    <input type="email" class="email" placeholder="Enter your Email">
    <span>Subscribe</span>
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
  border-radius: 10px;
  overflow: hidden;
  background-color: $search-gray;
  .email,span{
    height: 50px;
  }
  .email{
    padding: 0 20px;
    width: calc(100% - 100px);
    border: none;
    background-color: $search-gray;
    &:focus{
      outline: none;
    }
  }
  span{
    display: inline-block;
    text-align: center;
    line-height: 50px;
    width: 100px;
    cursor: pointer;
    color: white;
    background-color: $green;
  }
}
</style>