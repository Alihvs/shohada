<template>
    <nav class="nav-wrapper">
        <ul class="nav-list">
            <nav-item
                v-for="(item, index) in links"
                :key="index"
                :label="item.label"
                :component="item.component"
            />
        </ul>
        <search-component/>
    </nav>
</template>

<script>
import NavItem from "./nav-item";
import SearchComponent from "./search-component";
export default {
    components: {
        NavItem,
        SearchComponent
    },
    data() {
        return {
            links: [
                {
                    component: "home",
                    label: "صفحه اصلی"
                },
                {
                    component: "news",
                    label: "آخرین اخبار"
                },
                {
                    component: "video-news",
                    label: "خبرهای تصویری"
                },
                {
                    component: "daily-photo",
                    label: "عکس روز"
                },
                {
                    component: "video",
                    label: "ویديو"
                },
                {
                    component: "shohada",
                    label: "گنجینه شهدا"
                },
                {
                    component: "contact-us",
                    label: "ارتباط با ما"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.nav-wrapper {
    height: 30px;
    font-size: 1rem;
    background-color: $white-1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $m-10;
    .nav-list {
        display: flex;
        height: 100%;
        display: flex;
        align-items: center;
    }
}
</style>


