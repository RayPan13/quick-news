<template>
    <div id="index">
        <the-cover />
        <the-header />
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
}
</script>
