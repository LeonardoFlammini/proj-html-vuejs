<script>
import Jumbotron from "./partials/Jumbotron.vue"
import Courses from "./partials/Courses.vue"
export default {
  name:"Main",
  components:{
    Jumbotron,
    Courses
  }
}
</script>

<template>
  <main >
    <Jumbotron class="jumbo-my" />
    <Courses class="section-my bg-gray" />
  </main>
</template>


<style scoped lang="scss">

</style>