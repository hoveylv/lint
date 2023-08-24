module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@hovey/eslint-config-vue'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.cjs',
      'base/.eslintignore',
      'eslint-vue/.eslintrc.cjs',
    ],
  }
}
