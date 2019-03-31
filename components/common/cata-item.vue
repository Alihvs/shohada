<template>
    <div class="cata-item-wrapper">
        <span class="cata-item">{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.cata-item-wrapper {
    background-color: $black-2;
    min-width: 6rem;
    max-width: 8rem;
    padding: 0.1rem 0.5rem;
    margin: 0;
    font-size: 0.8rem;
    font-weight: 100;
    &:not(:last-child) {
        margin-left: 0.5rem;
    }
    @include flex-center();
    .cata-item {
    }
}
</style>


