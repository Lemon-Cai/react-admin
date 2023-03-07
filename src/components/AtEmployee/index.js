/*
 * @Author: CaiPeng
 * @Date: 2022-12-26 16:41:22
 * @LastEditors: caipeng
 * @LastEditTime: 2023-01-13 15:56:47
 * @FilePath: \qince-web\packages\sfa\src\pages\Blog\DailyBrowsing\components\AtEmployee\index.js
 * @Description: 
 */
import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import { Tabs } from 'antd';
import locale from 'locale';

import './index.less'
import Recent from './Recent'
import Employee from './Employee'
import Dept from './Dept'


const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
`
const StyledTabs = styled(Tabs)`
  height: 100%;
  [role="tablist"] {
    padding: 12px 0;
  }
  .ant-tabs-content-holder,
  .ant-tabs-content {
    height: 100%;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0 !important;
  }
  .ant-tabs-ink-bar {
    background-color: #1890ff;
  }
`

const TABS = [
  {
    key: '1', label: locale('最近')
  },
  {
    key: '2', label: locale('选同事')
  },
  {
    key: '3', label: locale('选部门')
  },
]

const AtEmployee = ({ onChange }) => {
  const recentRef = useRef()
  const employeeRef = useRef()
  const deptRef = useRef()
  const [activeKey, setActiveKey] = useState('1')

  // const handleTabChange = (activeKey) => {
  //   // setActiveKey(activeKey)
  // }
  const handleTabClick = (key) => {
    setActiveKey(key)
    if (key === '1') {
      recentRef?.current?.refresh()
    } else if (key === '2') {
      employeeRef?.current?.refresh()
    } else if (key === '3') {
      deptRef?.current?.refresh()
    }
  }


  const handleDeptChange = (nodes) => {
    onChange && onChange('dept', nodes)
  }

  const handleEmpChange = (items) => {
    onChange && onChange('emp', items)
  }

  const _getContent = (tabKey) => {
    if (tabKey === '1') {
      return (
        <Recent ref={recentRef} onChange={handleEmpChange}/>
      )
    } else if (tabKey === '2') {
      return (
        <Employee ref={employeeRef} onChange={handleEmpChange}/>
      )
    } else if (tabKey === '3') {
      return (
        <Dept ref={deptRef} onChange={handleDeptChange}/>
      )
    }
  }

  return (
    <StyledRoot>
      <StyledTabs
        activeKey={activeKey}
        // onChange={handleTabChange}
        onTabClick={handleTabClick}
      >
        {
          TABS.map(tab => {
            return (
              <Tabs.TabPane key={tab.key} tab={tab.label}>
                {_getContent(tab.key)}
              </Tabs.TabPane>
            )
          })
        }
      </StyledTabs>
    </StyledRoot>
  )
}

export default AtEmployee