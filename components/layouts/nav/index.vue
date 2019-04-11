<template>
    <nav class="nav-wrapper">
        <ul class="nav-list">
            <nav-item
                v-for="(item, index) in links"
                :key="index"
                :label="item.label"
                :page="item.page"
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
                    page: "",
                    label: "صفحه اصلی"
                },
                {
                    page: "news",
                    label: "آخرین اخبار"
                },
                {
                    page: "video-news",
                    label: "خبرهای تصویری"
                },
                {
                    page: "photo",
                    label: "عکس روز"
                },
                {
                    page: "video",
                    label: "ویديو"
                },
                {
                    page: "shohada",
                    label: "گنجینه شهدا"
                },
                {
                    page: "contact",
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
    height: 5rem;
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


