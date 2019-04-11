<template>
    <main class="main-container">
        <div class="first-row">
            <itembox-b-1
                class="full-width"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-s-1
                class="smallbox-1"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                subtitle="یادواره شهدای کن با حظور سردار سلیمانی"
                title="شامگاه روز پنجشنبه مراسم اولین یادواره شهدا کن با حضور سردار قاسم سلیمانی در حسینیه نور این منطقه از تهران برگزار شد."
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-s-1
                class="smallbox-1"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                subtitle="یادواره شهدای کن با حظور سردار سلیمانی"
                title="شامگاه روز پنجشنبه مراسم اولین یادواره شهدا کن با حضور سردار قاسم سلیمانی در حسینیه نور این منطقه از تهران برگزار شد."
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-s-2
                class="full-width"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
            <itembox-s-2
                class="full-width"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
        </div>
        <div class="second-row">
            <label-box title="پربازدیدترین خبرها"/>
            <div class="news-column">
                <itembox-s-3
                    class="full-width"
                    date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                    subtitle="یادواره شهدای کن برگزار می شود"
                    title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                    :catas="['آخرین اخبار', 'یادواره شهدا']"
                />
                <itembox-s-3
                    class="full-width"
                    date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                    subtitle="یادواره شهدای کن برگزار می شود"
                    title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                    :catas="['آخرین اخبار', 'یادواره شهدا']"
                />
                <itembox-s-3
                    class="full-width"
                    date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                    subtitle="یادواره شهدای کن برگزار می شود"
                    title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                    :catas="['آخرین اخبار', 'یادواره شهدا']"
                />
                <itembox-s-3
                    class="full-width"
                    date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                    subtitle="یادواره شهدای کن برگزار می شود"
                    title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                    :catas="['آخرین اخبار', 'یادواره شهدا']"
                />
                <itembox-s-3
                    class="full-width"
                    date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                    subtitle="یادواره شهدای کن برگزار می شود"
                    title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                    :catas="['آخرین اخبار', 'یادواره شهدا']"
                />
            </div>
            <label-box title="ویديو"/>
            <itembox-video-1
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                title="ارزش های دفاع مقدس با مهندسی فرهنگی تحول آفرین نهادینه می شود"
                :catas="['آخرین اخبار', 'یادواره شهدا']"
            />
        </div>
        <div class="third-row">
            <label-box title="عکس روز"/>
            <itembox-s-1
                class="smallbox-1"
                date="چهارشنبه - ۲ فروردین ۱۳۹۸"
                subtitle="یادواره شهدای کن با حظور سردار سلیمانی"
                title="شامگاه روز پنجشنبه مراسم اولین یادواره شهدا کن با حضور سردار قاسم سلیمانی در حسینیه نور این منطقه از تهران برگزار شد."
                :catas="['عکس روز']"
            />
            <label-box title="معرفی شهدای کن"/>
            <itembox-shohada-1
                :title="shahidDetails.name"
                :details="shahidDetails.details"
                :catas="['عکس روز']"
            />
        </div>
    </main>
</template>

<script>
import ItemboxB1 from "~/components/common/itembox-b-1";
import ItemboxS1 from "~/components/common/itembox-s-1";
import ItemboxS2 from "~/components/common/itembox-s-2";
import ItemboxS3 from "~/components/common/itembox-s-3";
import ItemboxVideo1 from "~/components/common/itembox-video-1";
import ItemboxShohada1 from "~/components/common/itembox-shohada-1";
import LabelBox from "~/components/common/label-box";

export default {
    components: {
        ItemboxB1,
        ItemboxS1,
        ItemboxS2,
        ItemboxS3,
        ItemboxVideo1,
        ItemboxShohada1,
        LabelBox
    },
    data() {
        return {
            shahidDetails: {
                name: "حبیب الله روستایی",
                details: {
                    date: "چهارشنبه - ۲ فروردین ۱۳۹۸",
                    age: "۶۰",
                    location: "فرسیه اهواز",
                    operation: "والفجر مقدماتی",
                    tomb: "کن - مسجد جامع شهدا",
                    yegan: "بسیج",
                    birthDate: "۱۲۹۹-۱-۱",
                    birthPlace: "تهران - کن",
                    nighbourhood: "سرآسیاب",
                    education: "دیپلم",
                    occupation: "باغدار",
                    maritalStatus: "متاهل"
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.main-container {
    background-color: $grey-2;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
    .first-row {
        display: grid;
        grid-gap: $m-10;
        grid-template-columns: 1fr 1fr;
        .full-width {
            grid-column: 1 / -1;
        }
    }
    .second-row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // & > * {
        //     &:not(:last-child) {
        //         margin-bottom: 10px;
        //     }
        // }
    }
    .third-row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > * {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
}

.smallbox-1 {
    height: 30rem;
}
</style>


