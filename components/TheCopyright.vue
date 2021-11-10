<template>
    <div class="copyright">
        <div class="container">
            <span>2020 © All Rights Reserved</span>
            <ul>
                <li v-for="obj of menu" :key="obj.name">
                    <a :href="obj.url">{{ obj.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheCopyright',
    data() {
        return {
            menu: [
                {
                    name: 'FRONT PAGE',
                    url: 'javascript:;',
                },
                {
                    name: 'PAGE',
                    url: 'javascript:;',
                },
                {
                    name: 'SINGLE(POST)',
                    url: 'javascript:;',
                },
                {
                    name: 'SEARCH RESULT',
                    url: 'javascript:;',
                },
                {
                    name: '404(ERROR)',
                    url: 'javascript:;',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.copyright {
    width: 100%;
    background-color: #333;
    padding: 24px 0;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include media(768) {
            flex-wrap: wrap;
        }
    }
    span {
        color: #888;
        font-size: 1.4rem;
        @include media(768) {
            margin-bottom: 20px;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        color: #fff;
        list-style: none;
        font-size: 1.2rem;
        font-weight: 600;
        padding-right: 12px;
        margin-bottom: 8px;
        &:hover {
            color: map-get($color, main);
        }
        &:last-child {
            padding-right: 0;
        }
        a {
            display: block;
        }
    }
}
</style>
