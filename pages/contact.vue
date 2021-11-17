<template>
    <div id="contact"></div>
</template>
<script>
export default {
    head: {
        title: 'Contact - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Contact - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Contact - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
