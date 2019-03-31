<template>
    <main class="shohada-wrapper">
        <search-comp/>
        <div class="results">
            <div class="results-grid">
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
                <itembox-s-5 title="علی روستایی"/>
            </div>
            <pagination/>
        </div>
    </main>
</template>

<script>
import SearchComp from "~/components/search";
import Pagination from "~/components/pagination";
import ItemboxS5 from "~/components/common/itembox-s-5";

export default {
    components: {
        SearchComp,
        Pagination,
        ItemboxS5
    },
    layout: "news-column"
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.shohada-wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 29rem 1fr;
    .results {
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: 1fr 3.4rem;
        .results-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: $m-10;
        }
    }
}
</style>

