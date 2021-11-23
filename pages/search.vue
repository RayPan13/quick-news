<template>
    <div id="search">
        <main>
            <the-intro :intro="intro" />
            <div class="filter">
                <form method="post">
                    <ul>
                        <li>
                            <input type="text" name="keyword" placeholder="Keyword" />
                        </li>
                        <li>
                            <input type="text" name="author" placeholder="Author" />
                        </li>
                        <li>
                            <select name="category">
                                <option value="category" selected disabled>Category</option>
                                <option value="sport">Sport</option>
                                <option value="travel">Travel</option>
                                <option value="lifestyle">Lifestyle</option>
                            </select>
                        </li>
                        <li>
                            <select name="tag">
                                <option value="tag" selected disabled>Tag</option>
                                <option value="football">Football</option>
                                <option value="health">Health</option>
                            </select>
                        </li>
                        <li>
                            <label>From</label>
                            <input
                                v-model="fromDate"
                                type="date"
                                name="from"
                                :data-before="fromDate"
                                :class="{ 'is-ios': isIos }"
                                @change="fromDateChange"
                            />
                        </li>
                        <li>
                            <label>To</label>
                            <input
                                v-model="toDate"
                                type="date"
                                name="to"
                                :data-before="toDate"
                                :class="{ 'is-ios': isIos }"
                                @change="toDateChange"
                            />
                        </li>
                        <li>
                            <button type="button">SEARCH</button>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="container">
                <div class="content">
                    <the-article-title :article="article" />
                    <div class="box">
                        <div v-for="obj of showAry" :key="obj.id" class="item">
                            <div class="pic">
                                <img :src="obj.img" alt="" />
                            </div>
                            <div class="txt">
                                <h2>{{ obj.title }} <a :href="obj.link"> More >></a></h2>
                                <div class="note">
                                    <div class="tag">{{ obj.tag }}</div>
                                    <div class="date"><fa :icon="['far', 'calendar']" />{{ obj.date }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <the-article-aside :article="article" />
                </div>
                <the-page-control :page-length="pageLength" :show.sync="show" />
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
            fromDate: 'YYYY-MM-DD',
            toDate: 'YYYY-MM-DD',
            result: [],
            show: 1,
            pageCount: 5,
            isIos: false,
        }
    },
    head: {
        title: 'Search - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Search - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Search - Quick News' },
        ],
    },
    computed: {
        pageLength() {
            let len = 0
            this.result ? (len = this.result.length) : (len = 0)
            return Math.ceil(len / this.pageCount)
        },
        showAry() {
            if (this.result) {
                const begin = this.pageCount * (this.show - 1)
                const end = this.pageCount * this.show
                return this.result.slice(begin, end)
            } else {
                return []
            }
        },
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
        this.fetchPost()
        this.isIos = navigator.userAgent.match(/iPhone|iPad/i) !== null
    },
    methods: {
        fromDateChange() {
            if (this.toDate !== '') {
                const from = new Date(this.fromDate)
                const to = new Date(this.toDate)
                if (from > to) {
                    this.toDate = this.fromDate
                }
            }
        },
        toDateChange() {
            if (this.fromDate === '') {
                this.fromDate = this.toDate
            } else {
                const from = new Date(this.fromDate)
                const to = new Date(this.toDate)
                if (to < from) {
                    this.fromDate = this.toDate
                }
            }
        },
        async fetchPost() {
            this.result = await this.$axios.$get('/api/search.json').catch(() => {
                return []
            })
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
#search {
    background-color: #eee;
    .filter {
        width: 60%;
        margin: 0 auto;
        background-color: #fff;
        padding: 24px;
        transform: translateY(-50%);
        @include media(990) {
            width: 75%;
        }
        @include media(768) {
            transform: translateY(-25%);
        }
        @include media(580) {
            width: 100%;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        li {
            padding: 0 8px 16px;
            display: flex;
            flex-basis: 33.33%;
            align-items: center;
            @include media(768) {
                flex-basis: 50%;
            }
            @include media(480) {
                padding-top: 1px;
            }
            &:nth-child(5),
            &:nth-child(6) {
                flex: 22%;
                @include media(768) {
                    flex-basis: 50%;
                }
                @include media(480) {
                    flex-basis: 100%;
                }
            }
            &:nth-child(7) {
                flex: 10%;
                @include media(768) {
                    flex-basis: 50%;
                }
                @include media(480) {
                    flex-basis: 100%;
                }
            }
            &:last-child {
                padding-right: 0;
            }
        }
        input,
        select,
        button {
            border: none;
            appearance: none;
            position: relative;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 1.6rem;
            padding: 16px 12px;
            border: 1px solid #ccc;
        }
        select {
            line-height: 1.5;
        }
        [type='date'] {
            height: 100%;
        }
        [type='date']::-webkit-datetime-edit,
        [type='date']::-webkit-inner-spin-button,
        [type='date']::-webkit-clear-button {
            display: none;
        }
        [type='date']::-webkit-calendar-picker-indicator {
            position: absolute;
            top: 50%;
            right: 0px;
            transform: translateY(-50%);
        }
        [type='date']::before {
            content: attr(data-before);
            display: inline-block;
            width: 100%;
            padding-right: 12px;
            white-space: nowrap;
        }
        [type='date'].is-ios::before {
            display: none;
        }
        label {
            font-size: 1.4rem;
            padding-right: 12px;
        }
        button {
            font-weight: 600;
            border: 0;
            border-radius: 4px;
            color: #fff;
            background-color: map-get($color, main);
            height: 100%;
            cursor: pointer;
        }
    }
    .content {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 48px;
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
        .item {
            display: flex;
            padding-bottom: 24px;
            margin-bottom: 24px;
            border-bottom: 1px solid #aaa;
            .pic {
                flex-basis: 80px;
                img {
                    width: 100%;
                    &.isLoading {
                        height: 80px;
                        background-color: #ddd;
                    }
                }
            }
            .txt {
                flex-basis: calc(100% - 104px);
                padding-left: 24px;
                h2 {
                    font-size: 1.6rem;
                    margin: 0 0 12px;
                    line-height: 1.5;
                    a {
                        color: map-get($color, main);
                        transition: color 0.5s;
                        &:hover {
                            color: #888;
                        }
                    }
                }
            }
            .note {
                display: flex;
                align-items: center;
                @include media(375) {
                    flex-wrap: wrap;
                }
                .tag {
                    padding: 8px 12px;
                    background-color: map-get($color, main);
                    border-radius: 4px;
                    color: #fff;
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-right: 12px;
                    @include media(375) {
                        margin-bottom: 12px;
                    }
                }
                .date {
                    font-size: 1.4rem;
                    @include media(375) {
                        flex-basis: 100%;
                    }
                    svg {
                        margin-right: 12px;
                    }
                }
            }
        }
    }
}
</style>
