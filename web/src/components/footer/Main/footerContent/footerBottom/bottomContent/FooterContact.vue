<template>
  <div class="footer-contact mx-5">
    <div class="contact-container d-flex jc-center ai-center">
      <!-- 四個按鈕 -->
      <div class="contact-community">
        <ul class="community-container d-flex fl-wrap jc-center ai-center">
          <li
            class="community-item m-2"
            v-for="(item, index) in content.contactCommunity"
            :key="index"
          >
            <button class="item-button bg-white d-flex jc-center ai-center">
              <i class="item-icon iconfont fs-xl" :class="`icon-${item.icon}`"></i>
            </button>
          </li>
        </ul>
      </div>
      <!-- QR code -->
      <div class="contact-code ml-3">
        <img :src="content.contactCode" />
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
.footer-contact {
  .contact-container {
    .contact-community {
      .community-container {
        width: 10rem;
        height: 7.5rem;
        .community-item {
          width: 27%;
          height: 35%;
          border-radius: 50%;
          .item-button {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transition: all 0.2s ease;
            cursor: pointer;
            transition: all 0.2s ease;
            .item-icon {
              transition: all 0.2s ease;
            }
          }
          &:hover {
            .item-button {
              .item-icon {
                color: white;
              }
            }
          }
          &:nth-child(1) {
            &:hover {
              .item-button {
                background: #48529a;
              }
            }
          }
          &:nth-child(2) {
            &:hover {
              .item-button {
                background: #4ec3fe;
              }
            }
          }
          &:nth-child(3) {
            &:hover {
              .item-button {
                background: #dc472e;
              }
            }
          }
          &:nth-child(4) {
            &:hover {
              background: linear-gradient(145deg, #3051f1 10%, #c92bb7 70%);
              .item-button {
                background: radial-gradient(
                  circle farthest-corner at 28% 100%,
                  #fcdf8f 0%,
                  #fbd377 10%,
                  #fa8e37 22%,
                  #f73344 35%,
                  rgba(247, 51, 68, 0) 65%
                );
              }
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 1130px) {
  .footer-contact {
    .contact-container {
      .contact-community {
        .community-container {
          width: 8rem;
          height: 6rem;
        }
      }
    }
  }
}
@media all and (max-width: 1000px) {
  .footer-contact {
    .contact-container {
      .contact-community {
        display: none;
      }
      .contact-code{
        margin: 0;
      }
    }
  }
}
</style>