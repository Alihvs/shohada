<template>
    <nuxt-link to="#" class="item-box-wrapper">
        <div class="left-section">
            <div class="title-wrapper">
                <h5 class="subtitle">{{ subtitle }}</h5>
                <span class="title">{{ title }}</span>
            </div>
            <div class="cata-date-wrapper">
                <div class="cata-wrapper">
                    <cata-item title="آخرین اخبار"/>
                    <cata-item title="آخرین اخبار"/>
                </div>
                <span class="date">{{ date }}</span>
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
        date: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.item-box-wrapper {
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    background-color: $white-1;
    border-bottom: 1px solid $grey-2;
    .left-section {
        color: $black-2;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .title-wrapper {
            flex-grow: 1;
            padding: 0 $m-10 0 $m-10;
            .subtitle {
                font-size: 1rem;
                color: $grey-3;
                margin: $m-5 0 0 0;
                font-size: 1rem;
                font-weight: 300;
            }
            .title {
                font-size: 1rem;
                font-weight: 400;
                font-size: 1.4rem;
            }
        }
        .cata-date-wrapper {
            color: $white-1;
            flex-grow: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto $m-10 $m-10 $m-10;
            .cata-wrapper {
                display: flex;
            }
            .date {
                color: $grey-3;
                font-size: 0.8rem;
                font-weight: 200;
            }
        }
    }
}
</style>
