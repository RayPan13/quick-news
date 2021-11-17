<template>
    <div id="contact">
        <main>
            <the-intro :intro="intro" />
            <the-map />
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
import TheMap from '@/components/TheMap.vue'
export default {
    components: { TheIntro, TheMap },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=3',
                title: 'Contact',
                subtitle: '',
                tag: false,
            },
        }
    },
    head: {
        title: 'Contact - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Contact - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Contact - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
