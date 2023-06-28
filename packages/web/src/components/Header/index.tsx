import React from 'react'
import classNames from 'classnames'
import { Layout } from 'antd'

import { useAppSelector } from '@web/store/hooks'
import style from './index.module.scss'

const Header = () => {

  const menuMode = useAppSelector((state) => state.login?.menuMode)

  return (
    <Layout.Header
    className={classNames(style.header, {
      [style.horizontal]: menuMode === 'horizontal'
    })}
    >

    </Layout.Header>
  )
}

export default Header