<template>
    <ul class="social-links-wrapper">
        <li>
            <img src="/svg/telegram.svg" alt="telegram">
        </li>
        <li>
            <img src="/svg/instagram.svg" alt="instagram">
        </li>
        <li>
            <img src="/svg/google.svg" alt="google">
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: "facebook",
                    url: "facebook.com"
                },
                {
                    name: "instagram",
                    url: "instagram.com"
                },
                {
                    name: "Googleplus",
                    url: "facebook.com"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.social-links-wrapper {
    border: 1px solid red;
    max-height: 100%;
    display: flex;
    @include flex-center();
    li {
        img {
            border: 1px solid red;
            height: 3rem;
            width: 3rem;
        }
    }
}
</style>

