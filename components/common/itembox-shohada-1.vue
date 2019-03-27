<template>
    <nuxt-link to="#" class="item-box-wrapper" v-lazy:background-image="image">
        <div class="top-section">
            <div class="cata-wrapper">
                <cata-item title="آخرین اخبار"/>
                <cata-item title="آخرین اخبار"/>
            </div>
        </div>
        <div class="bottom-section">
            <div class="title-wrapper">
                <h5 class="title" v-html="addShahid(title)"></h5>
                <!-- <span class="details">{{ details }}</span> -->
                <ul class="details">
                    <li>
                        <span>تاریخ شهادت:</span>
                        <span>{{ details.date }}</span>
                    </li>
                    <li>
                        <span>سن شهادت:</span>
                        <span>{{ details.age }}</span>
                    </li>
                    <li>
                        <span>محل شهادت:</span>
                        <span>{{ details.location }}</span>
                    </li>
                    <li>
                        <span>نام عملیات:</span>
                        <span>{{ details.operation }}</span>
                    </li>
                    <li>
                        <span>مزار:</span>
                        <span>{{ details.tomb }}</span>
                    </li>
                    <li>
                        <span>یگان خدمتی:</span>
                        <span>{{ details.yegan }}</span>
                    </li>
                    <li>
                        <span>تاریخ تولد:</span>
                        <span>{{ details.birthDate }}</span>
                    </li>
                    <li>
                        <span>تاریخ تولد:</span>
                        <span>{{ details.birthPlace }}</span>
                    </li>
                    <li>
                        <span>نام محله:</span>
                        <span>{{ details.nighbourhood }}</span>
                    </li>
                    <li>
                        <span>تحصیلات:</span>
                        <span>{{ details.education }}</span>
                    </li>
                    <li>
                        <span>شغل:</span>
                        <span>{{ details.occupation }}</span>
                    </li>
                    <li>
                        <span>وضعیت تأهل:</span>
                        <span>{{ details.maritalStatus }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import CataItem from "~/components/common/cata-item";
export default {
    components: {
        CataItem
    },
    props: {
        catas: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: ""
        },
        details: {
            type: Object,
            default: () => {}
        },
        image: {
            type: String,
            default: ""
        }
    },
    methods: {
        addShahid(name) {
            return `<span class="shahid">شهید </span>${name}`;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.item-box-wrapper {
    height: 30rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    flex-grow: 1;
    .top-section {
        color: $white-1;
        background-color: $black-1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        flex-basis: 30%;
        .cata-wrapper {
            display: flex;
            margin: $m-10;
        }
    }
    .bottom-section {
        color: $black-2;
        background-color: $white-1;
        flex-basis: 70%;
        .title-wrapper {
            padding: $m-10;
            .title {
                font-size: 1.6rem;
                font-weight: 400;
                color: $black-2;
                margin: $m-5 0 $m-10 0;
            }
            .details {
                font-size: 1.4rem;
                font-weight: 300;
                & > * {
                    margin: 0.2rem;
                }
            }
        }
    }
}
</style>
