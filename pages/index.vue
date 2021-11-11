<template>
    <div id="index">
        <main>
            <the-kv />
            <the-filter />
            <the-category :post-data="sport" />
            <the-category :post-data="travel" />
            <the-category :post-data="lifestyle" />
            <the-subscribe />
        </main>
    </div>
</template>
<script>
import TheKv from '@/components/TheKv.vue'
import TheFilter from '@/components/TheFilter.vue'
import TheCategory from '@/components/TheCategory.vue'
import TheSubscribe from '@/components/TheSubscribe.vue'

export default {
    components: {
        TheKv,
        TheFilter,
        TheCategory,
        TheSubscribe,
    },
    data() {
        return {
            sport: {},
            lifestyle: {},
            travel: {},
        }
    },
    mounted() {
        this.fetchPost()
        this.$store.dispatch('updateNav', false)
    },
    methods: {
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
<style lang="scss">
.billboard {
    position: absolute;
    top: 50%;
    left: -96px;
    font-size: 10rem;
    font-weight: 300;
    transform: translate(-50%, -50%) rotate(-90deg);
    color: rgba(255, 255, 255, 0.2);
    z-index: 3;
}
</style>
