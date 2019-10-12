<template>
  <div class="main-head d-flex py-3 jc-center bg-black-1 w-100">
    <div class="head-container d-flex flex-column">
      <!-- 標題 title -->
      <div class="head-title d-flex jc-center py-3">
        <router-link class="title-logo" tag="a" to="/"></router-link>
      </div>
      <!-- 網頁 menu-->
      <div class="head-menu mt-4">
        <ul class="menu-container d-flex">
          <li class="menu-item mx-4" v-for="(item, index) in content" :key="index">
            <router-link class="fs-lg" tag="a" :to="item.url">
              {{item.titleCh}}
              <span class="text-orange-4 fs-s ml-2">{{item.titleEn}}</span>
            </router-link>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";
// header 父容器
.main-head {
  z-index: 2;
  position: fixed;
  border-bottom: 1px solid map-get($colors, "orange-6" );
  // 容器
  .head-container {
    // 品牌標題
    .head-title {
      // 標題本身
      .title-logo {
        width: 25rem;
        height: 2.6rem;
        background: url("../../../assets/images/logo.svg") 50% 50% / contain
          no-repeat;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  // 網頁menu 
  .head-menu {
    // menu 容器
    .menu-container {
      // menu item 本身
      .menu-item {
        a {
          text-decoration: none;
          transition: all 0.3s ease;
        }
        span {
          transition: all 0.3s ease;
        }
        &:hover {
          a {
            color: map-get($colors, "orange-2");
          }
          span {
            color: map-get($colors, "orange-1");
          }
        }
      }
    }
  }
}
</style>