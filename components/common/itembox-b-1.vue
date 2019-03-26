<template>
    <nuxt-link to="#" class="item-box-wrapper" v-lazy:background-image="image">
        <div class="content">
            <div class="cata-wrapper">
                <cata-item title="آخرین اخبار"/>
                <cata-item title="آخرین اخبار"/>
            </div>
            <span class="date">{{ date }}</span>
            <div class="title-wrapper">
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
    text-decoration: none;
    background-color: $black-1;
    height: 30rem;
    color: $white-1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .content {
        .cata-wrapper {
            display: flex;
            margin-right: $m-5;
        }
        .date {
            margin: 0 $m-10 $m-10 0;
            color: $grey-3;
        }
        .title-wrapper {
            margin-top: $m-5;
            padding: $m-10;
            background-color: $black-2-1;
            .title {
            }
        }
    }
}
</style>
