<template>
    <div class="title">
        <h2>{{ article.title }}</h2>
        <div class="social">
            <ul>
                <li v-for="obj of article.socialAry" :key="obj.name">
                    <a :href="obj.url">{{ obj.name }}</a>
                    <fa :icon="[obj.icon[0], obj.icon[1]]" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheArticleTitle',
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    position: absolute;
    top: 52px;
    left: -15%;
    flex-direction: column;
    @include media(1200) {
        position: relative;
        top: 0;
        left: 0;
        flex-basis: 100%;
        flex-direction: row;
    }
    @include media(768) {
        flex-wrap: wrap;
    }
    h2 {
        font-size: 8rem;
        color: rgba(0, 0, 0, 0.1);
        margin: 0;
        order: 1;
        transform-origin: center;
        transform: rotate(-90deg) translate(-80%, 8%);
        @include media(1200) {
            font-size: 4rem;
            transform: rotate(0) translateX(0);
            order: 0;
            color: #000;
        }
        @include media(768) {
            flex-basis: 100%;
            margin-bottom: 24px;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        @include media(1200) {
            display: flex;
        }
        @include media(768) {
            flex-basis: 100%;
        }
    }
    li {
        font-size: 2.5rem;
        position: relative;
        margin-bottom: 12px;
        color: #aaa;
        @include media(1200) {
            margin-right: 12px;
            &:last-child {
                margin-right: 0;
            }
        }
        &:last-child {
            margin-bottom: 0;
        }
        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-size: 0;
        }
    }
}
</style>
