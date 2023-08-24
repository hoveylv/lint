module.exports = () => {
  return {
    pkg: [
      'eslint',
      'prettier',
      'typescript',
      '@hovey/eslint-config-typescript',
    ],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.cjs',
      'base/.eslintignore',
      'eslint-typescript/.eslintrc.cjs',
    ],
  }
}
