<template>
    <div class="search-wrapper">
        <input class="search-input" type="text" v-model="search" placeholder="جستجو">
        <img src="/svg/search.svg" alt="search icon">
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        };
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.search-wrapper {
    height: 100%;
    margin-left: 2rem;
    @include flex-center-vertical();
    .search-input {
        border: none;
        font-size: 1.6rem;
        font-weight: 300;
        position: relative;
        min-height: 0.3rem;
        &::placeholder {
            color: $grey-3;
        }
    }
}
</style>

