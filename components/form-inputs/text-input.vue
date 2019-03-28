<template>
    <input type="text" class="text-input" :placeholder="placeholder">
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.text-input {
    border: none;
    outline: none;
    background-color: $grey-2;
    height: 3rem;
    @include flex-center-vertical();
    padding-right: $m-10;
    &::placeholder {
        color: $grey-3;
    }
}
</style>
