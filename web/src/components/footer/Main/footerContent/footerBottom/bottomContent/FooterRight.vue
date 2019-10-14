<template>
  <div class="footer-right py-8">
    <p class="text-grey-4 fs-xs">Copyright © 米塔黑糖飲品專賣 All Rights Reserved. 網頁設計 : 新視野</p>
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
.footer-right {
  p {
    letter-spacing: 1.5px;
  }
}
@media all and (max-width: 1000px) {
  .footer-right {
    padding: 0 0 1.5rem 0;
  }
}
</style>