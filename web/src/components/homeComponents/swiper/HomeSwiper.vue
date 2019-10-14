<template>
  <div class="home-swiper bg-black-2">
    <div class="swiper-container d-flex flex-column ai-center">
      <!-- 輪播圖 -->
      <swiper ref="adSwiper" class="home-swiper-container d-flex" :options="swiperOption">
        <swiper-slide
          class="home-swiper-item d-flex jc-center"
          v-for="(item, index) in content"
          :key="index"
        >
          <router-link class="title-logo" tag="a" :to="item"></router-link>
        </swiper-slide>
        <!-- <div class="swiper-pagination swiper-pagination-white pagination-home" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev ml-5" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next mr-5" slot="button-next"></div> -->
      </swiper>
      <!-- menu item -->
      <div class="swiper-button pt-4">
        <ul class="button-ul-container d-flex jc-center">
          <li class="button-li-item mx-2" v-for="(item, index) in 2" :key="index">
            <button
              class="button-item bg-grey-1"
              :class="{'button-choosed': active === index}"
              @click="slideSwiper(index)"
            ></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      active: 0, // 用來操控button 被選中
      swiperOption: {
        spaceBetween: 0,
        effect: "fade", // 漸變效果
        autoplay: true, // 自動播放
        on: {
          // 操控menu 的active
          slideChange: () => {
            let swiper = this.$refs.adSwiper.swiper;
            this.active = swiper.activeIndex;
          }
        }
        // pagination: {
        //   el: ".pagination-home",
        //   clickable: true
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
      }
    };
  },
  methods: {
    // menu 操控輪播圖漸變
    slideSwiper(index) {
      this.active = index;
      this.$refs.adSwiper.swiper.slideTo(index);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";
.swiper-container {
  // 輪播圖容器
  .home-swiper-container {
    width: 95rem;
    // 輪播圖片
    .home-swiper-item {
      height: 47rem;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      &:nth-child(1) {
        background-image: url("../../../assets/images/swiper-1.jpg");
        background-size: cover;
      }
      &:nth-child(2) {
        background-image: url("../../../assets/images/swiper-2.jpg");
        background-size: cover;
      }
      // 輪播圖要去的連結
      a {
        width: 78%;
        height: 100%;
      }
    }
  }
  // menu 父容器
  .swiper-button {
    border-top: solid 1px map-get($colors, "orange-3");
    width: 90rem;
    // ul 容器
    .button-ul-container {
      // li 容器
      .button-li-item {
        // 按鈕本身
        .button-item {
          position: relative;
          width: 0.5333rem;
          height: 0.5333rem;
          cursor: pointer;
          transition: all 0.2s ease;
          // 碰觸效果
          &:hover {
            background-color: map-get($colors, "orange-3");
          }
          // 長線條效果
          &::before {
            content: "";
            background: #bd784f;
            height: 0;
            bottom: 100%;
            position: absolute;
            left: 50%;
            width: 0.0667rem;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
}
// active後 的button
.button-choosed {
  background-color: map-get($colors, "orange-3");
  &::before {
    height: 1.8667rem !important;
  }
}
@media all and (max-width: 1500px) {
  .swiper-container {
    .home-swiper-container {
      width: 100vw;
      .home-swiper-item {
        height: 50vw;
      }
    }
    .swiper-button {
      width: 100vw;
    }
  }
}
</style>
