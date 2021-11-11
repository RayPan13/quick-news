<template>
    <nav :class="{ open }">
        <ul>
            <li v-for="item of menu" :key="item.id">
                <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                <ul>
                    <li v-for="subItem of item.sub" :key="subItem.id">
                        <a :href="subItem.url">{{ subItem.name }}</a>
                    </li>
                </ul>
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
                    url: '/',
                    sub: false,
                },
                {
                    id: 2,
                    name: 'PAGE',
                    url: '/page',
                    sub: false,
                },
                {
                    id: 3,
                    name: 'POST(CATEGORY)',
                    url: '',
                    sub: false,
                },
                {
                    id: 4,
                    name: 'SINGLE(POST)',
                    url: '',
                    sub: false,
                },
                {
                    id: 5,
                    name: 'CONTACT',
                    url: '',
                    sub: false,
                },
                {
                    id: 6,
                    name: '404(ERROR)',
                    url: '',
                    sub: false,
                },
                {
                    id: 7,
                    name: 'SUBMENUS',
                    url: '',
                    sub: [
                        {
                            id: 71,
                            name: 'Submenu 1',
                            url: '',
                            sub: false,
                        },
                        {
                            id: 72,
                            name: 'Submenu 2',
                            url: '',
                            sub: false,
                        },
                    ],
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
    @include media(1200) {
        position: fixed;
        top: 0;
        left: -600px;
        width: 300px;
        height: 100vh;
        background-color: map-get($color, main);
        transition: left 0.5s;
        z-index: 99;
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
        &:hover {
            ul {
                opacity: 1;
                z-index: 0;
            }
        }
        ul {
            width: 300%;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -2px);
            background-color: map-get($color, main);
            padding: 0 24px;
            opacity: 0;
            z-index: -9;
            transition: opacity 0.5s;
            @include media(1200) {
                position: relative;
                opacity: 1;
                width: auto;
                z-index: 0;
            }
            li:hover {
                &::after {
                    display: none;
                }
            }
        }
    }
    a {
        display: block;
        padding: 32px 0;
        &::after {
            content: '';
            display: none;
            position: absolute;
            width: 100%;
            height: 4px;
            background-color: map-get($color, main);
            bottom: -2px;
            left: 0;
        }
        &:hover {
            &::after {
                display: inline-block;
                @include media(1200) {
                    display: none;
                }
            }
            @include media(1200) {
                color: #000;
            }
        }
        &.nuxt-link-exact-active {
            &::after {
                display: inline-block;
                @include media(1200) {
                    display: none;
                }
            }
            @include media(1200) {
                color: #000;
            }
        }
        @include media(1200) {
            padding: 16px 0;
        }
    }
}
</style>
