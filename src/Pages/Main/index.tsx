/*
 * @Author: CaiPeng
 * @Date: 2022-11-21 16:58:30
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-21 10:12:04
 * @FilePath: \React\SelectDate\src\Pages\Main\index.tsx
 * @Description:
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Icon, {
  MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined
} from '@ant-design/icons'
import { Avatar, Dropdown, Layout, Menu, Modal } from 'antd'
import type { MenuProps } from 'antd/es/menu'

// import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import styled from 'styled-components'

import request from 'utils/Request'

import './index.scss'
import SideMenu from './SideMenu'

interface IState {
  firstCollapsed: boolean
  secondCollapsed: boolean
  visible: boolean
  redirectToLogin: boolean
  [PropName: string]: any
}

type DataType = { id: string; name: string; children: Array<any> }

type MenusType = {
  data: Array<DataType>
  selectedFirstKeys?: Array<any>
  selectedFirstMenu?: DataType | undefined
}

// type MenuItem = Required<MenuProps>['items'][number]

// const HeartSvg = () => (
//   <svg width='1em' height='1em' fill='currentColor' viewBox='0 0 1024 1024'>
//     <path d='M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z' />
//   </svg>
// )

// const PieChartIcon = (props: Partial<CustomIconComponentProps>) => (
//   <Icon component={PieChartSvg} {...props} />
// );

const StyledSider = styled.div`
  display: flex;
`

const PieChartSvg = () => (
  <svg
    className='icon'
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    // p-id='1222'
    width='1em'
    height='1em'>
    <path
      d='M435.2 1024c-116.224 0-225.536-45.2608-307.712-127.488S0 705.024 0 588.8c0-116.224 45.2608-225.536 127.488-307.712S318.976 153.6 435.2 153.6a25.6 25.6 0 0 1 25.6 25.6V563.2h384a25.6 25.6 0 0 1 25.6 25.6c0 116.224-45.2608 225.536-127.488 307.712S551.424 1024 435.2 1024zM409.6 205.6192c-199.8336 13.2096-358.4 180.0192-358.4 383.1808C51.2 800.5632 223.4368 972.8 435.2 972.8c203.1104 0 369.92-158.5664 383.1808-358.4H435.2a25.6 25.6 0 0 1-25.6-25.6V205.6192z'
      p-id='1223'></path>
    <path
      d='M947.2 512h-409.6a25.6 25.6 0 0 1-25.6-25.6v-409.6a25.6 25.6 0 0 1 25.6-25.6c116.224 0 225.536 45.2608 307.712 127.488S972.8 370.176 972.8 486.4a25.6 25.6 0 0 1-25.6 25.6zM563.2 460.8h357.5808A384.6656 384.6656 0 0 0 563.2 103.2192V460.8z'
      p-id='1224'></path>
  </svg>
)

const Main: React.FC = () => {
  // 菜单集合
  const [menusState, setMenusState] = useState<MenusType>({
    data: []
  })

  const [state, setState] = useState<IState>({
    visible: false,
    redirectToLogin: false,
    firstCollapsed: false,
    secondCollapsed: false
  })

  useEffect(() => {
    ; (async function () {
      // TODO: 判断是否已经登录，若未登录，重定向到登录页
      let response = await _initMenus()
      setMenusState(response)
    })()
    return () => { }
  }, []) // eslint-disable-line

  const _initMenus = async () => {
    let response: { code: number; data: Array<DataType> } = await request({
      url: '/platform/getMenuInfos',
      // data,
      method: 'post'
    })
    let menus: DataType[] = []
    let selectedFirstMenu = {} as DataType
    let selectedFirstKeys = []
    if (response.code === 200) {
      let { data = [] } = response
      if (data.length > 0) {
        menus = data
        selectedFirstMenu = data[0]
        selectedFirstKeys.push(selectedFirstMenu.id)
      }
    }
    console.log('menus:', response)
    return Promise.resolve({
      data: menus,
      selectedFirstMenu,
      selectedFirstKeys
    })
  }

  // 点击菜单收起展开
  const handleCollapseMenu = () => {
    setState({
      ...state,
      firstCollapsed: !state.firstCollapsed
    })
  }
  // 点击菜单收起展开
  const handleCollapseSecondMenu = () => {
    setState({
      ...state,
      secondCollapsed: !state.secondCollapsed
    })
  }

  // { item, key, keyPath, domEvent }
  const handleMenuClick: Required<MenuProps>['onClick'] = useCallback(
    e => {
      switch (Number(e.key)) {
        case 1:
          // 跳转消息中心
          console.log('消息中心')
          break
        case 2:
          Modal.confirm({
            title: '提示',
            content: '确定要退出登录吗?',
            okText: '确定',
            cancelText: '取消',
            onOk() {
              // store.dispatch({
              //   type: 'setUser',
              //   filter: {}
              // })
              setTimeout(() => {
                setState({ ...state, redirectToLogin: true })
              }, 1000)
              setState({ ...state, visible: false })
            },
            onCancel() {
              setState({ ...state, visible: false })
            }
          })
          break
        default:
          break
      }
    },
    [state]
  )

  const setting_menu = useMemo(
    () => (
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            key: 1,
            label: '消息中心'
          },
          {
            key: 3,
            label: '个人设置'
          },
          {
            type: 'divider' // Must have
          },
          {
            key: 2,
            label: '退出登录'
          }
        ]}>
        {/* <Menu.Item key={1}>消息中心</Menu.Item>
        <Menu.Item key={2}>退出登录</Menu.Item> */}
      </Menu>
    ),
    [handleMenuClick]
  )

  const handleVisibleChange = (flag: boolean) => {
    setState({ ...state, visible: flag })
  }

  // 一级菜单点击
  const handleFirstMenuClick = ({ key }: { key: string }) => {
    setMenusState(prev => ({
      ...prev,
      selectedFirstKeys: [key],
      selectedFirstMenu: menusState.data.find(v => v.id === key)
    }))
  }

  if (state.redirectToLogin) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <Layout className='page-layout'>
      <Layout.Sider
        width={180}
        theme='light'
        trigger={null}
        className='left-nav-container'
        collapsible
        collapsed={state.firstCollapsed}
      // onCollapse={handleCollapseMenu}
      >
        <div className='left-nav'>
          <div
            className='left-nav-header'
            style={{ textAlign: 'center', lineHeight: '50px', fontSize: '24px' }}>
            {/* <img
                src={logo}
                alt='logo'
              /> */}
            {state.firstCollapsed ? (
              <MenuUnfoldOutlined onClick={handleCollapseMenu} />
            ) : (
              <MenuFoldOutlined onClick={handleCollapseMenu} />
            )}
          </div>
          <div className='left-nav-content'>
            <Menu
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              selectedKeys={state.selectedFirstKeys}
              onClick={handleFirstMenuClick}
              mode='inline'
              theme='light'
            // 放开有警告
            // inlineCollapsed={state.firstCollapsed}
            >
              {menusState.data.map(item => (
                <Menu.Item key={item.id}>
                  {/* Icon自定组件 错误用法 */}
                  {/* <Icon component={<PieChartSvg />} /> */}
                  <Icon component={PieChartSvg} style={{ fontSize: '16px' }} />
                  <span>{item.name}</span>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </Layout.Sider>

      <Layout>
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
          {/* <Icon
              className='trigger'
              type={state.firstCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            /> */}
          {/* {state.firstCollapsed ? (
              <MenuUnfoldOutlined onClick={handleCollapseMenu} />
            ) : (
              <MenuFoldOutlined onClick={handleCollapseMenu} />
            )} */}
          <div className='user-header'>
            <Dropdown
              overlay={setting_menu}
              onOpenChange={handleVisibleChange}
              open={state.visible}>
              <Avatar icon={<UserOutlined />} size={42} className='user-avatar' />
            </Dropdown>
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Sider
            width={180}
            theme='light'
            // trigger={null}
            className='left-nav-container'
            collapsible
            collapsed={state.secondCollapsed}
            onCollapse={handleCollapseSecondMenu}>
            <div className='left-nav'>
              {menusState.selectedFirstMenu &&
                menusState.selectedFirstMenu?.children?.length > 0 && (
                  <SideMenu menus={menusState.selectedFirstMenu.children} onClickMenu={() => { }} />
                )}
            </div>
          </Layout.Sider>

          <Layout>
            <Layout.Content
              style={{
                margin: '16px',
                // padding: 24,
                background: '#fff'
              }}>
              Content
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              Ant Design @2022 Created by lemonC
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main
