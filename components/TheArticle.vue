<template>
    <article>
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
        <div class="box">
            <!-- eslint-disable vue/no-v-html -->
            <section v-for="(obj, index) of article.section" :key="obj.title + index">
                <h3>{{ obj.title }}</h3>
                <div class="content" v-html="obj.content"></div>
            </section>
            <!--eslint-enable-->
        </div>
        <div class="aside">
            <div class="hot">
                <p>HOT</p>
                <the-aside-carousel :carousel="article.hot" box="hot" />
            </div>
            <div class="related">
                <p>RELATED NEWS</p>
                <the-aside-carousel :carousel="article.related" box="related" />
            </div>
        </div>
    </article>
</template>
<script>
import TheAsideCarousel from '@/components/TheAsideCarousel.vue'

export default {
    name: 'TheArticle',
    components: { TheAsideCarousel },
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
article {
    width: 100%;
    padding: 48px 0;
    display: flex;
    position: relative;
    flex-wrap: wrap;
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
    .box {
        flex-basis: calc(100% - 210px);
        padding-right: 5%;
        padding-left: 10%;
        @include media(1200) {
            padding-left: 0;
        }
        @include media(768) {
            flex-basis: 100%;
            padding-right: 0;
        }
        section {
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid #aaa;
            &:first-child {
                ::v-deep h3 {
                    display: none;
                }
            }
            &:first-child,
            &:last-child {
                border-bottom: 0;
            }
            ::v-deep h3 {
                font-size: 2.2rem;
                margin: 0 0 24px;
            }
            ::v-deep h4 {
                font-size: 1.8rem;
                margin: 0 0 12px;
            }
            ::v-deep p {
                font-size: 1.6rem;
                line-height: 1.5;
                margin: 0 0 12px;
                &.end {
                    font-size: 2.5rem;
                    letter-spacing: 2px;
                    text-align: center;
                    color: #aaa;
                }
            }
            ::v-deep ul,
            ::v-deep ol {
                padding-left: 1.5em;
                margin: 0 0 12px;
            }
            ::v-deep li {
                font-size: 1.6rem;
                line-height: 1.5;
            }
            ::v-deep a {
                color: map-get($color, main);
                font-weight: 600;
                text-decoration: underline;
            }
        }
    }
    .aside {
        flex-basis: 210px;
        @include media(768) {
            flex-basis: 100%;
        }
        .hot,
        .related {
            padding: 32px 0;
            overflow: hidden;
        }
        .hot {
            color: #fff;
            background-color: map-get($color, main);
        }
        .related {
            background-color: #fff;
        }
        p {
            margin: 0 0 12px;
            padding-left: 12px;
        }
    }
}
</style>
