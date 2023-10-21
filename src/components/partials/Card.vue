<script>
export default {
  name: "Card",
  props:{
    cardObj: Object
  },
  methods:{
    getImagePath(){
      return new URL (`../../assets/images/${this.cardObj.src}`, import.meta.url).href;
      // FIXME: capire perché non trova immagine
    }
  }
}
</script>

<template>
  <div class="col">
    <div class="card-lf ">
      <div class="img-frame">
        <img :src="getImagePath" :alt="`${cardObj.src}`">
      </div>
      <div class="course-info d-flex flex-column justify-content-between">
        <div v-if="cardObj.price.isFree" class="free">Free</div>
        <div v-else class="price ">
          <span class="dollar">&#36</span>
          <span class="units ms-1">{{ cardObj.price.units }}</span>
          <span class="decimals">{{ cardObj.price.decimals }}</span>
        </div>
        <div class="text">
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
        </div>
        <div class="info d-flex">
          <span>
            <i class="fa-regular fa-file"></i>
            {{ cardObj.lessons }} Lessons
          </span>
          <span>
            <i class="fa-regular fa-user"></i>
            {{ cardObj.students}} Students
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.card-lf{
      display: flex;
      width: 100%;
      .img-frame{
        flex-shrink: 0;
        img{
          height: 100%;
        }
      }
      .course-info{
        width: calc(100% - 150px);
        padding: 10px 20px;
        .free,
        .price{
          color: $green;
          font-size: 20px;
          font-weight: 600;
        }
        .price{
          .decimals{
            font-size: 14px;
            &::before{
              content: '.';
            }
          }
        }
        .text{
          width: 100%;
          font-weight: bold;
        }
      }
      .info{
        gap: 50px;
        font-size: 12px;
        padding: 0 10px;
      }
    }
</style>