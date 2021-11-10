<template>
    <div class="category">
        <div v-if="JSON.stringify(postData) !== '{}'" class="container">
            <h2>{{ postData.title }}</h2>
            <div class="left">
                <div
                    v-for="obj of leftAty"
                    :key="obj.title"
                    data-aos="fade-up"
                    class="item"
                    :class="{ video: obj.isVideo, big: obj.isBig }"
                >
                    <div class="pic">
                        <a :href="obj.url"></a>
                        <img :src="obj.src[obj.img]" alt="" />
                        <div class="tag">{{ postData.tag }}</div>
                        <div v-if="obj.isVideo" class="play-btn">
                            <span class="icon">
                                <fa :icon="['fas', 'play']" />
                            </span>
                            <span>PLAY</span>
                        </div>
                    </div>
                    <div class="txt">
                        <h3 v-if="!obj.isVideo">
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
                            <div v-if="obj.isBig" class="author">
                                <span class="icon">
                                    <fa :icon="['far', 'user']" />
                                </span>
                                <span>{{ obj.author }}</span>
                            </div>
                            <div v-if="obj.isBig" class="views">
                                <span class="icon">
                                    <fa :icon="['far', 'eye']" />
                                </span>
                                <span>{{ obj.views }} views</span>
                            </div>
                            <div v-if="obj.isBig" class="comments">
                                <span class="icon">
                                    <fa :icon="['far', 'comment']" />
                                </span>
                                <span>{{ obj.comments }} comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div v-for="obj of rightAty" :key="obj.title" data-aos="fade-up" class="item">
                    <div class="pic">
                        <a :href="obj.url"></a>
                        <div class="tag">{{ postData.tag }}</div>
                        <img :src="obj.src[obj.img]" alt="" />
                    </div>
                    <div class="txt">
                        <h3>
                            <a :href="obj.url">{{ obj.title }}</a>
                        </h3>
                        <div class="info">
                            <div class="date">
                                <span class="icon">
                                    <fa :icon="['far', 'calendar']" />
                                </span>
                                <span>{{ obj.time }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <a :href="postData.url">
                    <span>{{ moreText }}</span>
                    <span class="icon">
                        <fa :icon="['fas', 'angle-right']" />
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheCategory',
    props: {
        postData: {
            type: Object,
            required: true,
        },
    },
    computed: {
        leftAty() {
            return JSON.stringify(this.postData) === '{}' ? [] : this.postData.top.filter((obj) => !obj.isTall)
        },
        rightAty() {
            return JSON.stringify(this.postData) === '{}' ? [] : this.postData.top.filter((obj) => obj.isTall)
        },
        moreText() {
            return JSON.stringify(this.postData) === '{}' ? '' : `ALL ${this.postData.title.toUpperCase()}`
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.category {
    width: 100%;
    margin-bottom: 32px;
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    h2 {
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 24px;
        flex-basis: 100%;
        line-height: 1.5;
    }
    .left {
        flex-basis: 70%;
        display: flex;
        flex-wrap: wrap;
        padding-right: 32px;
        @include media(768) {
            flex-basis: 100%;
            padding-right: 0;
        }
        .item {
            flex-basis: 50%;
            @include media(768) {
                flex-basis: 100%;
            }
            &.big {
                flex-basis: 100%;
            }
            &.video {
                padding-left: 32px;
                @include media(768) {
                    padding-left: 0;
                }
            }
        }
    }
    .right {
        flex-basis: 30%;
        @include media(768) {
            flex-basis: 100%;
        }
    }
    .item {
        flex-basis: 100%;
        margin-bottom: 32px;
        .pic {
            width: 100%;
            position: relative;
            margin-bottom: 12px;
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
            .tag {
                background-color: rgba(map-get($color, main), 0.7);
                color: #fff;
                position: absolute;
                top: 8px;
                right: 8px;
                padding: 12px;
                border-radius: 4px;
                z-index: 2;
                font-weight: 600;
            }
            .play-btn {
                position: absolute;
                left: 20px;
                bottom: 20px;
                color: #fff;
                font-size: 1.2rem;
                font-weight: 600;
                z-index: 2;
                .icon {
                    margin-right: 4px;
                }
            }
        }
        h3 {
            padding-bottom: 12px;
            margin: 0 0 12px;
            font-size: 2rem;
            border-bottom: 1px solid #ddd;
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
    .more {
        flex-basis: 100%;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
        a:hover {
            opacity: 0.5;
        }
        .icon {
            margin-left: 4px;
        }
    }
}
</style>
