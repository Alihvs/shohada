<template>
    <nuxt-link to="#" class="item-box-wrapper" v-lazy:background-image="image">
        <div class="top-section">
            <div class="cata-wrapper">
                <cata-item title="آخرین اخبار"/>
                <cata-item title="آخرین اخبار"/>
            </div>
            <span class="date">{{ date }}</span>
        </div>
        <div class="bottom-section">
            <div class="title-wrapper">
                <h5 class="subtitle">{{ subtitle }}</h5>
                <span class="title">{{ title }}</span>
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
    // height: 27rem;
    min-height: auto;
    display: flex;
    flex-direction: column;
    text-decoration: none;
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
        flex-basis: 50%;
        .cata-wrapper {
            display: flex;
            margin-right: $m-5;
        }
        .date {
            margin: 0 $m-10 $m-10 0;
            color: $grey-3;
            font-size: 1rem;
            font-weight: 100;
        }
    }
    .bottom-section {
        color: $black-2;
        background-color: $white-1;
        flex-basis: 50%;
        .title-wrapper {
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
    }
}
</style>
