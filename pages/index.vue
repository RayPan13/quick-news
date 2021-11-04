<template>
    <div id="index">
        <the-cover />
        <the-header :scroll-top="scrollTop" />
        <the-kv />
    </div>
</template>
<script>
import TheCover from '@/components/TheCover.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
export default {
    components: {
        TheCover,
        TheHeader,
        TheKv,
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
