/*
 * @Author: CaiPeng
 * @Date: 2022-02-28 19:07:45
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-07 19:57:37
 * @Description: 时间范围选择控件，支持设置区间
 */
import React, { useState, useMemo, useCallback } from 'react'
import dayjs from 'dayjs'
import { DatePicker, Radio, Space } from 'antd'
import { useControllableValue, useUpdateEffect } from 'ahooks'
import styled from 'styled-components'


const StyledSpace = styled(Space)`
  width: 100%;
  .ant-space-item {
    &:first-child {
      flex: 1;
    }
  }
`

const DATE_FORMAT = 'YYYY-MM-DD'

let dateChangeFlag = true

// 默认日期快捷操作枚举值
const DEFAULT_TIMES_ENUM = [
  { label: '今日', value: '0', default: true },
  { label: '昨日', value: '1' },
  { label: '本周', value: '2' },
  { label: '本月', value: '3' },
  { label: '上月', value: '4' },
  { label: '近7日', value: '5' },
  { label: '近30日', value: '6' }
]

const _getDate = type => {
  let dateRange
  if (type === '0') {
    // 今日
    dateRange = [dayjs(), dayjs()]
  } else if (type === '1') {
    // 昨日
    dateRange = [dayjs().subtract(1, 'd'), dayjs().subtract(1, 'd')]
  } else if (type === '2') {
    // 本周
    dateRange = [dayjs().startOf('w'), dayjs().endOf('w')]
  } else if (type === '3') {
    // 本月
    dateRange = [dayjs().startOf('M'), dayjs().endOf('M')]
  } else if (type === '4') {
    // 上月
    dateRange = [dayjs().subtract(1, 'M').startOf('M'), dayjs().subtract(1, 'M').endOf('M')]
  } else if (type === '5') {
    // 近7
    dateRange = [dayjs().subtract(6, 'd'), dayjs()]
  } else if (type === '6') {
    // 近30
    dateRange = [dayjs().subtract(29, 'd'), dayjs()]
  }
  return dateRange
}

const DateRage = ({
  defaultDateType,
  //
  onDateChange,
  // 收起面板 数据请求
  onOpenChange,
  // 是否显示禁用日期，配合 disableProps
  showDisable,
  disableProps = {
    type: 'd',
    num: 180
  },
  disabledDate, // 禁用日期
  layout = 'inner', // inner | outer 自定义快捷选择日期布局方式，默认 inner
  customShortcut = false, // 是否自定义快捷操作 log: 2022-11-14 开始该参数作废
  showShortcut,
  shortcutOps = DEFAULT_TIMES_ENUM,
  value,
  onSwitchDate, // Function 自定义快捷操作时，自定义切换方式 当 customShortcut = true 传入该方法，才有效， 当 shortcutOps的枚举值的value不在默认范围类，需自定义

  onChange = () => {},
  ...restProps
}) => {
  // 日期类型
  const [dateType, setDateType] = useState(() => {
    return defaultDateType ?? shortcutOps.find(o => o.default)?.value
  })

  // 数据
  // const [dateRange, setDateRange] = useState([])
  const [dateRange, setDateRange] = useControllableValue({
    value,
    onChange
  })

  const [dates, setDates] = useState([])
  const [hackValue, setHackValue] = useState()

  useUpdateEffect(() => {
    if (showShortcut && Array.isArray(value) && value[0]) {
      // 根据当前value获取日期类型
      setDateType(_inverseDate(value))
    }
  }, [value])

  const _inverseDate = val => {
    let type
    if (showShortcut && value[0]) {
      let startTime = dayjs(value[0]).format(restProps?.format || 'YYYY-MM-DD')
      let endTime = dayjs(value[1]).format(restProps?.format || 'YYYY-MM-DD')

      for (const item of shortcutOps) {
        let date
        if (typeof onSwitchDate === 'function') {
          date = onSwitchDate(item.value)
        } else {
          date = _getDate(item.value)
        }
        if (
          date &&
          `${startTime}~${endTime}` ===
          `${dayjs(date[0]).format(restProps?.format || 'YYYY-MM-DD')}~${dayjs(date[1]).format(
            restProps?.format || 'YYYY-MM-DD'
          )}`
        ) {
          type = item.value
          break
        }
      }
    }

    return type
  }

  const handleDisabledDate = useCallback(
    currentDate => {
      if (disabledDate) {
        return disabledDate(currentDate, dates, disableProps)
      }
      if (!dates || dates.length === 0) {
        return false
      }
      const tooLate =
        dates[0] &&
        dayjs(currentDate).isAfter(dayjs(dates[0]).add(disableProps.num, disableProps.type))
      const tooEarly =
        dates[1] &&
        dayjs(currentDate).isBefore(dayjs(dates[1]).subtract(disableProps.num, disableProps.type))
      return tooLate || tooEarly
    },
    [dates, disableProps, disabledDate]
  )

  const handleOpenChange = open => {
    if (open) {
      setHackValue([])
      setDates([])
      dateChangeFlag = false
    } else {
      setHackValue(undefined)
    }
    if (!open && dateRange && dateChangeFlag) {
      setDateType()
      onOpenChange && onOpenChange()
    }
  }

  const handleDateChange = (dateRange, dateString) => {
    onDateChange && onDateChange(dateRange, dateString)
    dateChangeFlag = true
    setDateRange(dateRange)
  }

  const handleSwitchDateType = useCallback(
    event => {
      // dateChangeFlag = true // 修改日期 先触发 handleOpenChange，在执行当前方法
      const value = event.target.value
      setDateType(value)
      if (typeof onSwitchDate === 'function') {
        // 自定义
        // onSwitchDate(value)
        setDateRange(onSwitchDate(value))
        // 触发关闭panel回调
        onOpenChange && onOpenChange(false)
        return
      }
      let dateRange = _getDate(value)

      // onDateChange && onDateChange(dateRange, [dayjs(dateRange[0]).format(format), dayjs(dateRange[1]).format(format)])
      // onOpenChange && onOpenChange(false)
      setDateRange(dateRange)
      // 触发关闭panel回调
      setTimeout(() => {
        onOpenChange && onOpenChange(dateRange)
      }, 0)
    },
    [setDateRange, onOpenChange, onSwitchDate]
  )

  const othersProps = useMemo(() => {
    let prop = {}
    if (showShortcut && layout === 'inner') {
      prop.renderExtraFooter = () => (
        <Radio.Group
          // buttonStyle='solid'
          optionType='button'
          value={dateType}
          options={shortcutOps}
          onChange={handleSwitchDateType}
        />
      )
    }
    if (showDisable) {
      prop.disabledDate = handleDisabledDate
    }
    return prop
  }, [
    showShortcut,
    showDisable,
    shortcutOps,
    dateType,
    layout,
    handleDisabledDate,
    handleSwitchDateType
  ])

  return (
    <StyledSpace>
      {showShortcut && layout === 'outer' && (
        <Radio.Group
          // buttonStyle='solid'
          optionType='button'
          value={dateType}
          options={shortcutOps}
          onChange={handleSwitchDateType}
        />
      )}
      <DatePicker.RangePicker
        format={DATE_FORMAT}
        allowClear={false}
        value={showDisable ? hackValue || dateRange : dateRange}
        onCalendarChange={val => setDates(val)}
        onOpenChange={handleOpenChange}
        onChange={handleDateChange}
        {...othersProps}
        {...restProps}
      />
    </StyledSpace>
  )
}

export default DateRage
