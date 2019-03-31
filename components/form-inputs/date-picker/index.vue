<template>
    <div class="datepicker-wrapper">
        <span class="label">{{ label }}</span>
        <input type="text" placeholder="روز" maxlength="2">
        <span>/</span>
        <input type="text" placeholder="ماه" maxlength="2">
        <span>/</span>
        <input type="text" placeholder="سال" maxlength="4">
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
.datepicker-wrapper {
    display: grid;
    align-items: center;
    grid-gap: 0.3rem;
    grid-template-columns: 8.5rem 15% auto 15% auto 1fr;
    .label {
        white-space: nowrap;
    }
    input {
        font-size: 1.4rem;
        width: 100% !important;
        padding: 0;
        text-align: center;
    }
}
</style>
