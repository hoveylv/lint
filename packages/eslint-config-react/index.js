module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@hovey/eslint-config-typescript',
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
