<template>
    <div id="page">
        <main>
            <the-intro :intro="intro" />
            <div class="container">
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
                        <section v-for="obj of article.section" :key="obj.title">
                            <h3>{{ obj.title }}</h3>
                            <div class="content" v-html="obj.content"></div>
                        </section>
                        <!--eslint-enable-->
                    </div>
                    <div class="aside">
                        <div class="hot">
                            <p>HOT</p>
                        </div>
                        <div class="related">
                            <p>RELATED NEWS</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
export default {
    components: { TheIntro },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.webp?random=1',
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
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions in United States this summer!',
                        date: '2021/11/12',
                    },
                    {
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions!',
                        date: '2021/11/12',
                    },
                ],
                related: [
                    {
                        url: 'javascript:;',
                        title: '19 Top Tourists Attractions in United States this summer!',
                        date: '2021/11/12',
                    },
                    {
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
        flex-basis: 80%;
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
        }
    }
    .aside {
        flex-basis: 20%;
        @include media(768) {
            flex-basis: 100%;
        }
        .hot,
        .related {
            padding: 32px 12px;
        }
        .hot {
            color: #fff;
            background-color: map-get($color, main);
        }
        .related {
            background-color: #fff;
        }
    }
}
</style>
