import React, { useEffect, useState, useMemo, useRef } from 'react'

import { useControllableValue } from 'ahooks'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Button, Calendar, Select } from 'antd'
import { LeftOutlined, RightOutlined, CalendarOutlined } from '@ant-design/icons'

// import locale from 'locale'

const StyledDot = styled.span`
  position: relative;
  margin-right: 12px;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid #71ccff;
    border-radius: 100%;
    background: #71ccff;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-date {
    display: flex !important;
    justify-content: space-between;
    flex-direction: row-reverse;
    line-height: 32px;
    .ant-picker-calendar-date-content {
      height: auto;
      /* line-height */
    }
    .count {
      font-size: 16px;
      font-weight: 500;
      color: #1a1a1a;
    }
  }
`

const Calender = ({
  value,
  url = '/app/customer_visit/cusVisitPlan/getOneMonthCount.do',
  queryParams = {},

  onChange
}) => {
  const flagRef = useRef(false)

  // 下拉框展开受控
  const [panelOpen, setPanelOpen] = useState(false)
  const [state, setState] = useControllableValue({
    value: {
      flag: false,
      date: value
    },
    onChange
  })

  const _date = useMemo(() => {
    let { date } = state
    if (date) {
      return dayjs(date, 'YYYY-MM-DD')
    }
    return void 0
  }, [state])

  // 数据源
  const [data, setData] = useState({})

  useEffect(() => {
    _initData({
      monthDay: _date.format('YYYY-MM')
    })
  }, [JSON.stringify(queryParams)]) // eslint-disable-line

  const _initData = (params = {}) => {
    if (!queryParams.visitor) {
      return
    }
    // fetch 教程。 https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        // 'Content-Type': 'application/json;charset=utf-8'
      },
      body: Object.params({
        ...params,
        ...queryParams
      })
    })
      .then(text => text.json())
      .then(response => {
        if (response.code === '1') {
          setData(response.data || {})
        }
      })
  }

  const handlePanelChange = (value, mode) => {
    _initData({
      monthDay: dayjs(value).format('YYYY-MM')
    })
  }

  const handleCalendarChange = value => {
    let val = dayjs(value).format('YYYY-MM-DD')
    setState({
      date: val,
      flag: flagRef.current
    })
    setPanelOpen(false)
    if (flagRef.current) {
      flagRef.current = false
    }
  }

  const handleDropdownVisibleChange = open => {
    setPanelOpen(open)
  }

  return (
    <Select
      value={state.date}
      placement='bottomRight'
      open={panelOpen}
      style={{ width: 180 }}
      dropdownMatchSelectWidth={false}
      // showArrow={false}
      suffixIcon={<CalendarOutlined />}
      // onFocus={() => setPanelOpen(true)}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      dropdownStyle={{
        maxWidth: 'calc(100% - 240px)'
      }}
      dropdownRender={() => {
        return (
          <StyledCalendar
            value={_date}
            dateCellRender={date => {
              // let day = dayjs(date).date()
              let count = data[dayjs(date).format('YYYY-MM-DD')]
              return (
                <div style={{ height: '32px' }}>
                  {count > 0 && (
                    <>
                      <StyledDot></StyledDot>
                      <span className='count'>{count}</span>
                    </>
                  )}
                </div>
              )
            }}
            // dateFullCellRender={date => {
            //   let day = dayjs(date).date()
            //   let count = data[dayjs(date).format('YYYY-MM-DD')]
            //   return (
            //     <StyledDateCell>
            //         {
            //           count > 0 && (
            //             <div>
            //               <StyledDot></StyledDot>
            //               <span className='count'>{count}</span>
            //             </div>
            //           )
            //         }
            //       <div className='flex-1'>{day}{locale('日')}</div>
            //     </StyledDateCell>
            //   )
            // }}
            headerRender={({ value, type, onChange, onTypeChange }) => {
              let currentYear = value.format('YYYY年')
              let currentMonth = value.format('M月')
              const next = () => {
                let newMonth = dayjs(value).add(1, 'month')
                flagRef.current = true
                onChange(newMonth)
              }
              const prev = () => {
                let prevMonth = dayjs(value).subtract(1, 'month')
                flagRef.current = true
                onChange(prevMonth)
              }

              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItem: 'center',
                    justifyContent: 'center',
                    lineHeight: '36px'
                  }}>
                  <Button type='text' icon={<LeftOutlined />} onClick={() => prev()} />
                  <div>
                    <span>{currentYear} </span>
                    <span>{currentMonth}</span>
                  </div>
                  <Button type='text' icon={<RightOutlined />} onClick={() => next()} />
                </div>
              )
            }}
            onPanelChange={handlePanelChange}
            onChange={handleCalendarChange}
          />
        )
      }}
    />
  )
}

export default Calender
