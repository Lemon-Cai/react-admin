/*
 * @Author: CaiPeng
 * @Date: 2022-06-07 09:10:04
 * @LastEditors: caipeng
 * @LastEditTime: 2022-06-09 19:02:18
 * @FilePath: \SelectDate\src\demo.js
 * @Description:
 */
import React, { useState, useRef, useEffect } from 'react'
import { useUpdateEffect, useReactive } from 'ahooks'
import { CalendarOutlined } from '@ant-design/icons'
import { DatePicker, Space, Input, Button, Select } from 'antd'

import './index.css'

const App = ({
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
  value,
  onChange,
  onDropdownVisibleChange,
  style
}) => {
  const datePickerRef = useRef()

  const flagRef = useRef()

  let openValue = useReactive({
    datePickerOpen: false,
    selectOpen: false
  })
  // let selectOpen = useReactive({
  //   datePickerOpen: false,
  //   selectOpen: open
  // })

  const [dateValue, setDateValue] = useState(value)

  // useUpdateEffect(() => {
  //   console.log(value)
  //   setDateValue(value)
  // }, [value]) // eslint-disable-line

  useUpdateEffect(() => {
    if (!openValue.datePickerOpen && !openValue.selectOpen) {
    console.log(1111111111111111);

    }
  }, [openValue.datePickerOpen, openValue.selectOpen])

  useEffect(() => {
    if (autoFocus) {
      // handleFocus()
    }
  }, []) // eslint-disable-line

  const handleOpenDate = e => {
    let { selectOpen } = openValue
    // if (!selectOpen) {
    //   // 点击按钮，判断下，select 是否聚焦状态，非聚集状态则，触发聚焦
    //   cRef && cRef.current && cRef.current.focus && cRef.current.focus()
    //   return
    // }
    openValue.datePickerOpen = !openValue.datePickerOpen
    // if (!openValue.datePickerOpen) {
    //   openValue.datePickerOpen = !openValue.datePickerOpen
    //   datePickerRef && datePickerRef.current && datePickerRef.current.focus()
    // }

    selectOpen && (openValue.selectOpen = !selectOpen)
  }

  const handleDateChange = (date, dateStr) => {
    setDateValue(dateStr)
    onChange && onChange(dateStr)
  }

  const handleFocus = () => {
    console.log('handleFocus')
    let { datePickerOpen } = openValue
    openValue.datePickerOpen = datePickerOpen ? !openValue.datePickerOpen : openValue.datePickerOpen
    openValue.selectOpen = !openValue.selectOpen
  }

  const handleDateOpenChange = open => {
    console.log('handleDateOpenChange', open)
    if (!openValue.datePickerOpen && !openValue.selectOpen) {
      onDropdownVisibleChange && onDropdownVisibleChange()
    }
  }

  const handleDropdownVisibleChange = open => {
    console.log(
      'handleDropdownVisibleChange blur:',
      open,
      'selectOpen: ',
      openValue.selectOpen,
      'datePickerOpen: ',
      openValue.datePickerOpen
    )
    if (!openValue.datePickerOpen && !openValue.selectOpen) {
      onDropdownVisibleChange && onDropdownVisibleChange()
    }
  }
  // const datePickerRef = useRef()

  // const [datePickerOpen, setDatePickerOpen] = useState(false)

  // const [selectOpen, setSelectOpen] = useState(open)

  // const [dateValue, setDateValue] = useState()

  // useEffect(() => {
  //   setDateValue(value)
  // }, [value]) // disable-eslint-line

  // const handleOpenDate = e => {
  //   // e.stopPropagation();
  //   // e.preventDefault();
  //   selectOpen && setSelectOpen(!selectOpen)
  //   if (!datePickerOpen) {
  //     datePickerRef && datePickerRef.current && datePickerRef.current.focus()
  //   }
  //   setDatePickerOpen(!datePickerOpen)
  // }

  // const handleDateChange = (date, dateStr) => {
  //   console.log(date, dateStr)
  //   setDateValue(dateStr)
  // }

  // const handleFocus = () => {
  //   setSelectOpen(!selectOpen)
  //   if (datePickerOpen) {
  //     setDatePickerOpen(!datePickerOpen)
  //   }
  // }

  // const handleDateOpenChange = open => {
  //   if (!open && !selectOpen) {
  //     onDropdownVisibleChange && onDropdownVisibleChange()
  //   }
  // }

  // const handleDropdownVisibleChange = open => {
  //   console.log('handleDropdownVisibleChange blur:', open, 'selectOpen: ', selectOpen, 'datePickerOpen: ', datePickerOpen)
  //   if (!open && !datePickerOpen) {
  //     onDropdownVisibleChange && onDropdownVisibleChange()
  //   }
  // }

  console.log('selectOpen: ', openValue.selectOpen, 'datePickerOpen: ', openValue.datePickerOpen)

  return (
    <div direction='vertical' size={12}>
      <Input.Group compact style={{ position: 'relative', width: '100%' }}>
        <Input.Group compact style={{ zIndex: 1, width: '200px' }}>
          <Select
            ref={cRef}
            options={options}
            autoFocus={autoFocus}
            disabled={readonly}
            allowClear
            // showSearch
            // showArrow={false}
            open={openValue.selectOpen}
            onFocus={handleFocus}
            onBlur={() => {
              console.log('Select onBlur')
              openValue.selectOpen = false
              // openValue.datePickerOpen = false
              if (!openValue.datePickerOpen) {
                // 判断 DatePicker 是否是失焦状态，是则 全部失焦
                onDropdownVisibleChange && onDropdownVisibleChange()
              }
            }}
            onChange={(val, selected) => {
              console.log(val, selected)
              setDateValue(val)
            }}
            value={dateValue}
            // suffixIcon={
            //   <Button type="text" onClick={handleOpenDate} icon={<CalendarOutlined  style={{ fontSize: '18px' }} />}></Button>
            // }
            style={{
              width: 'calc(100% - 40px)',
              zIndex: 1
            }}></Select>
          <Button
          onFocus={() => {
            console.log('Button');
          }}
            onClick={handleOpenDate}
            icon={<CalendarOutlined />}
          ></Button>
        </Input.Group>

        {/* <Select
          ref={cRef}
          options={options}
          // showSearch
          autoFocus
          disabled={readonly}
          allowClear
          // showArrow={false}
          open={openValue.selectOpen}
          onFocus={handleFocus}
          onBlur={() => {
            console.log('Select onBlur')
            openValue.selectOpen = false
            openValue.datePickerOpen = false
            if (!openValue.datePickerOpen) {
              // 判断 DatePicker 是否是失焦状态，是则 全部失焦
              onDropdownVisibleChange && onDropdownVisibleChange()
            }
          }}
          onChange={(val, selected) => {
            // console.log(val, selected)
            // setDateValue(val)
            onChange && onChange(val)
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
          }}></Select> */}

        <DatePicker
          disabled={readonly}
          allowClear={false}
          showToday={false}
          // autoFocus
          ref={datePickerRef}
          open={openValue.datePickerOpen}
          // onOpenChange={handleDateOpenChange}
          onFocus={() => {
            console.log('DatePicker onFocus', openValue.selectOpen)
          }}
          onBlur={() => {
            console.log('DatePicker onBlur', openValue.selectOpen)
            openValue.datePickerOpen = false
            // if (!openValue.selectOpen) {
            //   // 判断 Select 是否是失焦状态，是则 全部失焦
            //   onDropdownVisibleChange && onDropdownVisibleChange()
            // }
          }}
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
    </div>
  )
}

export default App
