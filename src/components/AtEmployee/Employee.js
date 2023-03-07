import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { Avatar, Input, List, Space } from 'antd'

import locale from 'locale'
import Page from 'components/Page'

import { fetchAtEmployee } from './api'

const StyledDiv = styled.div`
  padding: 8px 0;
  background: #fff;
  span {
    padding: 2px 6px;
    color: #999;
    text-decoration: none;
    cursor: default;
    &.active {
      color: #333;
      font-weight: bold;
      cursor: pointer;
    }
  }
`

const Employee = ({ onChange }, ref) => {
  const [state, setState] = useState({
    _dataSource: {},
    list: {},
    // searchVal: '',
    // 字符
    fullChar: [
      ...[...Array(10).keys()].map(i => String.fromCharCode(i + 48)),
      ...[...Array(26).keys()].map(i => String.fromCharCode(i + 65)),
      '#'
    ],
    currentChar: [],
    showCharContainer: true
  })

  useImperativeHandle(ref, () => ({
    refresh: _initData
  }))

  useEffect(() => {
    _initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const _initData = () => {
    fetchAtEmployee().then(response => {
      if (response.code === '1') {
        let currentChar = Object.keys(response.data)
        setState({
          ...state,
          _dataSource: response.data || {},
          list: response.data || {},
          currentChar
        })
      }
    })
  }

  const handleClickItem = item => {
    // 点击列表项
    onChange && onChange([item])
  }

  // const handleChange = (e) => {
  //   setState({
  //     ...state,
  //     searchVal: e.target.value
  //   })
  // }

  const handleSearch = val => {
    // 隐藏快捷点击按钮部分
    if (val) {
      // 原来逻辑
      val = val
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/([\\.*[\]()$^])/g, '\\$1')
      let newList = Object.fromEntries(
        Object.entries(state._dataSource)
          .map(item => {
            let [key, arr] = item
            let newArr = arr.filter(
              o =>
                o.name.indexOf(val) !== -1 ||
                o.spell.split(' ')[0].indexOf(val) === 0 ||
                o.spell.split(' ')[1].indexOf(val) === 0
            )
            return [key, newArr]
          })
          .filter(item => item[1]?.length > 0)
      )
      setState({
        ...state,
        list: newList,
        showCharContainer: false
      })
    } else {
      setState({
        ...state,
        list: state._dataSource,
        showCharContainer: true
      })
    }
  }

  //
  const handleForClick = e => {
    e.stopPropagation()
    let scrollNode = e.target.closest('.wq-page').querySelector('.employee-list_wrapper')
    let targetNode = scrollNode.querySelector(`#${e.target.getAttribute('for')}`)
    scrollNode.scrollTop = targetNode.offsetTop - scrollNode.offsetTop
    // document.querySelector(`#${e.target.getAttribute('for')}`).scrollIntoView()
  }

  return (
    <Page style={{ height: '360px', overflow: 'hidden'}}>
      <Page.Header style={{ padding: '0 0 8px' }}>
        <div style={{ padding: '12px',background: '#fff' }}>
          <Input.Search
            /* value={state.searchVal} onChange={handleChange} */ onSearch={handleSearch}
            placeholder={locale('输入人员标识或名称')}
          />
          {state.showCharContainer && (
            <StyledDiv>
              <Space size={4} wrap>
                {state.fullChar.map(char => (
                  <span
                    key={char}
                    className={classNames({ active: state.currentChar.includes(char) })}
                    htmlFor={`list_container_${char}`}
                    onClick={handleForClick}>
                    {char}
                  </span>
                ))}
              </Space>
            </StyledDiv>
          )}
        </div>
      </Page.Header>
      <Page.Content className='employee-list_wrapper' style={{ overflow: 'auto' }}>
        {Object.keys(state.list).map((key, index) => (
          <List
            key={key}
            itemLayout='horizontal'
            id={`list_container_${key}`}
            dataSource={state.list[key]}
            style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 100vh' }}
            renderItem={item => (
              <List.Item key={item.id} onClick={() => handleClickItem(item)}>
                <List.Item.Meta
                  avatar={<Avatar src={item.user_face} alt={item.name.substr(-2)} />}
                  title={item.name}
                  description={item.dept_name || ''}
                />
              </List.Item>
            )}
          />
        ))}
      </Page.Content>
    </Page>
  )
}

export default forwardRef(Employee)
