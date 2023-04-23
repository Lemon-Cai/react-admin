/*
 * @Author: CaiPeng
 * @Date: 2023-03-24 10:31:13
 * @LastEditors: caipeng
 * @LastEditTime: 2023-04-07 16:07:42
 * @FilePath: \React\SelectDate\packages\web\src\index.tsx
 * @Description: 
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
// import {RouterProvider} from 'react-router-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

// import 'assets/style/index.scss'
// 路由
import Routes from './routes'

// import App from './App'
// 引入mock数据
// import './mock'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <Routes />
    </React.StrictMode>
  </ConfigProvider>
)
