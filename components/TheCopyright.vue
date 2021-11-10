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
</style>
