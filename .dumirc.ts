/*
 * @Author: CaiPeng
 * @Date: 2023-03-08 14:45:57
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-20 09:46:46
 * @FilePath: \React\SelectDate\.dumirc.ts
 * @Description: 
 */
import { defineConfig } from 'dumi'
import path from 'path'

console.log('memo.resolve.alias', __dirname)

const BASE_URL = '' // 'react-admin' // '/lemon'

export default defineConfig({
  // favicons: [BASE_URL + '/logo.png'],
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.plugins.delete('copy')
    // console.log('memo.resolve.alias', __dirname)
    // memo.module
    //   .rule('js')
    //   .test(/\.(js|mjs|jsx|ts|tsx)$/)
    //   // .include.add(path.join(__dirname, '..', 'src'))
    //   .include.add(path.join(__dirname, 'src'))
    //   .end()
    //   .exclude.add(/node_modules/)
    //   .end()
    //   .use('babel-loader')
  },
  alias: {
    '@comp': path.join(__dirname, 'src')
  },
  hash: true, // 避免缓存
  // base: BASE_URL,
  // publicPath: BASE_URL + '/', // 配置 webpack 的 publicPath
  // // 配置输出路径。
  // outputPath: 'docs-dist',
  // // 网站描述配置
  // mock: {},
  // 配置 antd 按需加载
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      },
      'antd'
    ]
  ],
    // ----主题配置------
  themeConfig: {
    name: 'React-Admin',
    // logo: BASE_URL + '/images/logo.png', // 本地文件读取不到
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
    darkSwitch: false,
    // sidebar: {
    //   '/guild': [
    //     {
    //       link: '/guild/quick-start',
    //       title: '快速开始',
    //       meta: {},
    //       children: []
    //     }
    //   ],
    //   '/components': [
    //     {
    //       title: '表单 Form',
    //       link: '/components/DateRange',
    //       meta: {},
    //       children: [
    //         {
    //           title: '表单 Form',
    //           link: '/components/DateRange',
    //           meta: {},
    //           children: []
    //         }
    //       ]
    //     }
    //     // {
    //     //   title: '表格 Table',
    //     //   path: '/components/table',
    //     //   meta: {},
    //     //   children: []
    //     // }
    //   ]
    // },
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: 'override',
      value: [
        {
          title: '教程',
          link: '/guide'
        },
        {
          title: '博客',
          link: '/blogs'
        },
        {
          title: '数据结构',
          link: '/data-structure'
        },
        {
          title: '组件',
          link: '/components'
        },
        {
          title: 'GitHub',
          // link: 'https://github.com/viewweiwu/amiya'
          link: 'https://github.com/CalvinP-Cai/react-admin'
        }
      ]
    }
  },
  // -------重点配置项---------
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/components/index.ts',
    // docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: './src/components' }]
    // includes 2.0废弃了拆分成 docDirs, atomDirs
    // includes: ['docs']
    // locales: [{ id: 'zh-CN', name: '中文' }] // 使用默认值
  }
})
