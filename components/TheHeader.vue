<template>
    <header :class="{ black: scrollTop > position }">
        <div class="container">
            <div class="logo">
                <a href="javascript:;">home</a>
                <span>Quick</span>News<span>.</span>
            </div>
            <TheNav />
            <div class="menu" @click="openNav">
                <div class="line"></div>
            </div>
        </div>
    </header>
</template>

<script>
import TheNav from '@/components/TheNav.vue'
export default {
    name: 'TheHeader',
    components: {
        TheNav,
    },
    props: {
        scrollTop: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            position: 100,
        }
    },
    methods: {
        openNav() {
            this.$store.dispatch('updateNav', true)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
header {
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: background 0.5s;
    &.black {
        background-color: #000;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.logo {
    position: relative;
    a {
        font-size: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    span {
        color: map-get($color, main);
    }
}
.menu {
    display: none;
    @include media(1200) {
        display: block;
    }
    width: 24px;
    height: 24px;
    position: relative;
    margin: 32px 0;
    cursor: pointer;
    .line {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 4px;
        background-color: #fff;
        &::before,
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            background-color: #fff;
            position: absolute;
            left: 0;
        }
        &::before {
            top: 8px;
        }
        &::after {
            top: -8px;
        }
    }
}
</style>
