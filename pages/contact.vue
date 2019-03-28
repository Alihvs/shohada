<template>
    <main class="contact-wrapper">
        <h1 class="title">ارتباط با ما</h1>
        <article class="form">
            <text-input placeholder="نام و نام خانوادگی"/>
            <text-input placeholder="شماره تماس"/>
            <text-input placeholder="پست الکترونیک"/>
            <text-input placeholder="شماره تلفن همراه"/>
            <text-area placeholder="متن پیام" class="text-area-comp"/>
        </article>
    </main>
</template>

<script>
import TextInput from "~/components/form-inputs/text-input";
import TextArea from "~/components/form-inputs/text-area";
export default {
    components: {
        TextInput,
        TextArea
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    .title {
        grid-column: 1 / -1;
    }
    .form {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        .text-area-comp {
            grid-column: 1 / -1;
        }
    }
}
</style>

