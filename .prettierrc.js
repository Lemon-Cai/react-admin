
module.exports = {
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  overrides: [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
  "jsxBracketSameLine": false,
  "bracketSameLine": false,
  pluginSearchDirs: false,
  // plugins: [],
  // organizeImportsSkipDestructiveCodeActions: false,
};