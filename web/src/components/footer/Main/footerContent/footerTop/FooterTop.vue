<template>
  <div class="footer-top bg-black-1 py-5">
    <div class="footer-drinks-container">
      <ul class="drinks-content d-flex jc-center">
        <li class="drinks-item-container" v-for="(item, index) in content" :key="index">
          <div class="drinks-item d-flex">
            <a class="text-grey-3 fs-lgs">{{item.title}}</a>
            <div class="bg-white px-0-5 mx-2" :class="{'div-gone': index === goneDiv}"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      goneDiv: 5,
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../../assets/scss/_variables.scss';
.footer-drinks-container{
  .drinks-content{
    .drinks-item-container{
      cursor: auto;
      .drinks-item{
        a{
          cursor: pointer;
          letter-spacing: 0.2667rem;
          transition: all .3s ease;
        }
        &:hover{
          a{
            color: map-get($colors, "orange-2" );  
          }
        }
      }
    }
  }
}
.div-gone{
  display: none;
}
</style>