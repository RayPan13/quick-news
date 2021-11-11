<template>
    <div id="page">
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
                image: 'https://picsum.photos/1920/1080.webp?random=1',
                title: 'About our working in team Quick News',
                subtitle: 'ABOUT US',
            },
        }
    },
    head: {
        title: 'Page - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Page - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Page - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
