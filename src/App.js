import React from 'react'

import { Space, Divider, Layout } from 'antd'
import classnames from 'classnames'

import AHooks from './Example/AHooks'

// import  SearchHighlight from './Example/SearchHighlight'

import SelectDateExample from 'components/SelectDate/Example'
import CalendarExample from './components/Calendar/Example'
import DateRangeExample from './components/DateRange/Example'
import ToastExample from './components/Toast/Example'

import './App.css'

const App = () => {
  return (
    <section
      className={classnames('c-layout', {
        'c-layout-fit': true // fit :自适应还是，顶天立地， 默认顶天立地
      })}>
      <aside className='c-layout-aside'></aside>
      <header
        className='c-layout-header'
        style={{
          padding: 12,
          height: 40,
          position: 'relative',
          color: 'rgba(0, 0, 0, 0.65)',
          lineHeight: '64px',
          background: 'white'
        }}></header>
      <main>
        <Space direction='vertical' size={12}>
          <AHooks />
          {/* <input type="date" pattern="\d{4}-\d{2}-\d{2}"/> */}
          {/* <Input.Group compact>
        <Select defaultValue="Option1-1">
          <Select.Option value="Option1-1">Option1-1</Select.Option>
          <Select.Option value="Option1-2">Option1-2</Select.Option>
        </Select>
        <DatePicker picker='date' style={{ width: '70%' }} />
      </Input.Group> */}
          {/* 可下拉选择，可选择日期 的控件示例 */}
          <Divider />
          <SelectDateExample />
          <Divider />
          ---------------SearchHighlight----------------
          {/* <SearchHighlight /> */}
          <Divider />
          {/* DatePicker value不能传字符传 仅支持 dayjs 、moment对象 */}
          {/* <DatePicker value="2022-11-01" /> */}
          ==============Calender=====================
          <CalendarExample />
          <Divider />
          <DateRangeExample />

          <Divider />

          <ToastExample />
        </Space>
      </main>
      <footer></footer>
    </section>
    // <Layout style={{padding: 0}}>
    //   <Layout.Sider></Layout.Sider>
    //   <Layout.Content>

    //   </Layout.Content>
    // </Layout>
  )
}

export default App
