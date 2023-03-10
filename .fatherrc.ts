/*
 * @Author: CaiPeng
 * @Date: 2023-03-07 14:30:49
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-08 19:35:05
 * @FilePath: \React\SelectDate\.fatherrc.ts
 * @Description: 
 */
export default {
  entry: 'src/',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'react-admin'
  },
  extractCSS: true,
  lessInBabelMode: true, // babel 模式下做 less 编译
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
}
