<template>
    <nuxt-link to="#" class="item-box-wrapper" v-lazy:background-image="image">
        <div class="right-section"></div>
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
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";

.item-box-wrapper {
    height: 15rem;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    background-color: $white-1;
    .right-section {
        background-color: $black-1;
        display: flex;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        flex-basis: 20rem;
        margin: $m-10 0 $m-10 0;
    }
    .left-section {
        color: $black-2;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .title-wrapper {
            flex-grow: 1;
            padding: $m-10;
            .subtitle {
                font-size: 1.1rem;
                color: $grey-3;
                margin: $m-5 0 $m-10 0;
                font-size: 1.2rem;
                font-weight: 300;
            }
            .title {
                font-size: 1.3rem;
                font-weight: 400;
                font-size: 1.6rem;
            }
        }
        .cata-date-wrapper {
            color: $white-1;
            flex-grow: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: $m-10;
            .cata-wrapper {
                display: flex;
            }
            .date {
                color: $grey-3;
                font-size: 1rem;
                font-weight: 100;
            }
        }
    }
}
</style>
