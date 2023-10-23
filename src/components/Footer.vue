<script>
import {store} from "../data/store"
export default {
  name:"Footer",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <section>
    <div class="container-lf">
      <div class="row row-cols-2">
        <div class="col info">
          <h5>Address</h5>
          <span>Latitude: -15.21937, Longitude: 29.12604</span>
          <span>+69 (0944173174)</span>
          <span>email@email.com</span>
          <div class="social">
            <span><i class="fa-brands fa-square-facebook"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span><i class="fa-brands fa-x-twitter"></i></span>
          </div>
        </div>
        <div class="col ">
          <div class="row row-cols-3">
            <div class="col"
            v-for="menu in store.footerMenus"
            :key="menu.id"
            >
              <nav>
                <h5>{{ menu.title }}</h5>
                <ul>
                  <li
                  v-for="(voice,index) in menu.voices"
                  :key="index"
                  >
                  {{ voice }}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *; 
.container-lf{
  padding: 100px 0;
  color: $dark-gray;
  h5{
    color: black;
  }
  span{
    margin: 10px 0;
    display: block;
  }
  .social{
    span{
      &:first-of-type{
        margin-left: 0;
      }
    font-size: 18px;
    display: inline-block;
    margin: 0 10px;
  }
  }
}
</style>