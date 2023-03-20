
module.exports = {
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  overrides: [
    { "files": ".prettierrc", "options": { "parser": "json" } },
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
  pluginSearchDirs: false,
  plugins: [
    // require.resolve('prettier-plugin-organize-imports'),
    // require.resolve('prettier-plugin-packagejson'),
  ],
  // organizeImportsSkipDestructiveCodeActions: false,
};