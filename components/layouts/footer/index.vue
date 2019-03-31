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
            <span>کلیه حقوق مادی و معنوی این سایت متعلق به ستاد یادواره شهدای کن می باشد</span>
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
    font-size: 1.2rem;
    font-weight: 300;
    .upper-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 $m-10;
        background-color: $grey-2;
        height: 4rem;
        .info-section {
            font-size: 1.2rem;
            & > * {
                &:not(:last-child) {
                    margin-left: 5rem;
                }
            }
        }
    }
    .lower-section {
        display: flex;
        justify-content: center;
        background-color: $black-2;
        min-height: 5rem;
        padding-top: $m-5;
        span {
            font-size: inherit;
            color: $white-1;
        }
    }
}
</style>
