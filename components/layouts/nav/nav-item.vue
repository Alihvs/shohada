<template>
    <li class="item-wrapper">
        <nuxt-link :to="`/${page}`">{{ label }}</nuxt-link>
    </li>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        page: {
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
    font-weight: 200;
    width: 11rem;
    @include flex-center();
    &:not(:last-child) {
        border-left: 1px solid $grey-2;
    }
    a {
        color: $black-1;
        text-decoration: none;
    }

    .nuxt-link-exact-active {
        color: $red-1;
    }
}
</style>

