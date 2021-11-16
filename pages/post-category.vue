<template>
    <div id="post-category">
        <main>
            <the-intro :intro="intro" />
        </main>
    </div>
</template>

<script>
import TheIntro from '@/components/TheIntro.vue'
export default {
    components: { TheIntro },
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
