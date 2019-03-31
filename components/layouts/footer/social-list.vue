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
    max-height: 100%;
    display: flex;
    @include flex-center();
    li {
        border-radius: 50%;
        background-color: $grey-3;
        height: 3rem;
        width: 3rem;
        margin: $m-5;
        @include flex-center();
        img {
            padding: 0.9rem;
        }
    }
}
</style>

