<template>
    <div id="post-category">
        <main>
            <the-intro :intro="intro" />
            <the-post />
        </main>
    </div>
</template>

<script>
import TheIntro from '@/components/TheIntro.vue'
import ThePost from '@/components/ThePost.vue'
export default {
    components: { TheIntro, ThePost },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=2',
                title: 'Lifestyle',
                subtitle: 'NEWS',
                tag: false,
            },
            lifestyle: {},
        }
    },
    head: {
        title: 'POST(Category) - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'POST(Category) - Quick News' },
            { hid: 'description', name: 'description', content: 'This is POST(Category) - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
