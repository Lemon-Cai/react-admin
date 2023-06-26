/*
 * @Author: CaiPeng
 * @Date: 2023-03-24 10:31:13
 * @LastEditors: caipeng
 * @LastEditTime: 2023-06-26 09:16:00
 * @FilePath: \React\SelectDate\packages\web\src\index.tsx
 * @Description: 
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
// import {RouterProvider} from 'react-router-dom'
// 路由
import Routes from './routes'
// redux
import { Provider as ReduxProvider } from 'react-redux'

// antd
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'


import { store } from '@web/store'
import { loadOidcUser, OidcUser } from '@web/config/oidc_setting'
import { setUserInfo } from '@web/store/slicers/Login'

let apiReady = Promise.resolve()

if (process.env.NODE_ENV === 'development') {
  // const worker = require('./mock/browser').default
  const { worker } = require('@web/mock/browser')
  apiReady = worker.start({
    serviceWorker: {
      // Points to the custom location of the Service Worker file.
      url: '/mockServiceWorker.js', 
      // options: {
      //   // Narrow the scope of the Service Worker to intercept requests
      //   // only from pages under this path.
      //   scope: '/product'
      // }
    },
    onUnhandledRequest: "bypass"
  })
}

apiReady.then(async () => {
  await loadOidcUser(
    (provided: OidcUser | null) => provided && store.dispatch(setUserInfo(provided))
  )
  const root = createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <ReduxProvider store={store}>
          <Routes />
        </ReduxProvider>
      </React.StrictMode>
    </ConfigProvider>
  )
})
