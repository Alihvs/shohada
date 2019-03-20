<template>
    <ul class="social-links-wrapper">
        <li class="social-item" v-for="(item, index) in items" :key="index">*</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: "facebook",
                    url: "facebook.com"
                },
                {
                    name: "instagram",
                    url: "instagram.com"
                },
                {
                    name: "Googleplus",
                    url: "facebook.com"
                }
            ]
        };
    }
};
</script>


<style lang="scss" scoped>
.social-links-wrapper {
    display: flex;
    border: 1px solid red;
}
</style>

