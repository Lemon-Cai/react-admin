<!--
 * @Author: CaiPeng
 * @Date: 2023-03-07 14:35:46
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-07 19:56:13
 * @FilePath: \React\SelectDate\docs\components\DateRange\DateRange.md
 * @Description: 
-->
# DateRange

```tsx
import React, { useState } from 'react'
import { DateRange } from 'react-admin/components'

export default function Demo() {
  const [dateRange, setDateRange] = useState()
  // 筛选
  const handleOpenChange = () => {
    console.log(222222)
    onSearch && onSearch()
  }
  // 日期切换
  const handleDateChange = (dates, dateStr) => {
    console.log(11111)
    setDateRange(dates)
  }


  return (
    <DateRange 
      showShortcut
      showDisable
      disableProps = {{
        type: 'd',
        num: 20
      }}
      onOpenChange={handleOpenChange}
      // onDateChange={handleDateChange}
      onChange={handleDateChange}
      value={dateRange}
    />
  )
}
```