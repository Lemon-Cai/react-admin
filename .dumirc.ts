import { defineConfig } from 'dumi'
import path from 'path'

console.log('memo.resolve.alias', __dirname)

const BASE_URL = '' // 'react-admin' // '/lemon'

export default defineConfig({
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.plugins.delete('copy')
    // console.log('memo.resolve.alias', __dirname)
    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(path.join(__dirname, 'src'))
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader')
  },
})

// export default {
//   mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
//   // # dumi 1.x 用 title 作为组件库名称，如果你希望设置的是组件库名称而非页面标题，请改用 name
//   title: 'React-Admin Component', // 组件库名称
//   // description: "",
//   // keywords： [],
//   // # favicon 配置项升级
//   favicon: BASE_URL + '/images/logo.png',
//   // favicons: [],

//   hash: true, // 避免缓存
//   base: BASE_URL,
//   publicPath: BASE_URL + '/', // 配置 webpack 的 publicPath
//   // 配置输出路径。
//   outputPath: 'docs-dist',
//   // 网站描述配置
//   mock: {},
//   //  将悉数路由输出为 HTML 目录结构，避免刷新页面时 404。
//   // exportStatic: {},
//   // 配置 antd 按需加载
//   extraBabelPlugins: [
//     [
//       'babel-plugin-import',
//       {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: true
//       },
//       'antd'
//     ]
//   ],
//   // theme: { '@c-primary': '#1DA57A' },
//   chainWebpack: (memo, { env, webpack, createCSSRule }) => {
//     memo.plugins.delete('copy')
//     // console.log('memo.resolve.alias', __dirname)
//     memo.module
//       .rule('js')
//       .test(/\.(js|mjs|jsx|ts|tsx)$/)
//       .include.add(path.join(__dirname, 'src'))
//       .end()
//       .exclude.add(/node_modules/)
//       .end()
//       .use('babel-loader')
//     // memo.resolve.alias.set('@', path.join(__dirname, './src'))
//     // memo.resolve.alias.set('assets', path.join(__dirname, './src/assets'))
//     // memo.resolve.alias.set('utils', path.join(__dirname, './src/utils'))
//     // memo.resolve.alias.set('comp', path.join(__dirname, '..', 'src', 'components'))
//   },

//   alias: {
//     comp: path.join(__dirname, '../../../../src', 'components')
//   },
//   // ----主题配置------
//   themeConfig: {
//     name: 'React-Admin Component',
//     logo: BASE_URL + '/images/logo.png',
//     darkSwitch: false,
//     // sidebar: {
//     //   '/guild': [
//     //     {
//     //       link: '/guild/quick-start',
//     //       title: '快速开始',
//     //       meta: {},
//     //       children: []
//     //     }
//     //   ],
//     //   '/components': [
//     //     {
//     //       title: '表单 Form',
//     //       link: '/components/DateRange',
//     //       meta: {},
//     //       children: [
//     //         {
//     //           title: '表单 Form',
//     //           link: '/components/DateRange',
//     //           meta: {},
//     //           children: []
//     //         }
//     //       ]
//     //     }
//     //     // {
//     //     //   title: '表格 Table',
//     //     //   path: '/components/table',
//     //     //   meta: {},
//     //     //   children: []
//     //     // }
//     //   ]
//     // },
//     nav: {
//       // mode可选值有：override、append、prepend
//       // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
//       // - append: 将 value 中的导航追加到约定路由后面
//       // - prepend: 将 value 中的导航添加到约定路由前面
//       mode: 'override',
//       value: [
//         {
//           title: '教程',
//           link: '/guild'
//         },
//         {
//           title: '博客',
//           link: '/blog'
//         },
//         {
//           title: '组件',
//           link: '/components'
//         },
//         {
//           title: 'GitHub',
//           link: 'https://github.com/viewweiwu/amiya'
//         }
//       ]
//     }
//   },
//   //  # navs 升级为 themeConfig.nav
//   // navs: [...],
//   // # menus 升级为 themeConfig.sidebar
//   // menus: {

//   // },

//   // -------重点配置项---------
//   // apiParser: {},
//   // resolve: {
//   //   // 配置入口文件路径，API 解析将从这里开始
//   //   entryFile: './src/components/index.ts',
//   //   docDirs: ['docs', path.resolve(__dirname, 'dumi/docs')]
//   //   // atomDirs: [{ type: 'component', dir: './src/components' }]
//   //   // includes 2.0废弃了拆分成 docDirs, atomDirs
//   //   // includes: ['docs']
//   //   // locales: [{ id: 'zh-CN', name: '中文' }] // 使用默认值
//   // }
// }
