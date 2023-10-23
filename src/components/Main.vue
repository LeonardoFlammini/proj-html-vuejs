<script>
import Jumbotron from "./partials/Jumbotron.vue"
import Courses from "./partials/Courses.vue"
import Tutoring from "./partials/Tutoring.vue"
import Achievements from './partials/Achievements.vue'
import BestBlogs from './partials/BestBlogs.vue'
export default {
  name:"Main",
  components:{
    Jumbotron,
    Courses,
    Tutoring,
    Achievements,
    BestBlogs
  }
}
</script>

<template>
  <main >
    <Jumbotron class="jumbo-my" />
    <Courses class="section-my bg-gray" />
    <Tutoring />
    <Achievements  />
    <BestBlogs class="bg-weat"/>
  </main>
</template>


<style scoped lang="scss">

</style>