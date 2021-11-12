<template>
    <div class="carousel">
        <div class="dots" :class="box">
            <div v-for="num of carousel.length" :key="num" class="dot" :class="{ active: num === show }"></div>
        </div>
        <div class="view">
            <ul>
                <li v-for="obj of carousel" :key="obj.title">
                    <a :href="obj.url">{{ obj.title }}</a>
                    <p class="date"><fa :icon="['far', 'calendar']" />{{ obj.date }}</p>
                </li>
            </ul>
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
        show: {
            type: Number,
            default: 1,
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
    overflow: hidden;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}
li {
    font-size: 1.4rem;
    flex-basis: 100%;
    flex-shrink: 0;
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
</style>
