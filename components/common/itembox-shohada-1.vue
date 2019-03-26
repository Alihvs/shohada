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
                <span class="details">{{ details }}</span>
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
            type: String,
            default: ""
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
            margin-right: $m-5;
        }
    }
    .bottom-section {
        color: $black-2;
        background-color: $white-1;
        flex-basis: 70%;
        .title-wrapper {
            padding: $m-10;
            .title {
                font-size: 1.1rem;
                color: $grey-3;
                margin: $m-5 0 $m-10 0;
            }
            .title {
                font-size: 1.3rem;
            }
        }
    }
}
</style>
