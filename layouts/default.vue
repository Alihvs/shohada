<template>
    <div class="main-section">
        <the-header class="header"/>
        <nuxt class="content"/>
        <the-footer class="footer"/>
    </div>
</template>

<script>
import TheHeader from "~/components/layouts/header";
import TheFooter from "~/components/layouts/footer";
export default {
    components: {
        TheHeader,
        TheFooter
    }
};
</script>

<style lang="scss" scoped>
html,
body {
    height: 100vh;
    margin: 0;
}

body {
    padding: 0;
}
.main-section {
    height: 100vh;
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


