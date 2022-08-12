module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  plugins: ['detox', 'jest'],
  rules: {
    'react-native/no-inline-styles': 'off',
  },
};
