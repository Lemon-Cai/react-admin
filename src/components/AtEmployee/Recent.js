/*
 * @Author: CaiPeng
 * @Date: 2022-12-26 16:41:22
 * @LastEditors: caipeng
 * @LastEditTime: 2023-01-31 17:24:34
 * @FilePath: \qince-web\packages\sfa\src\pages\Blog\DailyBrowsing\components\AtEmployee\Recent.js
 * @Description: 
 */
import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react'

import Page from 'components/Page'

import { fetchRecentAtEmp } from './api'
import { Avatar, List } from 'antd'
const Recent = ({ onChange }, ref) => {
  const [state, setState] = useState({
    list: []
  })

  useImperativeHandle(
    ref,
    () => {
      return {
        refresh: _initData
      }
    },
  )

  useEffect(() => {
    _initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const _initData = () => {
    fetchRecentAtEmp().then(response => {
      if (response.code === '1') {
        setState({
          ...state,
          list: response.data || []
        })
      }
    })
  }

  const handleClickItem = item => {
    // 点击列表项
    onChange && onChange([item])
  }

  return (
    <Page style={{ height: '360px', marginTop: '8px' }}>
      <List
        className='at-recent-list_wrapper'
        itemLayout='horizontal'
        dataSource={state.list}
        renderItem={item => (
          <List.Item key={item.id} onClick={() => handleClickItem(item)}>
            <List.Item.Meta
              avatar={item.user_face ? <Avatar src={item.user_face} /> : <Avatar style={{color: '#000'}}>{item.name.substr(item.name.length - 2, item.name.length)}</Avatar>}
              description={item.type === '0' ? item.dept_name : item.name}
              title={item.type === '0' ? item.name : item.dept_name}
            />
          </List.Item>
        )}
      />
    </Page>
  )
}

export default forwardRef(Recent)
