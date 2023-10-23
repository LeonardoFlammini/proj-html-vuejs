<script>
import {store} from "../../data/store"
export default {
  name: "HeaderMenu",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="d-flex align-items-center menu ">
    <ul class="d-flex ">
      <li
        v-for="(item,index) in store.menuHeader"
        :key="index"
      >
      <span>{{ item }}</span>
      <i class="fa-solid fa-chevron-down"></i>
      </li>
    </ul>
    <div class="user-icon">
      <i class="fa-regular fa-circle-user"></i>
    </div>
    <div class="wrapper ">
      <input type="text" class="search" placeholder="Search...">
      <span><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    
  </div>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.menu{
  color: $font-primary-color;
  ul{
  list-style: none;
  margin-bottom: 0;
  li{
    display: flex;
    align-items: center;
    margin: 0 5px;
    text-transform: capitalize;
    cursor: pointer;
    i{
      font-size: 0.5rem;
    }
  }
}
.user-icon{
  margin: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.wrapper{
  display: flex;
  align-items: center;
  max-height: 100%;
  padding: 2px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: $search-gray;
  .search{
    border: none;
    background-color: $search-gray;
    &:focus{
      outline: none;
    }
  }
  span{
    cursor: pointer;
    color: $green;
  }
}
}
</style>