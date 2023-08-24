module.exports = () => {
  return {
    pkg: ['stylelint', 'prettier', 'postcss', '@hovey/stylelint-config-basic'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.cjs',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc.cjs',
    ],
  }
}
