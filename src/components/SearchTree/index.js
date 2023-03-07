/*
 * @Author: CaiPeng
 * @Date: 2022-04-15 10:51:38
 * @LastEditors: caipeng
 * @LastEditTime: 2023-02-02 15:18:44
 * @FilePath: \React\SelectDate\src\components\SearchTree\index.js
 * @Description:
 */
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useCallback
} from 'react'
import { useDebounceFn } from 'ahooks'
// import styled from 'styled-components'
import { Input, Tree } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { post } from 'utils/Request'

// const NewTree = styled(Tree.DirectoryTree)`
//   > .ant-tree-node-content-wrapper {
//     white-space: nowrap !important;
//   }
// `
const DEFAULT_CONTENT_TYPE = ['application/json', 'json']

const SearchTree = (
  {
    virtualHeight = document.body.clientHeight - 120, // 默认虚拟滚动高度
    defaultSelectedKeys = [], // 默认选中的节点，需要展开
    url = '',
    isTreeData = false, // 是否是标准的 树结构
    valueField = 'id',
    parentField = 'pId',
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
  const [height] = useState(typeof virtualHeight === 'number' ? virtualHeight : null)
  // 选中的key
  const [selectedKeys, setSelectedKeys] = useState([...defaultSelectedKeys])

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
    updateSelectedKeys: keys => {
      setSelectedKeys(keys || [])
    }
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
        let result = []
        if (response.rows) {
          result = response.rows
        } else {
          result = response
        }
        let newTags = isTreeData ? _updateTreeData(result) : _dataAssembly(result)
        // 默认选中的节点，需要全部展开
        let tempExpandedKeys = []
        if (defaultSelectedKeys.length > 0) {
          defaultSelectedKeys.forEach(item => {
            tempExpandedKeys.push(..._findPathByKey(newTags, item))
          })
        }
        _updateState({
          data: newTags,
          // 备份数据
          _data: newTags,
          expandedKeys: Array.from(
            new Set([...newTags.map(o => o[valueField]), ...tempExpandedKeys])
          )
        })
        // setTimeout(() => {
        //   treeRef?.current && defaultSelectedKeys.length > 0 && treeRef.current.scrollTo({ key: defaultSelectedKeys[0], align: "top" })
        // }, 0)
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
  const handleProdTypeChange = (selectedKeys, obj) => {
    if (obj.event && obj.selectedNodes.length === 1) {
      setSelectedKeys(selectedKeys)
      onChange && onChange([obj.node])
    }
  }

  // 模糊搜索匹配数据
  const _matchTreeData = (list = [], key) => {
    let newTreeData = []
    Array.from(list).forEach(item => {
      // 重新定义个对象，避免修改到原始数据
      let obj = { ...item }
      if (obj.children?.length > 0) {
        obj.children = _matchTreeData(obj.children, key)
      }
      let bool = fuzzyMatch(obj[textField], key, true)
      if (bool || obj.children?.length > 0) {
        // 当前匹配，或者子元素有匹配到的
        newTreeData.push(obj)
      }
    })
    return newTreeData
  }

  const _getExpandedKeys = useCallback(
    list => {
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

  const { run } = useDebounceFn(
    value => {
      if (value) {
        // 在树数据中搜索 匹配项
        let newData = _matchTreeData(state._data, value)
        let expandedKeys = _getExpandedKeys(newData)
        _updateState({
          expandedKeys: expandedKeys,
          data: newData,
          searchVal: value
        })
      } else {
        // 清空数据，还原原始数据
        _updateState({
          expandedKeys: state._data.map(o => o[valueField]),
          data: state._data,
          searchVal: value
        })
      }
    },
    { wait: 150 }
  )
  // 搜索
  // const handleChangeSearch = value => run(value)
  // 搜索
  const handleChange = e => {
    run(e.target.value)
    // _updateState({
    //   searchVal: e.target.value
    // })
  }

  // 更新state
  const _updateState = (val = {}) => {
    setState({
      ...state,
      ...val
    })
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className='border-b' style={{ width: '100%', padding: '8px 12px' }}>
        <Input
          suffix={<SearchOutlined />}
          placeholder={placeholder}
          // bordered={false}
          // value={state.searchVal}
          onChange={handleChange}
          // onSearch={handleChangeSearch}
        />
      </div>
      {state.data.length > 0 && (
        <div style={{ flex: '1', overflow: 'auto' }}>
          <Tree
            ref={treeRef}
            blockNode
            height={height}
            onExpand={handleExpand}
            expandedKeys={state.expandedKeys}
            autoExpandParent={state.autoExpandParent}
            onSelect={handleProdTypeChange}
            selectedKeys={selectedKeys}
            treeData={state.data}
            {...restProps}
          />
        </div>
      )}
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

// 模糊匹配
function fuzzyMatch(str, key, toPinyin) {
  let index = -1,
    flag = false
  if (!str || typeof str !== 'string') {
    return
  }
  if (toPinyin) {
    let pinyin = str?.toPinyin()
    flag = fuzzyMatch(pinyin, key)
    if (flag) {
      // 如果是匹配了，直接返回 true
      return flag
    }
  }
  for (var i = 0, arr = key.split(''); i < arr.length; i++) {
    //有一个关键字都没匹配到，则没有匹配到数据
    if (str.indexOf(arr[i]) < 0) {
      break
    } else {
      let match = str.matchAll(arr[i])
      let next = match.next()
      while (!next.done) {
        if (next.value.index > index) {
          index = next.value.index
          if (i === arr.length - 1) {
            flag = true
          }
          break
        }
        next = match.next()
      }
    }
  }
  return flag
}

const _findPathByKey = (data, curKey) => {
  let result = [] // 记录路径结果
  let traverse = (data, path, curKey) => {
    if (data.length === 0) {
      return
    }
    for (let item of data) {
      path.push(item.key)
      if (item.key === curKey) {
        result = [...path]
        return
      }
      if (item.children?.length > 0) {
        traverse(item.children, path, curKey) // 遍历
      }
      path.pop() // 回溯
    }
  }
  traverse(data, [], curKey)
  return result
}

export default forwardRef(SearchTree)
