<template>
    <div>
        <the-cover />
        <the-header :scroll-top="scrollTop" />
        <nuxt />
        <the-footer />
        <the-copyright />
    </div>
</template>
<script>
import TheCover from '@/components/TheCover.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheCopyright from '@/components/TheCopyright.vue'
export default {
    components: {
        TheCover,
        TheHeader,
        TheFooter,
        TheCopyright,
    },
    data() {
        return {
            scrollTop: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollhandler)
        this.scrollhandler()
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
