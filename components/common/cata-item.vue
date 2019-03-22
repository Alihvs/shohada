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
    padding: 0.1rem 0.5rem;
    margin: 0.3rem;
    font-size: 1rem;
    .cata-item {
    }
}
</style>


