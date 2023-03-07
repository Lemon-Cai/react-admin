/*
 * @Author: CaiPeng
 * @Date: 2022-02-28 19:07:45
 * @LastEditors: caipeng
 * @LastEditTime: 2022-05-30 15:53:07
 * @Description: 时间范围选择控件，支持设置区间
 */
import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from 'antd'

const DATE_FORMAT = 'YYYY-MM-DD'

let dateChangeFlag = true

const DateRange = ({
  // 
  onDateChange,
  // 收起面板 数据请求
  onOpenChange,
  disableProps = {
    type: 'd',
    num: 180
  },
  disabledDate,
  value,
  ...restProps
}) => {
  // 数据
  const [dateRange, setDateRange] = useState([])

  const [dates, setDates] = useState([])
  const [hackValue, setHackValue] = useState()

  useEffect(() => {
    if (value) {
      setDateRange(value)
    }
  }, [value])

  const handleDisabledDate = (currentDate) => {
    if (disabledDate && typeof disabledDate === 'function') {
      // 自定义禁用日期
      return disabledDate(currentDate, dates, disableProps)
    }
    if (!dates || dates.length === 0) {
      return false
    }
    const tooLate = dates[0] &&  dayjs(currentDate).isAfter(dayjs(dates[0]).add(disableProps.num, disableProps.type))
    const tooEarly = dates[1] && dayjs(currentDate).isBefore(dayjs(dates[1]).subtract(disableProps.num, disableProps.type))
    return tooLate || tooEarly
  }

  const handleOpenChange = (open) => {
    if (open) {
      setHackValue([])
      setDates([])
      dateChangeFlag = false
    } else {
      setHackValue(undefined);
    }
    !open && dateRange && dateChangeFlag && onOpenChange && onOpenChange()
  }

  const handleDateChange = (dateRange, dateString) => {
    onDateChange && onDateChange(dateRange, dateString)
    dateChangeFlag = true
    setDateRange(dateRange)
  }

  return (
    <DatePicker.RangePicker
      format={DATE_FORMAT}
      allowClear={false}
      value={hackValue || dateRange}
      onCalendarChange={val => setDates(val)}
      disabledDate={handleDisabledDate}
      onOpenChange={handleOpenChange}
      onChange={handleDateChange}
      {...restProps}
    />
  )
}

export default DateRange