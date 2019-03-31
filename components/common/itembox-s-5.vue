<template>
    <nuxt-link to="#" class="item-box-wrapper" v-lazy:background-image="image">
        <div class="top-section"></div>
        <div class="bottom-section">
            <div class="title-wrapper">
                <span class="title" v-html="addShahid(title)"></span>
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
        title: {
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
        // flex-basis: 50%;
        flex-grow: 1;
    }
    .bottom-section {
        color: $black-2;
        background-color: $white-1;
        // flex-basis: 20%;
        height: 5rem;
        flex-grow: 0;
        .title-wrapper {
            padding: $m-10;
            .title {
                font-size: 1.3rem;
                font-weight: 400;
                font-size: 1.6rem;
            }
        }
    }
}
</style>
