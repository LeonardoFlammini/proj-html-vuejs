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
        <div class="col"
        v-for="item in store.achievements"
        :key="item.id"
        >
          <div class="card-lf">
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
.row{
  max-height: 400px;
}
</style>