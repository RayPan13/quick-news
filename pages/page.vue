<template>
    <div id="page"></div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('updateNav', false)
    },
}
</script>
