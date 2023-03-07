/*
 * @Author: CaiPeng
 * @Date: 2022-06-06 10:25:04
 * @LastEditors: caipeng
 * @LastEditTime: 2022-06-23 17:03:44
 * @FilePath: \waiqin365-appsvr\src\containers\Merp\pages\SalesManage\SalesOrder\Edit\Product\ProducedDate.js
 * @Description:
 */
import React, { useState, useRef, useEffect } from 'react'
import { useUpdateEffect, useReactive } from 'ahooks'
import { CalendarOutlined } from '@ant-design/icons'
import { DatePicker, Input, Button, Select } from 'antd'

const ProducedDate = ({
  selectRef,
  readonly,
  open = false,
  idField = 'id',
  textField = 'name',
  autoFocus,
  options = [],
  value,
  formatter, // 格式化显示的方法
  onChange,
  onDropdownVisibleChange,
  style,
  ...others
}) => {
  const datePickerRef = useRef()
  // 控制两个控件的展开
  let openValue = useReactive({
    datePickerOpen: false,
    selectOpen: open
  })

  const [dateValue, setDateValue] = useState(value)

  useEffect(() => {
    setDateValue(value)
  }, [value])

  useUpdateEffect(() => {
    if (!openValue.datePickerOpen && !openValue.selectOpen) {
      onDropdownVisibleChange && onDropdownVisibleChange()
    }
  }, [openValue.datePickerOpen, openValue.selectOpen])

  const handleOpenDate = e => {
    e.preventDefault()
    handleDatePickerFocus()
  }

  const handleDateChange = (date, dateStr) => {
    onChange && onChange(dateStr)
  }

  const handleSelectFocus = () => {
    openValue.selectOpen = true
    _datepickerBlur()
  }

  const _selectBlur = () => {
    selectRef?.current?.blur && selectRef.current.blur()
  }

  const _datepickerBlur = () => {
      datePickerRef?.current?.blur &&
      datePickerRef.current.blur()
  }

  const handleDatePickerFocus = () => {
    openValue.datePickerOpen = true
    _selectBlur()
  }

  const handleDateOpenChange = open => {
    openValue.datePickerOpen = open
  }
  const handleDropdownVisibleChange = open => {
    openValue.selectOpen = open
  }
  return (
    <Input.Group compact style={{ position: 'relative', width: '100%' }}>
      <Select
        ref={selectRef}
        // options={options}
        disabled={readonly}
        // showSearch
        defaultOpen
        autoFocus
        allowClear
        // virtual
        listHeight={160}
        open={openValue.selectOpen}
        onFocus={handleSelectFocus}
        onDropdownVisibleChange={handleDropdownVisibleChange}
        onChange={(val, selected) => {
          onChange && onChange(val, selected)
        }}
        value={dateValue}
        suffixIcon={
          <Button
            type='text'
            onClick={handleOpenDate}
            icon={<CalendarOutlined style={{ justifyContent: 'start' }} />}></Button>
        }
        style={{
          width: '100%',
          zIndex: 1
        }}>
        {options.map(item => (
          <Select.Option value={item[idField]} key={item[idField]}>
            {typeof formatter === 'function' ? formatter(item) : item[textField]}
          </Select.Option>
        ))}
      </Select>

      <DatePicker
        ref={datePickerRef}
        disabled={readonly}
        allowClear={false}
        showToday={false}
        open={openValue.datePickerOpen}
        onOpenChange={handleDateOpenChange}
        onFocus={handleDatePickerFocus}
        onChange={handleDateChange}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
          boxShadow: 'none'
        }}
      />
    </Input.Group>
  )
}

export default React.memo(ProducedDate)
