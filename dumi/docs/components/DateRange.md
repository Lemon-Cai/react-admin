# DateRange

```tsx
import React, { useState } from 'react'
import { DateRange } from 'comp'

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