<template>
  <div class="home">
    <home-swiper :content="homeSwiperContent"></home-swiper>
    <home-news></home-news>
    <home-drinks></home-drinks>
    <home-about></home-about>
  </div>
</template>

<script>
// components
import homeSwiper from '../components/homeComponents/swiper/HomeSwiper'
import homeNews from '../components/homeComponents/lastNews/LastNews'
import homeDrinks from '../components/homeComponents/drinkIntro/DrinkIntro'
import homeAbout from '../components/homeComponents/about/About'

export default {
  data() {
    return {
      homeSwiperContent:["/home/news","/home/drinks"]
      
    };
  },
  components: {
    'home-swiper': homeSwiper,
    'home-news': homeNews,
    'home-drinks': homeDrinks,
    'home-about': homeAbout,
  }
};
</script>


