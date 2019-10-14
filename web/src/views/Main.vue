<template>
  <div class="main">
    <main-header :bigContent="headBigContent" :smallContent="headSmallContent"></main-header>
    <router-view class="main-view"></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from "../components/header/Main/MainHeader";
import mainFooter from "../components/footer/Main/MainFooter";

export default {
  data() {
    return {
      headBigContent: [
        {
          titleCh: "品牌介紹",
          titleEn: "/ BRAND",
          url: "/home/brand"
        },
        {
          titleCh: "最新訊息",
          titleEn: "/ NEWS",
          url: "/home/news"
        },
        {
          titleCh: "飲品介紹",
          titleEn: "/ DRINKS",
          url: "/home/drinks"
        },
        {
          titleCh: "門市資訊",
          titleEn: "/ STORE",
          url: "/home/store"
        },
        {
          titleCh: "聯絡我們",
          titleEn: "/ CONTACT",
          url: "/home/contact"
        },
        {
          titleCh: "創業專區",
          titleEn: "/ JOIN",
          url: "/home/join"
        }
      ],
      headSmallContent: [
        { icon: "menu" },
        { icon: "mailenvelopeletteremailnewsletter" },
        { icon: "xuanzhongshangcheng" }
      ]
    };
  },
  components: {
    "main-header": mainHeader,
    "main-footer": mainFooter
  }
};
</script>

<style lang="scss" scoped>
.main-view {
  padding-top: 7.9rem;
}
@media all and (max-width: 1130px) {
  .main-view {
    padding-top: 0;
  }
}
</style>