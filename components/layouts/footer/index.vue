<template>
    <footer class="footer">
        <div class="upper-section">
            <div class="info-section">
                <span>آدرس: تهران - محله دارقاضی - دفتر ستاد یادواره شهدای کن</span>
                <span>تلفن: ۰۲۱ ۴۴۳ ۰ ۴۴۴۸</span>
            </div>
            <social-list/>
        </div>
        <div class="lower-section">
            <h5>کلیه حقوق مادی و معنوی این سایت متعلق به ستاد یادواره شهدای کن می باشد</h5>
        </div>
    </footer>
</template>

<script>
import SocialList from "./social-list";
export default {
    components: {
        SocialList
    }
};
</script>


<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.footer {
    margin-top: $m-10;
    .upper-section {
        display: flex;
        justify-content: space-between;
        .info-section {
            border: 1px solid red;
        }
    }
    .lower-section {
        display: flex;
        justify-content: center;
        background-color: $black-2;
        h5 {
            font-size: 1.5rem;
            color: $white-1;
        }
    }
}
</style>
