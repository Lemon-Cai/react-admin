/*
 * @Author: CaiPeng
 * @Date: 2022-06-09 10:19:58
 * @LastEditors: caipeng
 * @LastEditTime: 2022-06-09 10:26:53
 * @FilePath: \SelectDate\src\AHooks.js
 * @Description: 
 */
import React from 'react';
import { useReactive } from 'ahooks';
import { DatePicker, Button } from 'antd'

const TestAHooks = () => {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });
  let openValue = useReactive({
    datePickerOpen: false,
    selectOpen: false
  })

  
  const handleDateChange = (date, dateStr) => {
    // setDateValue(dateStr)
    // onChange && onChange(dateStr)
  }

  return (
    <div>
      <Button onClick={() => openValue.datePickerOpen = !openValue.datePickerOpen}>点击</Button>
      <DatePicker
        // disabled={readonly}
        allowClear={false}
        showToday={false}
        autoFocus
        // ref={datePickerRef}
        open={openValue.datePickerOpen}
        // onOpenChange={handleDateOpenChange}
        // onBlur={() => openValue.datePickerOpen = false }
        onChange={handleDateChange}
        style={{
          // position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
          boxShadow: 'none'
        }}
      />

      <p> state.count：{state.count}</p>

      <button style={{ marginRight: 8 }} onClick={() => state.count++}>
        state.count++
      </button>
      <button onClick={() => state.count--}>state.count--</button>

      <p style={{ marginTop: 20 }}> state.inputVal: {state.inputVal}</p>
      <input onChange={(e) => (state.inputVal = e.target.value)} />

      <p style={{ marginTop: 20 }}> state.obj.value: {state.obj.value}</p>
      <input onChange={(e) => (state.obj.value = e.target.value)} />
    </div>
  );
};
export default TestAHooks