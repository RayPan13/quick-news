<template>
    <div class="intro" :style="{ backgroundImage: 'url(' + intro.image + ')' }">
        <div class="container">
            <h4>{{ intro.subtitle }}</h4>
            <h1>{{ intro.title }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheIntro',
    props: {
        intro: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.intro {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @include media(768) {
        height: 400px;
    }
    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .container {
        position: relative;
        z-index: 2;
    }
    h4 {
        text-align: center;
        margin: 0 0 12px;
        font-size: 1.6rem;
        font-weight: 600;
    }
    h1 {
        text-align: center;
        margin: 0;
        font-size: 5rem;
        font-weight: 300;
        line-height: 1.5;
        @include media(768) {
            font-size: 3.2rem;
            line-height: 1.2;
        }
    }
}
</style>
