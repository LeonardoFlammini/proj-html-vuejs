<script>
import {store} from "../data/store"
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
  <div class="d-flex align-items-center debug">
    <ul class="d-flex debug">
      <li
        v-for="(item,index) in store.menuHeader"
        :key="index"
      >
      {{ item }}
      <i class="fa-solid fa-chevron-down"></i>
      </li>
      <div class="user-icon">
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <input type="text" class="form-control" placeholder="Search...">
    </ul>
  </div>
</template>


<style scoped lang="scss">
ul{
  list-style: none;
  margin-bottom: 0;
  li{
    display: flex;
    align-items: center;
    margin: 0 5px;
    text-transform: capitalize;
    // font-size: 0.8rem;
    i{
      font-size: 0.5rem;
    }
  }
}
.user-icon{
  margin: 0 15px;
  display: flex;
  align-items: center;
}
</style>