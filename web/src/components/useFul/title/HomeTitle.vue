<template>
    <div class="home-title d-flex jc-center">
        <div class="title-container">
            <p class="fs-xxxl" :class="content.bgColor">{{content.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.title-container{
    z-index: 1; // 避免他再背景下方
    p{
        letter-spacing: 0.4rem;
    }
}
</style>