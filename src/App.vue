<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import Swiper from 'swiper';

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer
  },
  data(){
    return{
      Swiper
    }
  }
}
</script>

<template>
  <Header />
  <Main />
  <Footer class="bg-footer" />
</template>



<style lang="scss">
@import "./scss/main.scss"
</style>