<template>
    <div id="search">
        <main>
            <the-intro :intro="intro" />
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
export default {
    components: { TheIntro },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=5',
                title: 'Search Results',
                subtitle: '',
                tag: false,
            },
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
</style>
