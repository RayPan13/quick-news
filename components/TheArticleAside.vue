<template>
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
</template>
<script>
import TheAsideCarousel from '@/components/TheAsideCarousel'
export default {
    name: 'TheArticleAside',
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
</style>
