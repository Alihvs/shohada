<template>
    <textarea class="text-area" name id cols="30" rows="10" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
    props: {
        type: String,
        default: ""
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.text-area {
    border: none;
    outline: none;
    background-color: $grey-2;
    padding: $m-10;
    &::placeholder {
        color: $grey-3;
    }
}
</style>

