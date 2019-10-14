<template>
  <div class="footer-menu mr-5">
    <div class="menu-container">
      <ul class="menu-content d-flex fl-wrap">
        <li class="menu-item my-2" v-for="(item, index) in content" :key="index">
          <a class="fs-s text-grey">{{item.title}}</a>
        </li>
      </ul>
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
.menu-container {
  width: 20rem;
  .menu-content {
    .menu-item {
      width: 33%;
      a {
        letter-spacing: 2px;
        transition: all 0.3s ease;
      }
      &:hover {
        a {
          color: white;
        }
      }
    }
  }
}
@media all and (max-width: 1130px) {
  .menu-container {
    width: 12rem;
    .menu-content {
      .menu-item {
        width: 50%;
      }
    }
  }
}
</style>