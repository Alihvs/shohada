<template>
    <button class="button-wrapper" :style="`background-color: ${color};`">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "red"
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.button-wrapper {
    height: 3.4rem;
    font-size: 1.6rem;
    font-weight: 300;
    color: $white-1;
    min-width: 100%;
    border: none;
    outline: none;
}
</style>
