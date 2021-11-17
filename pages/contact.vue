<template>
    <div id="contact">
        <main>
            <the-intro :intro="intro" />
            <div class="container">
                <div class="info">
                    <h2>{{ info.title }}</h2>
                    <p>{{ info.desc }}</p>
                    <div class="box">
                        <div v-for="obj of info.contact" :key="obj.id" class="item">
                            <ul>
                                <li v-for="item of obj.list" :key="item.id">{{ item.text }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="social">
                        <ul>
                            <li v-for="obj of info.social" :key="obj.name">
                                <a :href="obj.url">{{ obj.name }}</a>
                                <fa :icon="[obj.icon[0], obj.icon[1]]" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form"></div>
            </div>
            <the-map />
        </main>
    </div>
</template>
<script>
import TheIntro from '@/components/TheIntro.vue'
import TheMap from '@/components/TheMap.vue'
export default {
    components: { TheIntro, TheMap },
    data() {
        return {
            intro: {
                image: 'https://picsum.photos/1920/1080.jpg?random=3',
                title: 'Contact',
                subtitle: '',
                tag: false,
            },
            info: {
                title: 'Feel Free to Contact Us',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis odio sit amet turpis feugiat condimentum nec ac neque. Duis porta, nunc volutpat varius lobortis.',
                contact: [
                    {
                        id: 'left',
                        list: [
                            { id: 'addr', icon: '', text: '7457 River Street Buffalo, NY 14224' },
                            { id: 'email', icon: '', text: 'info@example.com' },
                            { id: 'phone', icon: '', text: '+123 456 7890' },
                        ],
                    },
                    {
                        id: 'right',
                        list: [
                            { id: 'addr', icon: '', text: '813 Stonybrook Road Champaign, IL 61821' },
                            { id: 'email', icon: '', text: 'office@example.com' },
                            { id: 'phone', icon: '', text: '+098 765 4321' },
                        ],
                    },
                ],
                social: [
                    { url: 'javascript:;', icon: ['fab', 'facebook-f'], name: 'fb' },
                    { url: 'javascript:;', icon: ['fab', 'twitter'], name: 'twitter' },
                    { url: 'javascript:;', icon: ['fab', 'linkedin-in'], name: 'linked' },
                ],
            },
        }
    },
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
<style lang="scss" scoped>
@import '@/assets/scss/variable';
#contact {
    .container {
        display: flex;
    }
    .info {
        flex-basis: 50%;
    }
    .form {
        flex-basis: 50%;
    }
}
</style>
