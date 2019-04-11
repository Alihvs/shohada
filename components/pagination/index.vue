<template>
    <div class="pagination-wrapper">
        <item label="<"/>
        <item label="۱" active/>
        <item label="۲"/>
        <item label="۳"/>
        <item label="۴"/>
        <item label="۵"/>
        <item label=">"/>
    </div>
</template>

<script>
import Item from "./pagination-item";
export default {
    components: {
        Item
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.pagination-wrapper {
    height: 3.4rem;
    display: grid;
    justify-content: center;
    grid-gap: $m-10;
    grid-template-columns: 3.4rem 3.4rem 3.4rem 3.4rem 3.4rem 3.4rem 3.4rem;
}
</style>
