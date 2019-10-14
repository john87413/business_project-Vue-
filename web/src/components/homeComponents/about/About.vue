<template>
  <div class="home-about py-9">
    <my-title :content="titleContent"></my-title>
    <my-about-content :content="aboutContent"></my-about-content>
  </div>
</template>

<script>
// components
import myTitle from "../../useFul/title/HomeTitle";
import myAboutContent from "./aboutContent/aboutContent";

export default {
  data() {
    return {
      // 給title的
      titleContent: {
        title: "ABOUT",
        bgColor: "text-orange-4"
      },
      // 給content的
      aboutContent: {
        introText:
          "「全球最好喝的黑糖珍珠鮮奶！」<br>是30年時光，由數百位夥伴，手搖出億萬杯飲品的經驗研發而來<br>嚴選台灣東山黑糖與光泉牧場鮮乳及職人手作珍珠<br>一杯看似簡單卻不簡單的黑糖飲品<br>從米塔用「心」開始"
      }
    };
  },
  components: {
    "my-title": myTitle,
    "my-about-content": myAboutContent
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_variables.scss';
.home-about {
  position: relative;
  &::before {
    content: "";
    background: url(../../../assets/images/about_bg.jpg) no-repeat;
    width: 100%;
    position: absolute;
    top: -54%;
    padding-bottom: 41%;
    background-size: 100% auto;
    z-index: -1;
  }
  &::after {
    content: "";
    background: map-get($colors, "black-1" );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    // padding-bottom: 41%;
    background-size: 100% auto;
    z-index: -2;
  }
}
</style>