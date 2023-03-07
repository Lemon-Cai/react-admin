/*
 * @Author: CaiPeng
 * @Date: 2022-12-09 10:51:38
 * @LastEditors: caipeng
 * @LastEditTime: 2023-01-13 16:01:47
 * @FilePath: \qince-web\packages\sfa\src\pages\Blog\DailyBrowsing\components\AtEmployee\Dept.js
 * @Description:
 */
import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef, useCallback } from 'react'
// import styled from 'styled-components'
import { Tree } from 'antd'

import { post } from 'utils/Request'

const DEFAULT_CONTENT_TYPE = ['application/json', 'json']

const SearchTree = (
  {
    multiple,
    url = '/app/blog/v8/web/at_getAtDepartmentList.do',
    isTreeData = true, // 是否是标准的 树结构
    valueField = 'id',
    parentField = 'PId',
    textField = 'name',
    placeholder = '',
    // 传入入参
    queryParams,
    contentType = 'application/x-www-form-urlencoded',

    onChange,
    ...restProps
  },
  ref
) => {
  const treeRef = useRef()
  // 使用虚拟滚动
  const [height] = useState(360)
  // 选中的key
  const [selectedKeys, setSelectedKeys] = useState({
    keys: [],
    nodes: []
  })

  const [state, setState] = useState({
    searchVal: '', // 搜索的值
    data: [], // treeData
    // 原始数据
    _data: [],

    expandedKeys: [],
    autoExpandParent: true
  })

  useImperativeHandle(ref, () => ({
    updateFetch: _initData,
    refresh: _initData
  }))

  useEffect(() => {
    if (url) {
      _initData()
    }
  }, []) // eslint-disable-line

  const _initData = () => {
    post(
      url,
      DEFAULT_CONTENT_TYPE.includes(contentType)
        ? JSON.stringify(queryParams)
        : Object.params({ ...queryParams }),
      response => {
        if (response.code === '1') {
          let result = response.data
          let newTags = isTreeData ? _updateTreeData(result) : _dataAssembly(result)
          // 默认选中的节点，需要全部展开
          let expandKeys = _getExpandedKeys(newTags)
          // 展开所有
          _updateState({
            data: newTags,
            // 备份数据
            _data: newTags,
            expandedKeys: Array.from(
              new Set([...expandKeys])
            )
          })
        }
      },
      {
        contentType: DEFAULT_CONTENT_TYPE.includes(contentType)
          ? 'application/json'
          : 'application/x-www-form-urlencoded'
      }
    )
  }

  const _updateTreeData = (list = [], pId) => {
    Array.from(list).forEach(item => {
      item.title = item[textField] || item.text
      item.value = item[valueField]
      item.key = item[valueField]
      item[parentField] = pId || '-1'
      if (item.children?.length > 0) {
        _updateTreeData(item.children, item.key)
      }
    })
    return list
  }

  const _dataAssembly = list => {
    let rtnNav = Object.clone(list)
    rtnNav.forEach(item => {
      item.title = item.name || item.text
      item.value = item.id
      item.key = item.id
    })
    let rtnList = transfer(rtnNav)
    return rtnList
  }

  const handleExpand = expandedKeys => {
    _updateState({
      expandedKeys: expandedKeys,
      autoExpandParent: false
    })
  }
  // 树选中
  const handleProdTypeChange = (keys, obj) => {
    if (obj.event && obj.selectedNodes.length === 1) {
      if (multiple) {
        let newKeys = []
        let newNode = []
        if (selectedKeys.keys.includes(keys)) {
          newKeys = selectedKeys.keys.filter(o => o !== keys)
          newNode = selectedKeys.nodes.filter(o => o.key !== keys)
        } else {
          newKeys = [...selectedKeys.keys, keys]
          newNode = [...selectedKeys.nodes, obj.node]
        }
        setSelectedKeys({
          keys: newKeys,
          nodes: newNode
        })
        onChange && onChange(newNode)
      } else {
        setSelectedKeys({
          keys: keys,
          nodes: [obj.node]
        })
        onChange && onChange([obj.node])
      }
      
    }
  }


  const _getExpandedKeys = useCallback(
    (list) => {
      let keys = []
      list.forEach(item => {
        if (item.children?.length > 0) {
          keys.push(..._getExpandedKeys(item.children))
        } else {
          keys.push(item[valueField])
        }
      })
      return keys
    },
    [valueField]
  )


  // 更新state
  const _updateState = (val = {}) => {
    setState({
      ...state,
      ...val
    })
  }

  return state.data.length > 0 && (
    <div style={{ padding: '12px' }}>
      <Tree
        ref={treeRef}
        blockNode
        height={height}
        onExpand={handleExpand}
        expandedKeys={state.expandedKeys}
        autoExpandParent={state.autoExpandParent}
        onSelect={handleProdTypeChange}
        selectedKeys={selectedKeys.keys}
        treeData={state.data}
        {...restProps}
      />
    </div>
  )
}

// 转换树结构
const transfer = nodes => {
  let newNodes = {}
  if (nodes && nodes.length > 0) nodes.map(cur => (newNodes[cur.id] = cur))
  let list = []
  Array.from(nodes).forEach(node => {
    let parent = newNodes[node.pId]
    if (parent) {
      ;(parent['children'] || (parent['children'] = [])).push(node)
    } else {
      list.push(node)
    }
  })
  return list
}

export default forwardRef(SearchTree)
