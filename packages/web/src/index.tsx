/*
 * @Author: CaiPeng
 * @Date: 2023-03-24 10:31:13
 * @LastEditors: caipeng
 * @LastEditTime: 2023-06-26 15:21:40
 * @FilePath: \React\SelectDate\packages\web\src\index.tsx
 * @Description: 
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
// import {RouterProvider} from 'react-router-dom'
// redux
import { Provider as ReduxProvider } from 'react-redux'
// antd
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { store } from '@web/store'
import { loadOidcUser, OidcUser } from '@web/config/oidc_setting'
import { setUserInfo } from '@web/store/slicers/Login'

import App from './App'

async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    // const worker = require('./mock/browser').default
    const { worker } = require('./mock/browser')
    try {
      await worker.start({
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
      return Promise.resolve()
    } catch (error) {
      console.log(`${error}`)
    }
  }
}

function render () {
  const root = createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </React.StrictMode>
    </ConfigProvider>
  )
}


prepare().then(async () => {
  await loadOidcUser(
    (provided: OidcUser | null) => provided && store.dispatch(setUserInfo(provided))
  )
  render()
}).catch(() => {
  render()
})
