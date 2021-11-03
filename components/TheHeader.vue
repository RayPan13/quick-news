<template>
    <header>
        <div class="container">
            <div class="logo">
                <a href="javascript:;">home</a>
                <span>Quick</span>News<span>.</span>
            </div>
            <nav>
                <ul>
                    <li v-for="item of menu" :key="item.id">
                        <a :href="item.url">{{ item.name }}</a>
                    </li>
                    <li>
                        <a href="javascript:;"><fa :icon="['fas', 'search']" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
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
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
header {
    width: 100%;
    background-color: #000;
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
nav {
    ul {
        padding: 0;
        margin: 0;
        display: flex;
    }
    li {
        position: relative;
        list-style: none;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        margin-right: 24px;
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
    }
}
</style>
