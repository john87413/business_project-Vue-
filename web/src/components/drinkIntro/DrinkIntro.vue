<template>
  <div class="drink-intro my-6 py-3">
    <my-title :content="titleContent"></my-title>
    <my-img-content :content="imgContent"></my-img-content>
    <my-more></my-more>
  </div>
</template>

<script>
// components
import myTitle from "../title/HomeTitle";
import myImgContent from "./introContent/ImgContent";
import myMore from "../viewMore/HomeMore";

// img
import drinks_intro_1 from "../../assets/images/drinks-intro-1.jpg";
import drinks_intro_2 from "../../assets/images/drinks-intro-2.jpg";
import drinks_intro_3 from "../../assets/images/drinks-intro-3.jpg";
import drinks_intro_4 from "../../assets/images/drinks-intro-4.jpg";
import drinks_intro_5 from "../../assets/images/drinks-intro-5.jpg";
import drinks_intro_6 from "../../assets/images/drinks-intro-6.jpg";

export default {
  data() {
    return {
      // 給title的
      titleContent: {
        title: "DRINK INTRODUCTION",
        bgColor: "text-orange-1"
      },
      imgContent: [
        {
          drinkImgSrc: drinks_intro_1,
          drinkName: "手作黑糖鮮奶"
        },
        {
          drinkImgSrc: drinks_intro_2,
          drinkName: "黑糖特調飲"
        },
        {
          drinkImgSrc: drinks_intro_3,
          drinkName: "茶拿鐵"
        },
        {
          drinkImgSrc: drinks_intro_4,
          drinkName: "極品奶茶"
        },
        {
          drinkImgSrc: drinks_intro_5,
          drinkName: "手作茶飲"
        },
        {
          drinkImgSrc: drinks_intro_6,
          drinkName: "多多輕飲"
        },
      ]
    };
  },
  components: {
    "my-title": myTitle,
    "my-img-content": myImgContent,
    "my-more": myMore
  }
};
</script>

<style lang="scss" scoped>
</style>