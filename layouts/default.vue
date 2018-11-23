<template>
    <v-app>
        <the-header/>
        <v-content :ma-0="$vuetify.breakpoint.mdAndDown">
            <nuxt/>
        </v-content>
        <the-footer/>
    </v-app>
</template>

<script>
import TheHeader from '~/components/layouts/header';
import TheFooter from '~/components/layouts/footer';
export default {
    components: {
        TheHeader,
        TheFooter,
    }
}
</script>


<style lang="scss" scoped>

</style>


