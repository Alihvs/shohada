<template>
    <div class="video-page-wrapper">
        <div class="results-grid">
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
        </div>
        <pagination/>
    </div>
</template>

<script>
import ItemboxVideo1 from "~/components/common/itembox-video-1";
import Pagination from "~/components/pagination";

export default {
    components: {
        ItemboxVideo1,
        Pagination
    },
    layout: "news-column"
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.video-page-wrapper {
    .results-grid {
        margin-bottom: $m-10;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: $m-10;
        & > * {
            height: 26.3rem !important;
        }
    }
}
</style>

