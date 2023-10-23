<script>
export default {
  name:"BestBlogs"
}
</script>
<template>
  <section>
    <div class="container-lf">
      <div class="row">
        <div class="col col-4 d-flex flex-column justify-content-center gap-3">
          <div class="subtitle">enjoyable insights</div>
          <h2 class="title">
            <span>Most viewed</span>
            <span class="green-text"> best blogs</span>
          </h2>
          <div class="list">
            <ul>
              <li><i class="fa-solid fa-arrow-right"></i><span class="ms-3">become a better blogger: content planning</span></li>
              <li><i class="fa-solid fa-arrow-right"></i><span class="ms-3">promote your online business on pinterest</span></li>
              <li><i class="fa-solid fa-arrow-right"></i><span class="ms-3">gamification and game - based learning</span></li>
              <li><i class="fa-solid fa-arrow-right"></i><span class="ms-3">design on online course</span></li>
              <li><i class="fa-solid fa-arrow-right"></i><span class="ms-3">why online courses are the future of education</span></li>
            </ul>
          </div>
        </div>
        <div class="col col-8"></div>
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
    list-style: none;
    li{
      text-transform: capitalize;
    }
  }

}
</style>