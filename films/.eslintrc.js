module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'no-useless-escape': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react/prop-types': ['off'],
        semi: 'warn',
        'prefer-const': 'warn',
        'no-unused-vars': ['warn'],
        'react/jsx-key': ['warn'],
        'react/no-unescaped-entities': ['warn'],
        'no-undef': ['warn'],
    },
};
