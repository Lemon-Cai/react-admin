/*
 * @Author: CaiPeng
 * @Date: 2022-04-18 20:06:28
 * @LastEditors: caipeng
 * @LastEditTime: 2022-07-11 17:21:59
 * @Description: 
 */
import React, { useState, useEffect, forwardRef, useRef } from 'react'
import { Select, InputNumber } from "antd";

const SearchSelect = ({
  open = false,
  value,
  max, // 最大值
  min, // 最小值
  precision = 0, // 精度
  cRef,
  options = [],
  dropdownStyle,
  onBlur,
  formatter,
  onChange,
  ...others
}, ref) => {
  const triggerRef = useRef()
  const [state, setState] = useState({
    searchValue: value,
    // newValue: '',
    newValue: '',
    // record: value,
  })

  useEffect(() => {
    setState({
      ...state,
      searchValue: value
    })
  }, [value]) // eslint-disable-line

  const handleSearch = (val) => {
    let { newValue } = state;
    if (!!val) {
      newValue = val || '';
      setState({ ...state, newValue });
    }
  };

  // 输入搜索值
  const handleChangeSelect = (val, newValue, flag) => {
    let { searchValue } = state;
    searchValue = Number(val || 0).toFixed(precision);
    setState({ 
      ...state, 
      searchValue,
      newValue,
      flag // 手动点击下拉选项
    });
    if (triggerRef.current) {
      triggerRef.current = null
      // 键盘上下回车触发事件 , 会先触发handleBlur， 
      val = _onBlur(val)
    }
    // 直接点击下拉选择，不限触发外层onChange
    !flag && _onChange && _onChange(val)
  }

  const handleBlur = (args) => {
    let { newValue, searchValue} = state;
    if (!!newValue) {
      if (!/\d+/g.test(newValue)) newValue = ''
      // 在onBlur后将对应的newValue置成初始状态
      // 防止当从下拉框中选择后再次触发onBlur时经过此处恢复成原来的值
      // 先触发onBlur，再触发onChange，
      // 判断是否超过 max 和 min 超出会重新赋值
      newValue = _onBlur(newValue)
      handleChangeSelect(newValue, '')
    } else {
      // 标识在onChange中是否触发 _onBlur
      triggerRef.current = true
      if (state.flag) {
        searchValue = _onBlur(searchValue)
        _onChange && _onChange(searchValue)
      }
    }
  };

  const _onBlur = value => {
    value = value ?? ''
    
    // if (max && Number(value) > Number(max)) {
    //   value = max
    // }
    // if (min && Number(value) < Number(min)) {
    //   value = min
    // }
    value = Number(value).toFixed(precision)
    onBlur && onBlur(value)
    return value
  }

  const _onChange = (val) => {
    let value = val ?? 0
    if (max && Number(value) > Number(max)) {
      value = max
    }
    if (min && Number(value) < Number(min)) {
      value = min
    }
    value = Number(value).toFixed(precision)
    onChange && onChange(value)
  }

  return open ? (
    <Select
      autoFocus
      defaultOpen
      showSearch
      ref={ref}
      mode="combobox"
      onChange={(e) => handleChangeSelect(e, null, true)}
      onSearch={value => handleSearch(value)}
      onBlur={handleBlur}
      optionLabelProp="value"
      // options={options}
      value={state.searchValue}
      dropdownStyle={dropdownStyle}
      {...others}
    >
      {
        options.map(item => (
          <Select.Option key={item.key} value={item.value}>{typeof formatter === 'function' ? formatter(item) : item.label}</Select.Option>
        ))
      }
    </Select>
  ) : (
    <InputNumber 
      autoFocus
      ref={cRef}
      max={max}
      min={min}
      precision={precision}
      keyboard={false}
      onBlur={(e) => onBlur && onBlur(e.target.value)}
      onChange={onChange}
      value={value}
      {...others}
    />
  )
}

export default forwardRef(SearchSelect)