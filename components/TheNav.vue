<template>
    <nav :class="{ open }">
        <ul>
            <li v-for="item of menu" :key="item.id">
                <a :href="item.url">{{ item.name }}</a>
            </li>
            <li>
                <a href="javascript:;"><fa :icon="['fas', 'search']" /></a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'TheNav',
    data() {
        return {
            menu: [
                {
                    id: 1,
                    name: 'FRONT PAGE',
                    url: 'javascript:;',
                },
                {
                    id: 2,
                    name: 'PAGE',
                    url: 'javascript:;',
                },
                {
                    id: 3,
                    name: 'POST(CATEGORY)',
                    url: 'javascript:;',
                },
                {
                    id: 4,
                    name: 'SINGLE(POST)',
                    url: 'javascript:;',
                },
                {
                    id: 5,
                    name: 'CONTACT',
                    url: 'javascript:;',
                },
                {
                    id: 6,
                    name: '404(ERROR)',
                    url: 'javascript:;',
                },
                {
                    id: 7,
                    name: 'SUBMENUS',
                    url: 'javascript:;',
                },
            ],
        }
    },
    computed: {
        open() {
            return this.$store.state.isOpen
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
nav {
    z-index: 99;
    @include media(1200) {
        position: fixed;
        top: 0;
        left: -600px;
        width: 300px;
        height: 100vh;
        background-color: map-get($color, main);
        transition: left 0.5s;
    }
    &.open {
        left: 0;
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        @include media(1200) {
            flex-wrap: wrap;
            padding: 24px;
        }
    }
    li {
        position: relative;
        list-style: none;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        margin-right: 24px;
        @include media(1200) {
            flex-basis: 100%;
        }
        &:last-child {
            margin-right: 0;
        }
        &::after {
            content: '';
            display: none;
            position: absolute;
            width: 100%;
            height: 4px;
            background-color: map-get($color, main);
            bottom: 0;
            left: 0;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    a {
        display: block;
        padding: 32px 0;
        @include media(1200) {
            padding: 24px 0;
        }
    }
}
</style>
