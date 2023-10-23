<script>
import Jumbotron from "./partials/Jumbotron.vue"
import Courses from "./partials/Courses.vue"
import Tutoring from "./partials/Tutoring.vue"
import Achievements from './partials/Achievements.vue'
import BestBlogs from './partials/BestBlogs.vue'
import NewsLetter from './partials/NewsLetter.vue'
import TopLearners from "./partials/TopLearners.vue"
export default {
  name:"Main",
  components:{
    Jumbotron,
    Courses,
    Tutoring,
    Achievements,
    BestBlogs,
    NewsLetter,
    TopLearners
  }
}
</script>

<template>
  <main >
    <Jumbotron class="jumbo-my" />
    <Courses class="section-my bg-gray" />
    <Tutoring />
    <TopLearners class="bg-weat" />
    <Achievements  />
    <BestBlogs class="bg-weat"/>
    <NewsLetter class="section-my" />
  </main>
</template>


<style scoped lang="scss">

</style>