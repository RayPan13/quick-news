<template>
    <div id="index">
        <the-cover />
        <the-header :scroll-top="scrollTop" />
        <main>
            <the-kv />
            <the-filter />
        </main>
    </div>
</template>
<script>
import TheCover from '@/components/TheCover.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
import TheFilter from '@/components/TheFilter.vue'
export default {
    components: {
        TheCover,
        TheHeader,
        TheKv,
        TheFilter,
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
