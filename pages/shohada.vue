<template>
    <main class="shohada-wrapper">
        <search-comp/>
        <div class="results-grid">results</div>
    </main>
</template>

<script>
import SearchComp from "~/components/search";
export default {
    components: {
        SearchComp
    },
    layout: "news-column"
};
</script>

<style lang="scss" scoped>
.shohada-wrapper {
    // border: 1px solid red;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 29rem 1fr;
    .results-grid {
        border: 1px solid red;
    }
}
</style>

