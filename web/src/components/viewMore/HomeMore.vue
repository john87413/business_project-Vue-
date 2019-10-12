<template>
  <div class="d-flex jc-center">
    <div class="home-view-more bg-black-3 py-3 d-flex jc-center">
      <a class="fs-md text-orange-4">VIEW MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
//   按鈕父容器
.home-view-more {
  position: relative;
  width: 40rem;
  box-shadow: map-get($colors, "black") 8px 15px 20px 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  // 按鈕連結
  a {
    z-index: 1;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  // 背景動畫裝飾
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #724832;
    transform: scaleX(0);
    transform-origin: right top;
    transition: all 0.2s ease;
  }
  // 觸發狀態
  &:hover {
    box-shadow: none;
    a {
      color: map-get($colors, "black-4");
    }
    &::before {
      transform: scaleX(1);
    }
  }
}
</style>