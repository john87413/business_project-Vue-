<template>
    <div class="home-about-content">
        <div class="about-container d-flex flex-column ai-center">
            <!-- 圖片區 -->
            <div class="about-img">
                <img src="../../../../assets/images/about_title.png">
            </div>
            <!-- 介紹區 -->
            <div class="about-intro my-7 d-flex jc-center text-center text-white" v-html="content.introText">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['content'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.about-container{
    .about-intro{
        line-height: 2rem;
        letter-spacing: 0.1333rem;
    }
}
</style>