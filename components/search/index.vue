<template>
    <aside class="search-wrapper">
        <label-box title="اطلاعات فردی شهدا">
            <img src="/svg/hamburger.svg" alt="search filters">
        </label-box>
        <div class="search-form">
            <div class="count">
                <span>تعداد موارد یافت شده :‌</span>
                <span>۱۴۵</span>
            </div>
            <text-input placeholder="نام شهید"/>
            <text-input placeholder="نام خانوادگی شهید"/>
            <text-input placeholder="نام پدر"/>
            <date-picker label="تاریخ شهادت"/>
            <text-input placeholder="سن شهادت"/>
            <text-input placeholder="محل شهادت"/>
            <multiselect v-model="search.operation" :options="operations" placeholder="نام عملیات"/>
            <multiselect v-model="search.operation" :options="operations" placeholder="مزار"/>
            <multiselect v-model="search.operation" :options="operations" placeholder="یگان خدمتی"/>
            <date-picker label="تاریخ تولد"/>
            <text-input placeholder="محل تولد"/>
            <text-input placeholder="شغل"/>
            <multiselect v-model="search.operation" :options="operations" placeholder="وضعیت تأهل"/>
            <text-input placeholder="تعداد فرزند"/>
        </div>
        <button-comp label="از نو" color="#f53636"/>
    </aside>
</template>

<script>
import LabelBox from "~/components/common/label-box";
import ButtonComp from "~/components/form-inputs/button";
import TextInput from "~/components/form-inputs/text-input";
import Multiselect from "vue-multiselect";
import DatePicker from "~/components/form-inputs/date-picker";

export default {
    components: {
        LabelBox,
        ButtonComp,
        TextInput,
        Multiselect,
        DatePicker
    },
    data() {
        return {
            search: {
                operation: ""
            },
            operations: ["والفجر", "کربلای ۲"]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/shared.scss";
.search-wrapper {
    display: flex;
    flex-direction: column;
    @include spaceout($m-10);
    .search-form {
        background-color: $white-1;
        flex-grow: 1;
        padding: $m-10;
        font-size: 1.6rem;
        font-weight: 300;
        color: $grey-3;
        display: flex;
        flex-direction: column;
        @include spaceout($m-10);
        .count {
        }
    }
}
</style>


