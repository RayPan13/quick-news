<template>
    <div id="index">
        <the-cover />
        <the-header :scroll-top="scrollTop" />
        <main>
            <the-kv />
            <the-filter />
            <the-category />
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
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollhandler)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollhandler)
    },
    methods: {
        scrollhandler() {
            this.scrollTop = document.documentElement.scrollTop
        },
    },
}
</script>
