<template>
  <div class="footer-intro px-4">
    <div class="intro-container d-flex flex-column ai-center px-4">
      <div class="intro-title text-grey fs-s">{{content.title}}</div>
      <div class="intro-content d-flex flex-column ai-center text-white my-3">
        <p class="intro-phone fs-s">{{content.phone}}</p>
        <p class="intro-address fs-xlx">{{content.address}}</p>
        <p class="intro-mail fs-xs">{{content.mail}}</p>
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
.footer-intro {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 0.5%;
    height: 60%;
    left: 0;
    top: 20%;
    background: black;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0.5%;
    height: 60%;
    right: 0;
    top: 20%;
    background: black;
  }
  .intro-container {
    .intro-content {
      line-height: 2rem;
      letter-spacing: 0.1333rem;
    }
  }
}
</style>