<template>
  <div class="home-news-content d-flex flex-column ai-center">
    <!-- 新聞容器 -->
    <div class="news-container d-flex jc-center fl-wrap my-5">
      <!-- 每一格新聞 -->
      <div class="news-content d-flex mx-3 my-6" v-for="(item, index) in content" :key="index">
        <!-- 新聞圖片 -->
        <div class="content-img">
          <figure class="img-figure p-2">
            <a class :title="item.newsTitle">
              <img class :src="item.newsImg" />
            </a>
          </figure>
        </div>
        <!-- 新聞介紹 -->
        <div class="content-intro d-flex flex-column my-3 mx-5">
          <!-- 介紹時間 -->
          <div class="intro-time">
            <a class="fs-xs text-orange-1" :title="item.newsTitle">{{item.newsTime}}</a>
          </div>
          <!-- 介紹內容 -->
          <div class="intro-content mt-3 fs-xl text-white">
            <a :title="item.newsTitle" v-html="item.newsTitle"></a>
          </div>
        </div>
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
@import "../../../../assets/scss/_variables.scss";
// 父容器
.home-news-content {
  // 新聞子容器
  .news-container {
    width: 75rem;
    // 每個news 的容器
    .news-content {
      width: 47%;
      z-index: 1; // 避免他在背景下方
      cursor: pointer;
      //   news 圖片容器
      .content-img {
        //   圖片
        .img-figure {
          position: relative;
          border: solid 1px map-get($colors, "grey-2");
          //   左上角裝飾
          &::before {
            content: "";
            display: block;
            position: absolute;
            width: 0.8667rem;
            height: 0.8667rem;
            top: 0;
            left: 0;
            border: solid #e58843;
            border-width: 0.0667rem 0 0 0.0667rem;
            z-index: 2;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          //   右下角裝飾
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 0.8667rem;
            height: 0.8667rem;
            bottom: 0;
            right: 0;
            border: solid #e58843;
            border-width: 0 0.0667rem 0.0667rem 0;
            z-index: 2;
            pointer-events: none;
            transition: all 0.3s ease;
          }
        }
        // 連結
        a {
          cursor: pointer;
        }
      }
      //   news 介紹
      .content-intro {
        min-width: 65%; // 這個才會讓所有容器都一樣大小
        // news time
        .intro-time {
          position: relative;
          //   左邊線條
          &::before {
            content: "";
            width: 0;
            margin-right: 0.5rem;
            height: 1px;
            background: #e58843;
            vertical-align: middle;
            display: inline-block;
            transition: all 0.5s ease;
          }
          //   右邊線條
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            left: 5.5rem;
            width: auto;
            height: 1px;
            background: #595959;
            display: inline-block;
            transition: all 0.5s ease;
          }
          a {
            cursor: pointer;
          }
        }
        // news 內容介紹
        .intro-content {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
        }
      }
      //   整個news 觸發狀態
      &:hover {
        .content-img {
          //   圖片
          .img-figure {
            //   左上角裝飾
            &::before {
              width: 100%;
              height: 100%;
            }
            //   右下角裝飾
            &::after {
              width: 100%;
              height: 100%;
            }
          }
        }
        //   news 介紹
        .content-intro {
          // news time
          .intro-time {
            &::before {
              width: 3rem;
            }
            &::after {
              right: 100%;
            }
          }
        }
      }
    }
  }
}
</style>