<template>
    <li class="item-wrapper">{{ label }}</li>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        component: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.item-wrapper {
    font-size: 1.5rem;
    color: $black-1;
    width: 11rem;
    @include flex-center();
    &:not(:last-child) {
        border-left: 1px solid $grey-2;
    }
}
</style>

