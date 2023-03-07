/*
 * @Author: CaiPeng
 * @Date: 2022-06-07 09:10:04
 * @LastEditors: caipeng
 * @LastEditTime: 2022-07-12 14:18:56
 * @FilePath: \SelectDate\src\SelectDate.js
 * @Description:
 */
import React, { useState, useRef, useEffect } from 'react'
import { useUpdateEffect, useReactive } from 'ahooks'
import { CalendarOutlined } from '@ant-design/icons'
import { DatePicker, Space, Input, Button, Select } from 'antd'

const SelectDate = ({
  cRef,
  readonly,
  open = false,
  autoFocus,
  options = [
    { label: '2022-01-01      10箱1瓶', value: '1' },
    { label: '2022-01-02      10箱1瓶', value: '2' },
    { label: '2022-01-03      10箱1瓶', value: '3' },
    { label: '2022-01-04      10箱1瓶', value: '4' }
  ],
  idField = 'id',
  textField = 'name',
  value,
  formatter,
  onChange,
  onDropdownVisibleChange,
  style
}) => {
  const datePickerRef = useRef()
  
  const selectRef = useRef()

  let openValue = useReactive({
    datePickerOpen: false,
    selectOpen: true
  })

  const [dateValue, setDateValue] = useState(value)

  useEffect(() => {
    setDateValue(value)
  }, [value])

  useUpdateEffect(() => {
    if (!openValue.datePickerOpen && !openValue.selectOpen) {
      console.log(1111111111111111);
    }
  }, [openValue.datePickerOpen, openValue.selectOpen])

  const handleOpenDate = e => {
    e.preventDefault()
    let { selectOpen, datePickerOpen } = openValue
    console.log('selectOpen: ', openValue.selectOpen, 'datePickerOpen: ', openValue.datePickerOpen)

    // if (!selectOpen) {
    //   // 点击按钮，判断下，select 是否聚焦状态，非聚集状态则，触发聚焦
    //   selectRef && selectRef.current && selectRef.current.focus && selectRef.current.focus()
    //   return
    // }
    // if (!datePickerOpen) {
    //   datePickerRef && datePickerRef.current && datePickerRef.current.focus()
    // }
    if (!datePickerOpen) {
       handleDatePickerFocus()
       datePickerRef && datePickerRef.current && datePickerRef.current.focus()
    }
   
  }

  const handleDateChange = (date, dateStr) => {
    setDateValue(dateStr)
    onChange && onChange(dateStr)
  }

  const handleSelectFocus = () => {
    console.log('Select handleFocus')
    openValue.selectOpen = true
    _datepickerBlur()
  }

  const handleSelectBlur =() => {
    console.log('Select onBlur', 'openValue.datePickerOpen', openValue.datePickerOpen)
    openValue.selectOpen = false
    // openValue.datePickerOpen = false
    if (!openValue.datePickerOpen) {
      // 判断 DatePicker 是否是失焦状态，是则 全部失焦
      onDropdownVisibleChange && onDropdownVisibleChange()
    }
  }

  const _selectBlur = () => {
    selectRef && selectRef.current && selectRef.current.focus && selectRef.current.blur()
  }

  const _datepickerBlur = () => {
    datePickerRef && datePickerRef.current && datePickerRef.current.blur && datePickerRef.current.blur()
  }

  const handleDatePickerFocus = () => {
    console.log('DatePicker onFocus', openValue.selectOpen)
    openValue.datePickerOpen = true
    _selectBlur()
  }

  const handleDatePickerBlur =() => {
    console.log('DatePicker onBlur, openValue.selectOpen:', openValue.selectOpen)
    openValue.datePickerOpen = false
    // openValue.selectOpen = false
    if (!openValue.selectOpen) {
      // 判断 Select 是否是失焦状态，是则 全部失焦
      onDropdownVisibleChange && onDropdownVisibleChange()
    }
  }
  const handleDateOpenChange = (open) => {
    console.log('handleDateOpenChange=', open, 'openValue.datePickerOpen = ', openValue.datePickerOpen, 'openValue.selectOpen = ', openValue.selectOpen);
    openValue.datePickerOpen = open
  }
  const handleDropdownVisibleChange = (open) => {
    console.log(open, 'openValue.selectOpen:', openValue.selectOpen, 'openValue.datePickerOpen = ', openValue.datePickerOpen)
    if (!openValue.selectOpen) openValue.selectOpen = open
  }
  return (
    <div direction='vertical' size={12}>
      <Input.Group compact style={{ position: 'relative', width: '100%' }}>
        <Select
          // ref={cRef}
          mode="combobox"
          ref={selectRef}
          // options={options}
          // showSearch
          defaultOpen
          autoFocus
          disabled={readonly}
          allowClear
          // showArrow={false}
          open={openValue.selectOpen}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          onChange={(val, selected) => {
            console.log(val, selected)
            setDateValue(val)
            onChange && onChange(val, selected)
          }}
          value={dateValue}
          suffixIcon={
            <Button
              type='text'
              onClick={handleOpenDate}
              icon={<CalendarOutlined style={{ justifyContent: 'start' }} />}></Button>
          }
          dropdownStyle={{
            minWidth: 280,
            width: 'auto',
          }}
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
          // disabled={readonly}
          allowClear={false}
          showToday={false}
          // autoFocus
          open={openValue.datePickerOpen}
          onOpenChange={handleDateOpenChange}
          // onFocus={handleDatePickerFocus}
          // onBlur={handleDatePickerBlur}
          onChange={handleDateChange}
          style={{
            // position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            // zIndex: -1,
            boxShadow: 'none'
          }}
        />
      </Input.Group>
    </div>
  )
}

export default SelectDate
