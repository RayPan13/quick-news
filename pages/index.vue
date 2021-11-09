<template>
    <div id="index">
        <the-cover />
        <the-header :scroll-top="scrollTop" />
        <main>
            <the-kv />
            <the-filter />
            <the-category :post-data="sport" />
            <the-category :post-data="travel" />
            <the-category :post-data="lifestyle" />
        </main>
    </div>
</template>
<script>
import TheCover from '@/components/TheCover.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
import TheFilter from '@/components/TheFilter.vue'
import TheCategory from '@/components/TheCategory.vue'
export default {
    components: {
        TheCover,
        TheHeader,
        TheKv,
        TheFilter,
        TheCategory,
    },
    data() {
        return {
            scrollTop: 0,
            sport: {},
            lifestyle: {},
            travel: {},
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollhandler)
        this.fetchPost()
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollhandler)
    },
    methods: {
        scrollhandler() {
            this.scrollTop = document.documentElement.scrollTop
        },
        async fetchPost() {
            this.sport = await this.$axios.$get('http://localhost:3000/sport.json')
            this.lifestyle = await this.$axios.$get('http://localhost:3000/lifestyle.json')
            this.travel = await this.$axios.$get('http://localhost:3000/travel.json')
        },
    },
}
</script>
