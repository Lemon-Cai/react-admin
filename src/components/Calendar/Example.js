import React, { useState } from 'react'

import Calendar from './index'

const Example = ({
  onSearch // 刷新函数
}) => {
  const [date, setDate] = useState('2022-10-18')

  const handleChange = val => {
    setDate(val)
  }
  return (
    <>
      <Calendar
        value={date}
        onChange={({ date, flag }) => {
          handleChange(date)
          !flag && onSearch && onSearch()
        }}
        queryParams={{
          visitor: ''
        }}
      />
    </>
  )
}

export default Example
