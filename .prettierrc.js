/*
 * @Author: CaiPeng
 * @Date: 2023-03-16 10:43:07
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-21 11:20:02
 * @FilePath: \React\SelectDate\.prettierrc.js
 * @Description: 
 */

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
  plugins: [
    // require.resolve('prettier-plugin-organize-imports'),
    // require.resolve('prettier-plugin-packagejson'),
  ],
  // organizeImportsSkipDestructiveCodeActions: false,
};