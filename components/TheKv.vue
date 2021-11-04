<template>
    <div class="kv">
        <div class="carousel">
            <div class="item">
                <div class="container">
                    <div class="context">
                        <div class="type">LIFESTYLE</div>
                        <h2>Oceans May Reduce Sea Life</h2>
                        <div class="info">
                            <div class="author">
                                <span class="icon">
                                    <fa :icon="['far', 'user']" />
                                </span>
                                <span>John Adams</span>
                            </div>
                            <div class="comment">
                                <span class="icon">
                                    <fa :icon="['far', 'comment']" />
                                </span>
                                <span class="count">2</span>
                                <span>comments</span>
                            </div>
                        </div>
                    </div>
                    <div class="date">
                        <span class="icon">
                            <fa :icon="['far', 'calendar']" />
                        </span>
                        <span class="month">July</span>
                        <span class="day">27</span>
                    </div>
                </div>
            </div>
            <div class="dots">
                <div class="container">
                    <ul>
                        <li class="active"></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheKv',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.kv {
    width: 100%;
}
.carousel {
    position: relative;
    width: 100%;
    .item {
        background-image: url('https://picsum.photos/1920/1080.webp?random=1001');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 600px;
        position: relative;
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
        &.active {
            background-color: rgba(255, 255, 255, 1);
        }
    }
}
</style>
