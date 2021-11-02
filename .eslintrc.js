module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    rules: {
        eqeqeq: 'off',
        curly: 'error',
        quotes: ['error', 'single'],
        indent: ['error', 4],
    },
}
