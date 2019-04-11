<template>
    <nuxt-link to="#" class="item-wrapper" :class="{ active: active }">{{ label }}</nuxt-link>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        active: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.item-wrapper {
    @include flex-center();
    border: 1px solid $grey-2;
    background-color: $white-1;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 0.5rem;
    color: $black-1;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 200;
    transition: border-color 50ms linear;
    &.active {
        background-color: $black-1;
        color: $white-1;
    }
    &:hover {
        border: 1px solid $black-1;
    }
}
</style>
