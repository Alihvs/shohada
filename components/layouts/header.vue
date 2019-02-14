<template>
   <header class="header">
       <span>
            دوشنبه - 8 خرداد ماه 1399 - 4 رمضان 1414 هجری قمری
       </span>
       <button class="button-simple lang-button">نسخه فارسی</button>
   </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars.scss";
.header {
    height: 30px;
    font-size: 1rem;
    background-color: $primary-purple;
    color: $primary-white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .lang-button {
        background-color: $primary-green;
        height: 100%;
    }
}
</style>


