const routerBase =
    process.env.DEPLOY_ENV === 'GH_PAGES'
        ? { axios: { baseURL: '/quick-news/' }, router: { base: '/quick-news/' } }
        : {}
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Quick News',
        meta: [
            { charset: 'utf-8' },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge,chrome=1',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'title', name: 'title', content: 'Quick News' },
            { hid: 'description', name: 'description', content: '共用的描述' },
            { hid: 'keywords', name: 'keywords', content: 'html,css,js,vue,nuxt' },
            { hid: 'author', name: 'author', content: 'RayPan' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/normalize.css', '@/assets/scss/basic.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/font-awesome',
        {
            src: '@/plugins/aos',
            ssr: false,
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['nuxt-fontawesome', '@nuxtjs/axios'],
    fontawesome: {
        component: 'fa',
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas'],
            },
            {
                set: '@fortawesome/free-regular-svg-icons',
                icons: ['far'],
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab'],
            },
        ],
    },
    ...routerBase,
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    generate: {
        subFolders: false,
    },
}
