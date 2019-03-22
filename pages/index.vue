<template>
    <main class="main-container">
        <item-box
            :type="1"
            date="چهارشنبه - ۲ فروردین ۱۳۹۸"
            title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
            :catas="['آخرین اخبار', 'یادواره شهدا']"
        />
    </main>
</template>

<script>
import ItemBox from "~/components/common/item-box";
export default {
    components: {
        ItemBox
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    background-color: grey;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-items: stretch;
    align-items: stretch;
}
</style>


