<template>
    <div class="kv">
        <div class="carousel">
            <transition-group tag="div" class="box" name="fade">
                <div
                    v-for="(obj, index) of carousel"
                    v-show="index === showIndex"
                    :key="obj.id"
                    :style="{ background: 'url(' + obj.bg + ')' }"
                    class="item"
                >
                    <div class="container">
                        <div class="context">
                            <div class="type">{{ obj.type }}</div>
                            <h2>{{ obj.title }}</h2>
                            <div class="info">
                                <div class="author">
                                    <span class="icon">
                                        <fa :icon="['far', 'user']" />
                                    </span>
                                    <span>{{ obj.author }}</span>
                                </div>
                                <div class="comment">
                                    <span class="icon">
                                        <fa :icon="['far', 'comment']" />
                                    </span>
                                    <span class="count">{{ obj.comments }}</span>
                                    <span>comments</span>
                                </div>
                            </div>
                        </div>
                        <div class="date">
                            <span class="icon">
                                <fa :icon="['far', 'calendar']" />
                            </span>
                            <span class="month">{{ monthFormat(obj.date) }}</span>
                            <span class="day">{{ dayFormat(obj.date) }}</span>
                        </div>
                    </div>
                </div>
            </transition-group>
            <div class="dots">
                <div class="container">
                    <div class="billboard">News</div>
                    <ul>
                        <li
                            v-for="(num, index) of carousel.length"
                            :key="num"
                            :class="{ active: index === showIndex }"
                            @click="setShow(index)"
                        ></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="breaking">
                <p>
                    <span class="bold">Breaking news!</span> 9 Ways to Generate More Revenue For Your Business Read this
                    to bring you more revenue more happiness!
                </p>
                <fa :icon="['fas', 'angle-right']" />
            </div>
        </div>
    </div>
</template>
<script>
const interval = 8000

export default {
    name: 'TheKv',
    data() {
        return {
            carousel: [
                {
                    id: 1,
                    type: 'LIFESTYLE',
                    title: 'Oceans May Reduce Sea Life',
                    author: 'John Adams',
                    comments: 10,
                    date: '11/04',
                    bg: 'https://picsum.photos/1920/1080.webp?random=101',
                },
                {
                    id: 2,
                    type: 'TRAVEL',
                    title: 'Warning Oceans May Reduce Sea Life by 17%',
                    author: 'John Adams',
                    comments: 2,
                    date: '10/31',
                    bg: 'https://picsum.photos/1920/1080.webp?random=102',
                },
            ],
            showIndex: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.setShow(this.showIndex + 1)
        }, interval)
    },
    methods: {
        monthFormat(date) {
            const monthMapping = [
                'Jan.',
                'Feb.',
                'Mar.',
                'Apr.',
                'May',
                'Jun.',
                'Jul.',
                'Aug.',
                'Sep.',
                'Oct.',
                'Nov.',
                'Dec',
            ]
            const month = date.split('/')[0]
            return monthMapping[month - 1]
        },
        dayFormat(date) {
            return date.split('/')[1]
        },
        setShow(index) {
            const max = this.carousel.length - 1
            index > max ? (this.showIndex = 0) : (this.showIndex = index)
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.kv {
    width: 100%;
    position: relative;
    > .container {
        transform: translateY(-50%);
    }
}
.carousel {
    position: relative;
    width: 100%;
    background-color: #000;
    .box {
        height: 600px;
        @include media(990) {
            height: 500px;
        }
    }
    .item {
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 600px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        @include media(990) {
            height: 500px;
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
    .container {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        color: #fff;
        @include media(768) {
            flex-wrap: wrap;
        }
    }
    .context {
        flex-basis: 100%;
        padding-right: 5%;
        @include media(768) {
            padding-right: 12px;
        }
    }
    .type {
        display: inline-block;
        font-size: 1.4rem;
        font-weight: 600;
        padding: 12px;
        border: 2px solid map-get($color, main);
        border-radius: 4px;
        color: map-get($color, main);
        margin-bottom: 20px;
    }
    h2 {
        font-size: 6rem;
        font-weight: 300;
        margin: 0 0 20px;
        @include media(990) {
            font-size: 5rem;
        }
        @include media(768) {
            font-size: 4rem;
        }
        @include media(480) {
            font-size: 3rem;
        }
    }
    .info {
        width: 100%;
        display: flex;
        font-size: 1.5rem;
    }
    .author {
        margin-right: 24px;
    }
    .icon {
        margin-right: 8px;
    }
    .date {
        font-size: 1.6rem;
        padding-right: 5%;
        flex-shrink: 0;
        @include media(768) {
            flex-basis: 100%;
            order: -1;
            padding-right: 0;
            margin-bottom: 24px;
        }
    }
}
.dots {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .container {
        height: 100%;
    }
    ul {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
    li {
        list-style: none;
        width: 10px;
        height: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        margin-bottom: 8px;
        cursor: pointer;
        &.active {
            background-color: rgba(255, 255, 255, 1);
        }
    }
}
.breaking {
    padding: 24px 12px;
    color: #fff;
    background-color: map-get($color, main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: #000;
    }
    p {
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.5;
        margin: 0;
        padding-right: 12px;
        .bold {
            font-weight: bold;
        }
    }
    svg {
        font-size: 2rem;
    }
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1.5s;
}
.fade-enter-to {
    opacity: 1;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 1.5s;
}
.fade-leave-to {
    opacity: 0;
}
</style>
