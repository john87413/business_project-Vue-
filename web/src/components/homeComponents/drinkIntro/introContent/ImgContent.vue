<template>
  <div class="drink-img-content py-5">
    <div class="img-container d-flex jc-center py-5">
      <div class="img-intro d-flex jc-center fl-wrap">
        <!-- 飲品介紹 -->
        <div
          class="intro-content d-flex flex-column m-1"
          v-for="(item, index) in content"
          :key="index"
        >
          <!-- 圖片連結 -->
          <a class="content-img">
            <img :src="item.drinkImgSrc" />
          </a>
          <!-- 底下介紹文字 -->
          <div class="content-name d-flex jc-center ai-center">
            <a class="name d-flex ai-center fs-xxl">{{item.drinkName}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/_variables.scss";
.img-container {
  .img-intro {
    .intro-content {
      position: relative;
      overflow: hidden;
      .content-img {
        font-size: 0; //這個可以去調 <a> 底部多出的一塊
        &::before {
          content: "";
          border: solid 1px map-get($colors, "orange-4");
          position: absolute;
          top: 10px;
          left: 10px;
          bottom: 10px;
          right: 10px;
          transition: all 0.3s ease;
          z-index: 1;
        }
        img {
          position: relative;
          max-width: 100%;
          height: auto !important;
          top: 0;
          transition: all 0.3s ease;
        }
      }
      .content-name {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 4.3333rem;
        color: #ffffff;
        left: 0;
        right: 0;
        background: linear-gradient(
          to right,
          map-get($colors, "orange-4") 0%,
          map-get($colors, "orange-2") 100%
        );
        transform: scaleY(0);
        transform-origin: bottom;
        transition: all 0.3s ease;
        .name {
          opacity: 0;
          transition: all 0.3s ease;
        }
      }
      &:hover {
        .content-img {
          img {
            top: -55px;
          }
          &::before {
            bottom: 5.0667rem;
          }
        }
        .content-name {
          transform: scaleY(1);
          .name {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media all and (max-width: 1500px) {
  .img-container {
    .img-intro {
      .intro-content {
        width: 32%;
      }
    }
  }
}
</style>