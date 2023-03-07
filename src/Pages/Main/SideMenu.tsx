/*
 * @Author: CaiPeng
 * @Date: 2022-12-30 15:01:57
 * @LastEditors: caipeng
 * @LastEditTime: 2023-01-18 13:16:56
 * @FilePath: \React\SelectDate\src\Pages\Main\SideMenu.tsx
 * @Description: 
 */
import React from 'react'

import { Menu } from 'antd'

type DataType = { id: string; name: string; type: string; children: Array<any>; tab: Array<any> }

type SideMenuPropType = {
  menus: DataType[];
  onClickMenu: () => void
}

const SideMenu = ({ menus = [], onClickMenu }: SideMenuPropType) => {
  return (
    <Menu
      mode='inline'
      theme='light'
      // onClick={handleFirstMenuClick}
    >
      {menus.map(item => {
        if (Array.isArray(item.children) && item.children.length > 0) {
          return (
            <Menu.SubMenu key={item.id} title={item.name}>
              {
                item.children.map(child => <Menu.Item key={child.id}>{child.name}</Menu.Item>)
              }
            </Menu.SubMenu>
          )
        } else {
          return (
            <Menu.Item key={item.id}>
              {/* <UserOutlined style={{ fontSize: '16px' }} /> */}
              <span>{item.name}</span>
            </Menu.Item>
          )
        }
      })}
    </Menu>
  )
}

export default SideMenu
