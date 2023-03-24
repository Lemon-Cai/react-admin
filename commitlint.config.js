/*
 * @Author: CaiPeng
 * @Date: 2023-03-24 11:20:04
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-24 15:11:03
 * @FilePath: \React\SelectDate\commitlint.config.js
 * @Description:
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'button',
      ],
    ],
  },
};
