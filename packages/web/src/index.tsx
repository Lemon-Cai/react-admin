/*
 * @Author: CaiPeng
 * @Date: 2023-03-24 10:31:13
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-24 15:32:01
 * @FilePath: \React\SelectDate\packages\web\src\index.tsx
 * @Description: 
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import 'assets/style/index.scss'
// 路由
import Routes from './routes'

// 引入mock数据
import './mock'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ConfigProvider>
)
