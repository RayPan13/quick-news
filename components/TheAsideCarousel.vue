<template>
    <div class="carousel">
        <div class="dots" :class="box">
            <div
                v-for="num of carousel.length"
                :key="num"
                class="dot"
                :class="{ active: num === show + 1 }"
                @click="setShow(num - 1)"
            ></div>
        </div>
        <div class="view">
            <transition-group :name="transitionName" tag="ul">
                <li v-for="(obj, index) of carousel" v-show="index === show" :key="obj.id">
                    <a :href="obj.url">{{ obj.title }}</a>
                    <p class="date"><fa :icon="['far', 'calendar']" />{{ obj.date }}</p>
                </li>
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheAsideCarousel',
    props: {
        carousel: {
            type: Array,
            required: true,
        },
        box: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            show: 0,
            transitionName: 'left-in',
        }
    },
    watch: {
        show(nVal) {
            const max = this.carousel.length - 1
            if (nVal < 0) {
                this.show = max
            }
            if (nVal > max) {
                this.show = 0
            }
        },
    },
    mounted() {
        setInterval(() => {
            this.show = this.show + 1
        }, 5000)
    },

    methods: {
        setShow(index) {
            this.setTransition(index)
            this.show = index
        },
        setTransition(index) {
            if (index > this.show) {
                this.transitionName = 'left-in'
            } else {
                this.transitionName = 'right-in'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.carousel {
    position: relative;
}
.dots {
    position: absolute;
    top: -24px;
    right: 12px;
    display: flex;
    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 4px;
        opacity: 0.5;
        cursor: pointer;
        &:last-child {
            margin-right: 0;
        }
    }
}
.hot .dot {
    background-color: #fff;
    &.active {
        opacity: 1;
    }
}
.related .dot {
    background-color: #aaa;
    &.active {
        background-color: map-get($color, main);
        opacity: 1;
    }
}
.view {
    width: 100%;
    padding-top: 30%;
    @include media(768) {
        padding-top: 15%;
    }
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
}
li {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.4rem;
    width: 100%;
    a {
        width: 100%;
        display: block;
        padding: 0 12px;
        margin-bottom: 12px;
        font-weight: 600;
        &:hover {
            opacity: 0.5;
        }
    }
    p {
        width: 100%;
        margin: 0;
        padding-left: 12px;
    }
    svg {
        margin-right: 8px;
    }
}
.left-in-enter {
    transform: translateX(100%);
}
.left-in-enter-active {
    transition: transform 0.5s;
}
.left-in-enter-to {
    transform: translateX(0);
}
.left-in-leave {
    transform: translateX(0);
}
.left-in-leave-active {
    transition: transform 0.5s;
}
.left-in-leave-to {
    transform: translateX(-100%);
}

.right-in-enter {
    transform: translateX(-100%);
}
.right-in-enter-active {
    transition: transform 0.5s;
}
.right-in-enter-to {
    transform: translateX(0);
}
.right-in-leave {
    transform: translateX(0);
}
.right-in-leave-active {
    transition: transform 0.5s;
}
.right-in-leave-to {
    transform: translateX(100%);
}
</style>
