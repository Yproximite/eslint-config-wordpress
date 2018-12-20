module.exports = {
  extends: [
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-prettier'),
    require.resolve('@yproximite/eslint-config-base'),
  ],
  plugins: [
    'prettier',
  ],
  globals: {
    jQuery: true,
    $: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
