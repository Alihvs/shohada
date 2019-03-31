<template>
    <main class="contact-wrapper">
        <h1 class="title">ارتباط با ما</h1>
        <article class="form">
            <text-input placeholder="نام و نام خانوادگی"/>
            <text-input placeholder="شماره تماس"/>
            <text-input placeholder="پست الکترونیک"/>
            <text-input placeholder="شماره تلفن همراه"/>
            <text-area placeholder="متن پیام" class="text-area-comp"/>
            <button-comp label="بارگزاری فایل" color="#333333"/>
            <div class="uploaded-files"></div>
            <div class="question">
                <span>سؤال امنیتی:</span>
                <span>؟ = ۱۰ + ۸</span>
                <img src="/svg/refresh.svg" alt="refresh">
            </div>
            <text-input placeholder="جواب سؤال امنیتی"/>
            <button-comp label="ارسال" color="#f53636"/>
        </article>
        <aside class="info">
            <p class="info-para">
                ستاد یادواره شهدای کن جهت گرد آوری اطلاعات مربوط به شهدا اعم از : عکس - فیلم -
                دست نوشته - وصیت نامه و ... اقدام به برنامه ریزی بلند مدتی نموده که طی آن در مرحله اول اقدام به جمع آوری عکس های دوران دفاع مقدس و تهیه شناسنامه اطلاعاتی آن نموده است . لذا از کلیه عزیزانی که تمایل به همکاری با این ستاد را دارند ، چه در بخش جمع آوری اطلاعات و آثار شهدا و چه در بحث برگزاری مراسم ها و فعالیت های مختلف ، از طریق بخش « ارتباط با ما» با این ستاد در میان بگذارند .
            </p>
            <h4>لیست فرمت های استاندارد جهت ارسال فایل</h4>
            <ul>
                <li>فایل ویدیویی: MP4</li>
                <li>فایل صوتی: MP3, WAV</li>
                <li>عکس: BMP, PNG, JPG, PDF</li>
                <li>فایل متنی: TXT, DOC</li>
            </ul>
        </aside>
    </main>
</template>

<script>
import TextInput from "~/components/form-inputs/text-input";
import TextArea from "~/components/form-inputs/text-area";
import ButtonComp from "~/components/form-inputs/button";
export default {
    components: {
        TextInput,
        TextArea,
        ButtonComp
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
        .uploaded-files {
            // border: 1px solid red;
        }
        .question {
            grid-column: 1 / -1;
            font-size: 1.5rem;
            font-weight: 300;
            color: $grey-3;
            @include flex-center-vertical();
            & > * {
                margin-left: $m-10;
            }
        }
    }
    .info {
        margin-right: $m-10;
        .info-para {
            font-size: 1.6rem;
            font-weight: 200;
            margin-top: 0;
        }
        h4 {
            font-size: 2rem;
            font-weight: 400;
        }
        ul {
            font-size: 1.6rem;
        }
    }
}
</style>

