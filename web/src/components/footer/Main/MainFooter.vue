<template>
    <div class="main-foot">
        <my-footer-top :content="footerTopContent"></my-footer-top>
        <my-footer-bottom></my-footer-bottom>
    </div>
</template>

<script>
// components
import myFooterTop from './footerContent/footerTop/FooterTop'
import myFooterBottom from './footerContent/footerBottom/FooterBottom'

export default {
    data() {
        return {
            footerTopContent:[
                {title: "手作黑糖鮮奶"},
                {title: "茶拿鐵"},
                {title: "手作茶飲"},
                {title: "黑糖特調飲"},
                {title: "極品奶茶"},
                {title: "多多輕飲"},
            ]
        }
    },
    components: {
        'my-footer-top': myFooterTop,
        'my-footer-bottom': myFooterBottom
    }
}
</script>

<style lang="scss" scoped>

</style>