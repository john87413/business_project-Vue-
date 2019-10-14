<template>
    <div class="footer-bottom d-flex flex-column jc-center ai-center pt-6">
        <div class="content-top d-flex jc-center ai-center py-4">
            <my-footer-menu :content="footerMenuContent"></my-footer-menu>
            <my-footer-intro :content="footerIntroContent"></my-footer-intro>
            <my-footer-contact :content="footerContactContent"></my-footer-contact>
        </div>
        <div class="content-bottom">
            <my-footer-right></my-footer-right>
        </div>

    </div>
</template>

<script>
// components
import myFooterMenu from './bottomContent/FooterMenu'
import myFooterIntro from './bottomContent/FooterIntro'
import myFooterContact from './bottomContent/FooterContact'
import myFooterRight from './bottomContent/FooterRight'

// images
import footer_contact_code from '../../../../../assets/images/footer_contact_code.jpg'

export default {
    data() {
        return {
            footerMenuContent:[
                {title: "品牌介紹"},
                {title: "回到首頁"},
                {title: "免責聲明"},
                {title: "最新訊息"},
                {title: "聯絡我們"},
                {title: "使用條款"},
                {title: "飲品介紹"},
                {title: "門市資訊"},
                {title: "隱私權政策"},
            ],
            footerIntroContent:{
                title:"Customer Service Phone",
                phone:"0800 – 225678",
                address:"10561 台北市松山區東興路16號B1",
                mail:"mitabakery@gmail.com"
            },
            footerContactContent:{
                contactCommunity:[
                    {icon:"ios-morse-facebook"},
                    {icon:"twiiterico"},
                    {icon:"Google"},
                    {icon:"IG"},
                ],
                contactCode:footer_contact_code
            }
        }
    },
    components: {
        'my-footer-menu': myFooterMenu,
        'my-footer-intro': myFooterIntro,
        'my-footer-contact': myFooterContact,
        'my-footer-right': myFooterRight,
    }
}
</script>

<style lang="scss" scoped>
.footer-bottom{
    background: url(../../../../../assets/images/footer_bg.jpg) no-repeat;
}
</style>