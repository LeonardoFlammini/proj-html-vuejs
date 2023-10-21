<script>
import Jumbotron from "./partials/Jumbotron.vue"
import Courses from "./partials/Courses.vue"
import Tutoring from "./partials/Tutoring.vue"
export default {
  name:"Main",
  components:{
    Jumbotron,
    Courses,
    Tutoring
  }
}
</script>

<template>
  <main >
    <Jumbotron class="jumbo-my" />
    <Courses class="section-my bg-gray" />
    <Tutoring />
  </main>
</template>


<style scoped lang="scss">

</style>