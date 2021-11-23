<template>
    <article>
        <the-article-title :article="article" />
        <div class="box">
            <!-- eslint-disable vue/no-v-html -->
            <section v-for="(obj, index) of article.section" :key="obj.title + index">
                <h3>{{ obj.title }}</h3>
                <div class="content" v-html="obj.content"></div>
            </section>
            <!--eslint-enable-->
        </div>
        <the-article-aside :article="article" />
    </article>
</template>
<script>
import TheArticleTitle from '@/components/TheArticleTitle.vue'
import TheArticleAside from '@/components/TheArticleAside.vue'

export default {
    name: 'TheArticle',
    components: { TheArticleTitle, TheArticleAside },
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
}
</style>
