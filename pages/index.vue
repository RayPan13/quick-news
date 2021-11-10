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
            <the-subscribe />
        </main>
        <the-footer />
        <the-copyright />
    </div>
</template>
<script>
import TheCover from '@/components/TheCover.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
import TheFilter from '@/components/TheFilter.vue'
import TheCategory from '@/components/TheCategory.vue'
import TheSubscribe from '@/components/TheSubscribe.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheCopyright from '@/components/TheCopyright.vue'
export default {
    components: {
        TheCover,
        TheHeader,
        TheKv,
        TheFilter,
        TheCategory,
        TheSubscribe,
        TheFooter,
        TheCopyright,
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
            this.lifestyle = await this.$axios.$get('http://localhost:3000/lifestyle.json').catch(() => {
                return {}
            })
            this.sport = await this.$axios.$get('http://localhost:3000/sport.json').catch(() => {
                return {}
            })
            this.travel = await this.$axios.$get('http://localhost:3000/travel.json').catch(() => {
                return {}
            })
        },
    },
}
</script>
