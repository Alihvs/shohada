<template>
    <div class="main-section container">
        <the-nav class="header"/>
        <main class="main-wrapper">
            <nuxt class="content"/>
            <the-sidebar/>
        </main>
        <the-footer class="footer"/>
    </div>
</template>

<script>
import TheNav from "~/components/layouts/nav";
import TheFooter from "~/components/layouts/footer";
import TheSidebar from "~/components/layouts/sidebar";
export default {
    components: {
        TheNav,
        TheFooter,
        TheSidebar
    }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
}
</style>


