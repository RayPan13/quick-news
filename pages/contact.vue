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
                                <li v-for="item of obj.list" :key="item.id">
                                    <fa :icon="[item.icon[0], item.icon[1]]" />
                                    {{ item.text }}
                                </li>
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
                            { id: 'addr', icon: ['fas', 'home'], text: '7457 River Street Buffalo, NY 14224' },
                            { id: 'email', icon: ['fas', 'envelope'], text: 'info@example.com' },
                            { id: 'phone', icon: ['fas', 'phone'], text: '+123 456 7890' },
                        ],
                    },
                    {
                        id: 'right',
                        list: [
                            { id: 'addr', icon: ['fas', 'home'], text: '813 Stonybrook Road Champaign, IL 61821' },
                            { id: 'email', icon: ['fas', 'envelope'], text: 'office@example.com' },
                            { id: 'phone', icon: ['fas', 'phone'], text: '+098 765 4321' },
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
        padding: 48px 20px;
        @include media(990) {
            flex-wrap: wrap;
        }
    }
    .info {
        flex-basis: 50%;
        @include media(990) {
            flex-basis: 100%;
        }
        h2 {
            font-size: 3rem;
            margin: 0 0 24px;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.5;
            margin: 0 0 24px;
        }
        .box {
            display: flex;
            @include media(580) {
                flex-wrap: wrap;
            }
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .item {
            flex-basis: 50%;
            margin-bottom: 12px;
            @include media(580) {
                flex-basis: 100%;
            }
            &:first-child {
                padding-right: 2.5%;
                @include media(580) {
                    padding-right: 0;
                }
            }
            &:last-child {
                padding-left: 2.5%;
                @include media(580) {
                    padding-left: 0;
                }
            }
            li {
                font-size: 1.4rem;
                line-height: 1.5;
                margin-bottom: 8px;
                padding-left: 1.5em;
                position: relative;
                svg {
                    position: absolute;
                    top: 4px;
                    left: 0;
                }
            }
        }
        .social {
            ul {
                display: flex;
            }
            li {
                font-size: 2.5rem;
                position: relative;
                margin-right: 24px;
                svg {
                    transition: color 0.5s;
                }
                a {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    font-size: 0;
                    z-index: 2;
                    &:hover + svg {
                        color: map-get($color, main);
                    }
                }
            }
        }
    }
    .form {
        flex-basis: 50%;
        @include media(990) {
            flex-basis: 100%;
        }
    }
}
</style>
