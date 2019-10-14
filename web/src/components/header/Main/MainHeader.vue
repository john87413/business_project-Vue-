<template>
  <div class="main-head d-flex flex-column py-3 jc-center bg-black-1 w-100">
    <!-- 網頁 小menu -->
    <div class="small-menu w-100">
      <div class="small-menu-container d-flex jc-around">
        <div class="small-menu-item" v-for="(item, index) in smallContent" :key="index">
          <i class="item-icon iconfont fs-xlxl text-white" :class="`icon-${item.icon}`"></i>
        </div>
      </div>
    </div>
    <div class="head-container d-flex flex-column w-100">
      <!-- 標題 title -->
      <div class="head-title d-flex jc-center py-1">
        <router-link class="title-logo" tag="a" to="/"></router-link>
      </div>
      <!-- 網頁 menu-->
      <div class="head-menu mt-4">
        <ul class="menu-container d-flex jc-center">
          <li class="menu-item mx-4" v-for="(item, index) in bigContent" :key="index">
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
  props: ["bigContent", "smallContent"],
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
  border-bottom: 1px solid map-get($colors, "orange-6");
  .small-menu {
    display: none;
    .small-menu-item{
      .item-icon {
        cursor: pointer;
      }
    }
  }
  // 容器
  .head-container {
    // 品牌標題
    .head-title {
      // 標題本身
      .title-logo {
        width: 25rem;
        height: 2.2rem;
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
@media all and (max-width: 1130px) {
  .main-head {
    position: initial;
    .small-menu {
      position: fixed;
      display: block;
      top: -0.1rem;
      background-color: map-get($colors, "black-5");
      padding: 0.8rem 0 0.8rem 0;
      z-index: 999;
    }
    .head-container {
      padding-top: 3rem;
      // 品牌標題
      .head-title {
        // 標題本身
        .title-logo {
          width: 18rem;
          height: 2rem;
        }
      }
      // 網頁 大menu
      .head-menu {
        display: none;
      }
    }
  }
}
// @media all and (max-width: 1000px) {
//   .main-head {
//     position: initial;
//     padding: 0;
//     background-color: #00000000;
//     .small-menu {
//       position: fixed;
//       display: block;
//       background-color: map-get($colors, "black-1");
//       padding-top: 1rem;
//     }
//     .head-container {
//       .head-title {
//         padding-top: 2.5rem;
//       }
//       .head-menu {
//         display: none;
//       }
//     }
//   }
// }
</style>