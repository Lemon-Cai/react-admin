import React, { useState, useRef, Component, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import classnames from 'classnames'

import { selectUserInfo, selectCollapsed,
  selectMenuMode,
  setCollapsed } from '@web/store/slicers/Login'
import { useAppDispatch, useAppSelector } from '@web/store/hooks'
import { getKeyName, isAuthorized } from '@web/utils/common'

import Header from '@web/components/Header'
import MenuView from '@web/components/MenuView'

import styles from './index.module.scss'
/* eslint-disable */
const noNewTab = ['/login'] // 不需要新建 tab的页面
const noCheckAuth = ['/', '/403', '/test-api', '/workspace'] // 不需要检查权限的页面
// 检查权限
const checkAuth = (newPathname: string): boolean => {
  // 不需要检查权限的
  if (noCheckAuth.includes(newPathname)) {
    return true
  }
  const { tabKey: currentKey } = getKeyName(newPathname)
  return isAuthorized(currentKey)
}

interface PanesItemProps {
  title: string
  content: Component | React.FC| undefined
  key: string
  closable: boolean
  path: string
}


const Container = () => {

  const history = useNavigate();
  let location = useLocation();

  const userInfo = useAppSelector(selectUserInfo)
  const collapsed = useAppSelector(selectCollapsed)
  const menuMode = useAppSelector(selectMenuMode)
  const dispatch = useAppDispatch()

  const [tabActiveKey, setTabActiveKey] = useState<string>('home')
  const [panesItem, setPanesItem] = useState<PanesItemProps>({
    title: '',
    content: undefined,
    key: '',
    closable: false,
    path: ''
  })
  const pathRef: RefType = useRef<string>('')

  const { token } = userInfo

  useEffect(() => {
    if (!collapsed) {
      // 已折叠时,不修改为折叠. 小屏幕依然根据窗体宽度自动折叠.
      dispatch(setCollapsed(document.body.clientWidth <= 1366))
    }
    
     // 未登录
     if (!token && location.pathname !== '/login') {
      history('/login', {
        replace: true
      })
      return
    }

    
    // const { tabKey, title, component: Content } = getKeyName(location.pathname)
    // // 新tab已存在或不需要新建tab，return
    // if (location.pathname === pathRef.current || noNewTab.includes(location.pathname)) {
    //   setTabActiveKey(tabKey)
    //   return
    // }

    // // 检查权限，比如直接从地址栏输入的，提示无权限
    // const isHasAuth = checkAuth(location.pathname)
    // if (!isHasAuth) {
    //   const errorUrl = '/403'
    //   const {
    //     tabKey: errorKey,
    //     title: errorTitle,
    //     component: errorContent
    //   } = getKeyName(errorUrl)
    //   setPanesItem({
    //     title: errorTitle,
    //     content: errorContent,
    //     key: errorKey,
    //     closable: true,
    //     path: errorUrl
    //   })
    //   pathRef.current = errorUrl
    //   setTabActiveKey(errorKey)
    //   history(errorUrl, {
    //     replace: true
    //   })
    //   return
    // }

    // // 记录新的路径，用于下次更新比较
    // const newPath = location.search ? location.pathname + location.search : location.pathname
    // pathRef.current = newPath
    // setPanesItem({
    //   title,
    //   content: Content,
    //   key: tabKey,
    //   closable: tabKey !== 'home',
    //   path: newPath
    // })
    // setTabActiveKey(tabKey)

  }, [history, location.pathname, location.search, token, dispatch, collapsed])


  return (
    <Layout
      className={styles.container}
      onContextMenu={(e) => e.preventDefault()}
      style={{ display: location.pathname?.includes('/login') ? 'none' : 'flex' }}
    >
      {/* <Layout.Sider>
            <Logo>
            <Menu>
              {renderMenuMap(menus)} 通过.content & collapsed 切换 layout 布局
            </Menu>
      */}
      {/* 菜单 */}
      <MenuView menuMode={menuMode} />
      <Layout
        className={classnames(styles.content, {
          [styles.collapsed]: collapsed && menuMode === 'vertical',
          [styles.horizontal]: menuMode !== 'vertical'
        })}
      >
        {/* 头 */}
        <Header />
        {/* 内容 */}
        <Layout.Content>
          {/* <TabPanes
            defaultActiveKey="home"
            panesItem={panesItem}
            tabActiveKey={tabActiveKey}
          /> */}
        </Layout.Content>
      </Layout>
      <BackTop visibilityHeight={1080} />
    </Layout>
  )
}

export default Container