import { defineConfig } from 'dumi'
import path from 'path'

const BASE_URL = 'react-admin' // '/lemon'
export default defineConfig({
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'React-Admin Component', // 组件库名称
  // description: "",
  // keywords： [],
  favicon: BASE_URL + '/images/logo.png',
  logo: BASE_URL + '/images/logo.png',

  hash: true, // 避免缓存
  base: BASE_URL,
  outputPath: 'docs-dist',
  publicPath: BASE_URL + '/',
  // 网站描述配置
  mock: {},
  //  将悉数路由输出为 HTML 目录结构，避免刷新页面时 404。
  // exportStatic: {},
  // 配置 antd 按需加载
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  themeConfig: {
    darkSwitch: false
  },
  theme: { '@c-primary': '#1DA57A' },
  navs: [
    {
      title: '教程',
      path: '/guild'
    },
    {
      title: '组件',
      path: '/components'
    },
    // {
    //   title: '示例',
    //   path: '/template'
    // },
    // {
    //   title: '转换工具',
    //   path: '/tools'
    // },
    // {
    //   title: '疑问',
    //   path: '/faq'
    // },
    // {
    //   title: '更新日志',
    //   path: '/changelog'
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/viewweiwu/amiya'
    }
  ],
  menus: {
    '/guild': [],
    '/components': []
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/components/index.ts',
    // includes: ['docs']
  },
  locales: [{ id: 'zh-CN', name: '中文' }],
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.resolve.alias.set('assets', path.join(__dirname, '../src/assets'))
    memo.resolve.alias.set('utils', path.join(__dirname, '../src/utils'))
    memo.resolve.alias.set('components', path.join(__dirname, '../src/components'))
  }
})