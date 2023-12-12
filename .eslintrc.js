module.exports = {
    extends: ['plugin:prettier/recommended'],

    plugins: ['prettier'],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
