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
.main-section {
    min-height: 100vh;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    .header {
        flex-grow: 0;
    }
    .footer {
        flex-grow: 0;
    }
    .content {
        flex-grow: 1;
    }
}
</style>


