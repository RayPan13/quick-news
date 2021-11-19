<template>
    <div id="search">
        <main>
            <the-intro :intro="intro" />
            <div class="container">
                <the-article-title :article="article" />
                <div class="box"></div>
                <the-article-aside :article="article" />
            </div>
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
import TheArticleTitle from '@/components/TheArticleTitle.vue'
import TheArticleAside from '@/components/TheArticleAside.vue'
export default {
    components: { TheIntro, TheArticleTitle, TheArticleAside },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=5',
                title: 'Search Results',
                subtitle: '',
                tag: false,
            },
            article: {
                title: 'Follow Us',
                socialAry: [
                    { url: 'javascript:;', icon: ['fab', 'facebook-f'], name: 'fb' },
                    { url: 'javascript:;', icon: ['fab', 'twitter'], name: 'twitter' },
                    { url: 'javascript:;', icon: ['fab', 'linkedin-in'], name: 'linked' },
                ],
                hot: [
                    {
                        id: 1001,
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions in United States this summer!',
                        date: '2021/11/12',
                    },
                    {
                        id: 1002,
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions!',
                        date: '2021/11/12',
                    },
                ],
                related: [
                    {
                        id: 2001,
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions in United States this summer!',
                        date: '2021/11/12',
                    },
                    {
                        id: 2002,
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions!',
                        date: '2021/11/12',
                    },
                ],
            },
        }
    },
    head: {
        title: 'Search - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Search - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Search - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
#search {
    background-color: #eee;
    .container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin-top: 120px;
        padding-bottom: 48px;
    }
    .box {
        flex-basis: calc(100% - 210px);
        padding-right: 5%;
        padding-left: 10%;
        height: 500px;
        @include media(1200) {
            padding-left: 0;
        }
        @include media(768) {
            flex-basis: 100%;
            padding-right: 0;
        }
    }
}
</style>
