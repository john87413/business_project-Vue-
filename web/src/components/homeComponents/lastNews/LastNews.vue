<template>
  <div class="home-news py-10">
    <my-title :content="titleContent"></my-title>
    <my-news :content="newsContent"></my-news>
    <my-more></my-more>
  </div>
</template>

<script>
// component 區
import myTitle from "../../useFul/title/HomeTitle";
import myNews from "./newsContent/News";
import myMore from '../../useFul/viewMore/HomeMore'

// img 區
import news_img_1 from "../../../assets/images/news_img_1.jpg";
import news_img_2 from "../../../assets/images/news_img_2.jpg";
import news_img_3 from "../../../assets/images/news_img_3.jpg";
import news_img_4 from "../../../assets/images/news_img_4.jpg";
export default {
  data() {
    return {
      // 給title的
      titleContent: {
        title: "LATEST NEWS",
        bgColor: "text-orange-4"
      },
      //   給news的
      newsContent: [
        {
          newsImg: news_img_1,
          newsTime: "2019-10-11",
          newsTitle: "【宜蘭店】美食部落客必喝高山鐵觀音"
        },
        {
          newsImg: news_img_2,
          newsTime: "2019-10-11",
          newsTitle: "&ensp;網紅最愛人氣飲品｜新鮮水果茶"
        },
        {
          newsImg: news_img_3,
          newsTime: "2019-09-28",
          newsTitle: "【彰化鹿港店】中台灣首店 9/28 盛大開幕 人潮滿滿滿"
        },
        {
          newsImg: news_img_4,
          newsTime: "2019-09-24",
          newsTitle: "【彰化鹿港店】中台灣首店 米塔黑糖正式登陸鹿港!!"
        }
      ]
    };
  },
  components: {
    "my-title": myTitle,
    "my-news": myNews,
    "my-more": myMore,
  }
};
</script>

<style lang="scss" scoped>
// 父容器
.home-news {
  position: relative;
  //   背景裝飾
  &::before {
    content: "";
    position: absolute;
    top: -15rem;
    width: 100%;
    height: 150%;
    background: url("../../../assets/images/news_bg.png") no-repeat;
    background-position: 0px top;
    background-size: 100% auto;
    z-index: 0;
    // display: block;
    // padding-bottom: 64%;
  }
}
</style>