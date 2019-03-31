<template>
    <div class="main-section container">
        <the-nav class="header"/>
        <nuxt class="content"/>
        <the-footer class="footer"/>
    </div>
</template>

<script>
import TheNav from "~/components/layouts/nav";
import TheFooter from "~/components/layouts/footer";
export default {
    components: {
        TheNav,
        TheFooter
    }
};
</script>

<style lang="scss" scoped>
</style>


