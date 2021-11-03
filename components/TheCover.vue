<template>
    <div class="cover" :class="{ active }" @click="closeNav"></div>
</template>

<script>
export default {
    name: 'TheCover',
    computed: {
        active() {
            return this.$store.state.isOpen
        },
    },
    methods: {
        closeNav() {
            this.$store.dispatch('updateNav', false)
        },
    },
}
</script>

<style lang="scss" scoped>
.cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9;
    display: none;
    &.active {
        display: block;
    }
}
</style>
