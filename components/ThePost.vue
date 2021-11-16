<template>
    <div class="post">
        <div class="container">
            <div
                v-for="(obj, index) of postData[category]"
                :key="obj.id"
                class="item"
                :class="{ big: setBigStyle(index) }"
            >
                <div class="pic">
                    <a :href="obj.url"></a>
                    <div class="tag">{{ category }}</div>
                    <img :src="setBigStyle(index) ? obj.src[0] : obj.src[1]" alt="" />
                </div>
                <div class="txt">
                    <h3>
                        <a :href="obj.url">
                            {{ obj.title }}
                        </a>
                    </h3>
                    <div class="info">
                        <div class="date">
                            <span class="icon">
                                <fa :icon="['far', 'calendar']" />
                            </span>
                            <span>{{ obj.time }}</span>
                        </div>
                        <div v-if="setBigStyle(index)" class="author">
                            <span class="icon">
                                <fa :icon="['far', 'user']" />
                            </span>
                            <span>{{ obj.author }}</span>
                        </div>
                        <div v-if="setBigStyle(index)" class="views">
                            <span class="icon">
                                <fa :icon="['far', 'eye']" />
                            </span>
                            <span>{{ obj.views }} views</span>
                        </div>
                        <div v-if="setBigStyle(index)" class="comments">
                            <span class="icon">
                                <fa :icon="['far', 'comment']" />
                            </span>
                            <span>{{ obj.comments }} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ThePost',
    data() {
        return {
            postData: {},
            category: 'lifestyle',
            ww: 0,
        }
    },
    mounted() {
        this.fetchPost()
        this.getWindowWidth()
        window.addEventListener('resize', this.getWindowWidth)
    },
    destroyed() {
        window.removeEventListener('resize', this.getWindowWidth)
    },
    methods: {
        async fetchPost() {
            this.postData = await this.$axios.$get('/api/post.json').catch(() => {
                return {}
            })
        },
        setBigStyle(index) {
            const itemStyle = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
            return this.ww > 768 ? itemStyle[index] : false
        },
        getWindowWidth() {
            this.ww = window.innerWidth
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.post {
    width: 100%;
    padding: 72px 0;
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    .item {
        flex-basis: 33%;
        padding: 12px;
        @include media(768) {
            flex-basis: 100%;
        }
        &.big {
            flex-basis: 66%;
            @include media(768) {
                flex-basis: 100%;
            }
        }
    }
    .pic {
        width: 100%;
        margin-bottom: 12px;
        position: relative;
        overflow: hidden;
        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            &:hover ~ img {
                transform: scale(1.2);
                filter: grayscale(1);
            }
        }
        img {
            transform: scale(1);
            transform-origin: center;
            transition-duration: 1s;
            width: 100%;
        }
    }
    .tag {
        background-color: rgba(map-get($color, main), 0.8);
        color: #fff;
        border-radius: 4px;
        padding: 12px;
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 2;
        font-size: 1.4rem;
    }
    h3 {
        font-size: 1.8rem;
        padding-bottom: 12px;
        margin: 0 0 12px;
        border-bottom: 1px solid #cbcbcb;
        transition: color 0.5s;
        &:hover {
            color: map-get($color, main);
        }
    }
    .info {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 12px;
        font-size: 1.4rem;
        .icon {
            margin-right: 4px;
        }
        > div {
            margin: 0 12px 12px 0;
        }
    }
}
</style>
