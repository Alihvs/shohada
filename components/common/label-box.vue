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
    font-weight: 200;
    font-size: 1.6rem;
    background-color: $black-1;
    height: 3.4rem;
    color: $white-1;
    padding-right: $m-10;
    @include flex-center-vertical();
}
</style>

