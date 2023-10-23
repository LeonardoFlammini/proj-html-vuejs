<script>
import { store } from "../../data/store";
export default {
  name: "Achievements",
  data(){
    return{
      store
    }
  }
}
</script>

<!-- TODO: style -->
<template>
  <section>
    <div class="container-lf">
      <div class="row row-cols-4">
        <div class="col d-flex align-items-center justify-content-center"
        v-for="item in store.achievements"
        :key="item.id"
        >
          <div class="card-lf d-flex flex-column align-items-center gap-3">
            <div class="title">{{ item.title }}</div>
            <div class="data">{{ item.data }}</div>
            <div class="achievement">{{ item.achievement }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;

.row{
  height: 300px;
  .col{
    border-left: 3px solid $primary-gray;
    &:last-child{
      border-right: 3px solid $primary-gray;
    }
  }
  .card-lf{
    
    .title{
      text-transform: capitalize;
      font-weight: bold;
      font-size: 18px;
    }
    .data{
      font-size: 40px;
      font-weight: bold;
      color: $green;
    }
    .achievement{
      text-transform: uppercase;
      font-size: 14px;
      color: gray;
      //TODO: mettere in palette
      font-weight: 300;
    }
  }
}
</style>