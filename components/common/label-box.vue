<template>
    <div class="label-wrapper">
        <span>{{ title }}</span>
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

.label-wrapper {
    // border: 1px solid red;
    background-color: $black-1;
    height: 3.4rem;
    color: $white-1;
    padding-right: $m-10;
    @include flex-center-vertical();
}
</style>

