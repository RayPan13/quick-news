<template>
    <div id="page"></div>
</template>
<script>
export default {
    head: {
        title: 'Page - Quick News',
        meta: [
            { hid: 'title', name: 'title', content: 'Page - Quick News' },
            { hid: 'description', name: 'description', content: 'This is Page - Quick News' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
