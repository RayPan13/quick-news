<template>
    <div id="page">
        <main>
            <the-intro :intro="intro" />
            <div class="container">
                <the-article :article="article" />
            </div>
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
import TheArticle from '@/components/TheArticle.vue'
export default {
    components: { TheIntro, TheArticle },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=1',
                title: 'About our working in team Quick News',
                subtitle: 'ABOUT US',
                tag: false,
            },
            article: {
                title: 'Follow Us',
                socialAry: [
                    { url: 'javascript:;', icon: ['fab', 'facebook-f'], name: 'fb' },
                    { url: 'javascript:;', icon: ['fab', 'twitter'], name: 'twitter' },
                    { url: 'javascript:;', icon: ['fab', 'linkedin-in'], name: 'linked' },
                ],
                section: [
                    {
                        title: '',
                        content: `
                            <p>Hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed <a href="javascript:;">base benefits</a>. Dramatically visualize customer directed</p>
                        `,
                    },
                    {
                        title: 'First Step',
                        content: `
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                            <ul><li>Completely synergize resource taxing relationships</li><li>Professionally cultivate one-to-one customer service with robust ideas</li><li>Dynamically innovate resource-leveling customer service for state</li></ul><h4>Proactively envisioned multimedia based expertise</h4>
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                        `,
                    },
                    {
                        title: 'Second Step',
                        content: `
                            <ol><li>Completely synergize resource taxing relationships</li><li>Professionally cultivate one-to-one customer service with robust ideas</li><li>Dynamically innovate resource-leveling customer service for state</li></ol><p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                        `,
                    },
                    {
                        title: '',
                        content: `
                            <p class="end">Thanks for reading this!</p>
                        `,
                    },
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
        title: 'Page - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Page - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Page - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
#page {
    background-color: #eee;
}
</style>
