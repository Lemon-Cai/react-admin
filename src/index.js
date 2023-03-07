import React from 'react'
import { createRoot } from 'react-dom/client'
// import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import './utils/ProtoObject'

import 'assets/style/index.scss'
// import App from './App'

import Routes from './routes'

// 引入mock数据
import './mock'
import EasyAgentSDK from 'utils/Buried'

window.SDK = new EasyAgentSDK({
  appId: 'application_id',
  // baseUrl: '//aegis.example.com/collect',
  onPageShow() {
      window.SDK.actionReport({
          data: {} // 其他必要传递的信息
      })
  }
});

window.SDK.setConfig({
  userId: 'UserInfo.userId', // 当前用户 id
  userName: 'UserInfo.userName', // 当前用户 name
  url: '/platform/logger'
})

const root = createRoot(document.getElementById('container'))
root.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ConfigProvider>
)
