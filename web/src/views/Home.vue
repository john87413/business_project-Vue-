<template>
  <div class="home">
    <home-swiper :content="homeSwiperContent"></home-swiper>
    <home-news></home-news>
    <home-drinks></home-drinks>
  </div>
</template>

<script>
// components
import homeSwiper from '../components/swiper/home/HomeSwiper'
import homeNews from '../components/lastNews/home/HomeNews'
import homeDrinks from '../components/drinkIntro/DrinkIntro'

export default {
  data() {
    return {
      homeSwiperContent:["/home/news","/home/drinks"]
      
    };
  },
  components: {
    'home-swiper': homeSwiper,
    'home-news': homeNews,
    'home-drinks': homeDrinks
  }
};
</script>


