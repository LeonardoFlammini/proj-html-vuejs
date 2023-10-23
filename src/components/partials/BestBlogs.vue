<script>
import {store} from "../../data/store"
export default {
  name:"BestBlogs",
  data(){
    return{
      store
    }
  },
  methods:{
    getImagePath(img){
      return new URL (`../../assets/images/${img}`, import.meta.url).href;
    }
  }
}
</script>
<template>
  <section>
    <div class="container-lf">
      <div class="row py-5">
        <div class="col col-4 d-flex flex-column justify-content-center gap-3">
          <div class="subtitle">enjoyable insights</div>
          <h2 class="title">
            <span>Most viewed</span>
            <span class="green-text"> best blogs</span>
          </h2>
          <div class="list">
            <ul>
              <li>become a better blogger: content planning</li>
              <li>promote your online business on pinterest</li>
              <li>gamification and game - based learning</li>
              <li>design on online course</li>
              <li>why online courses are the future of education</li>
            </ul>
          </div>
        </div>
        <div class="col col-8">
          <div class="row .row-cols-2 p-5">
            <div class="col d-flex"
            v-for="card in store.mostViewed"
            :key="card.id"
            >
              <div class="card" >
                <img :src="getImagePath(card.src)" class="card-img-top" :alt="card.src">
                <div class="card-body">
                  <h6 class="subtitle">{{ card.genre }}</h6>
                  <h5 class="title">{{ card.title }}</h5>
                  <div class="row row-cols-2 info">
                    <div class="col">
                      <span><i class="fa-regular fa-calendar"></i></span>
                      <span class="date">{{ card.date }}</span>
                    </div>
                    <div class="col">
                      <span><i class="fa-regular fa-eye"></i></span>
                      <span class="date">{{ card.views }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.col{
  .subtitle{
    color: $dark-gray;
    text-transform: uppercase;
    font-weight: 300;
  }
  .title{
    .green-text{
      color: $green;
    }
  }
  ul{
    position: relative;
    list-style: none;
    li{
      text-transform: capitalize;
      &::before{
        content: '\279C';
        position: absolute;
        left: 0 
      }
    }
  }
  .card-body{
    color: $font-primary-color;
    .info{
      color: $dark-gray;
      font-size: 12px;
      span{
        margin-left: 5px;
      }
    }
  }
}
</style>