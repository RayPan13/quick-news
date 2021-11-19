<template>
    <div id="search">
        <main>
            <the-intro :intro="intro" />
            <div class="container">
                <the-article-title :article="article" />
            </div>
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
import TheArticleTitle from '@/components/TheArticleTitle.vue'
export default {
    components: { TheIntro, TheArticleTitle },
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
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.search {
    .container {
        position: relative;
    }
}
</style>
