<script>
export default {
  name:"Courses"
}
</script>

<template>
  <main>
    <div class="container-lf d-flex flex-column align-items-center">
      <div class="row row-cols-1 text-center title">
        <h6>stimulated to learn?</h6>
        <h3>featured online courses</h3>
      </div>
      <div class="row row-cols-2 row-gap-4 my-5 cards">
        <!-- TODO: farlo dinamicamente -->
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
        <div class="col">
          <div class="card-lf ">
            <div class="img-frame">
              <img src="../../assets/images/course-02-480x298.jpg" alt="course">
            </div>
            <div class="course-info d-flex flex-column justify-content-between">
              <!-- TODO: v-if isFree -->
              <!-- v-else  -->
              <div class="price ">
                <span class="dollar">&#36</span>
                <span class="units ms-1">19</span>
                <span class="decimals">.00</span>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </div>
              <div class="info d-flex">
                <span>
                  <i class="fa-regular fa-file"></i>
                  20 Lessons
                </span>
                <span>
                  <i class="fa-regular fa-user"></i>
                  50 Students
                </span>
              </div>
          </div>

          </div>
        </div>
      </div>
      <div class="row row-cols-1 my-5 justify-content-center">
        <button class="btn btn-success green">
          View all courses 
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </main>
  
</template>


<style scoped lang="scss">
@use "../../scss/partials/vars.scss" as *;
.container-lf{
  .title{
    margin-top: 50px;
    h6{
      text-transform: uppercase;
      font-weight: 300;
      font-size: 12px;
    }
    h3{
      text-transform: capitalize;
    }
  }
  .cards{
    width: 100%;
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
        .price{
          font-size: 20px;
          font-weight: 600;
          color: $green;
          .decimals{
            font-size: 14px;
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
  }
}
</style>