/*
 * @Author: CaiPeng
 * @Date: 2023-06-27 15:39:11
 * @LastEditors: caipeng
 * @LastEditTime: 2023-06-28 14:06:59
 * @FilePath: \React\SelectDate\packages\web\src\components\MenuView\index.tsx
 * @Description:
 */
import React, { FC, useCallback, useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Layout, Menu, MenuProps } from 'antd';
import { useAppSelector } from '@web/store/hooks';
import {
  selectCollapsed,
  selectTheme,
  selectUserInfo,
} from '@web/store/slicers/Login';

import logo from '@web/assets/img/logo.png';
import { flattenRoutes, getKeyName } from '@web/utils/common';

import { routes } from '@web/routes';

interface MenuViewProps {
  menuMode: 'horizontal' | 'vertical';
}

/* eslint-disable */
type MenuType = CommonObjectType<unknown>;

type MenuItem = Required<MenuProps>['items'][number];

// 获取展开后的路由菜单
const flatMenu = flattenRoutes(routes);

const LogoLink: FC<{ collapsed: boolean }> = ({ collapsed }) => (
  <Link to={{ pathname: '/' }}>
    <div className="flex items-center logo">
      <img alt="logo" src={logo} width="32" />
      {!collapsed && <h1>Antd多页签模板</h1>}
    </div>
  </Link>
);

const MenuView: FC<MenuViewProps> = ({ menuMode }) => {
  const userInfo = useAppSelector(selectUserInfo);
  const collapsed = useAppSelector(selectCollapsed);
  const theme = useAppSelector(selectTheme);

  const { pathname } = useLocation();
  const { tabKey: curKey = 'home' } = getKeyName(pathname);
  // 权限
  const { permission = [] } = userInfo;

  const [current, setCurrent] = useState(curKey);

  const higherMenuKey = useCallback(
    (key = 'home', path = pathname): string => {
      if (key === '403' || flatMenu.some((item) => item?.key === key)) {
        return key;
      }
      const higherPath = (path?.match(/(.*)\//g)?.[0] || '').replace(
        /(.*)\//,
        '$1',
      );
      const { tabKey } = getKeyName(higherPath);
      return higherMenuKey(tabKey, higherPath);
    },
    [pathname],
  );

  useEffect(() => {
    const { tabKey } = getKeyName(pathname);
    const higherKey = higherMenuKey(tabKey);
    setCurrent(higherKey);
  }, [higherMenuKey, pathname]);

  const handleClickMenu = () => {};


  const showKeys = useMemo(() => {
    return collapsed
      ? []
      : flatMenu
          .filter((item) => item.type === 'subMenu')
          .reduce(
            (prev: string[], next) =>
              next.key ? [...prev, next.key] : [...prev],
            [],
          );
  }, [collapsed]);

  const menuItems: MenuItem[] = useMemo(() => {
    // menus 
    return []
  }, [])

  if (menuMode === 'horizontal') {
    return (
      <Layout.Header>
        <LogoLink collapsed={collapsed} />
      </Layout.Header>
    );
  }
  return (
    <Layout.Sider
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        userSelect: 'none',
      }}
      width={220}
    >
      <Menu
        theme={theme}
        defaultOpenKeys={showKeys}
        mode="inline"
        items={menuItems}
        selectedKeys={[current]}
        onClick={handleClickMenu}
      />
    </Layout.Sider>
  );
};

export default MenuView;
