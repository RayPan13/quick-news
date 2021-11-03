<template>
    <div id="index">
        <the-cover />
        <the-header />
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheCover from '@/components/TheCover.vue'
export default {
    components: {
        TheHeader,
        TheCover,
    },
}
</script>
