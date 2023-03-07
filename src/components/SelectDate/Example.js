import React, { useState, useRef } from 'react'

import SelectDate from './index'

const Example = () => {
  const selectRef = useRef()

  const [state, setState] = useState({
    expectPdDate: '',
  })


  const [options] = useState([
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '4958522421645991150',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋1箱7袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-04-16',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '19.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '8391226760444143992',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '2袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-05-05',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '2.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '9145936722101248809',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '6袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-05-24',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '6.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '7969741960598268049',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '1箱3袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-05-25',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '15.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '6088689199627962182',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '9袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-06-14',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '9.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '4641565256301233824',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '3袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-06-28',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '3.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '9210698977560843813',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '42箱4袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-06-30',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '508.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    },
    {
      baseUnitId: '5967882243866349464',
      baseUnitName: '',
      batchNo: '',
      billCode: '',
      billId: '',
      count: 0,
      customerOrSupplierName: '',
      executeTime: null,
      executeTimeStr: '',
      executeType: '',
      executeTypeCode: '',
      firstTimeStr: '',
      goodsLocation: '',
      id: '5581612388489714805',
      isIn: '',
      lastTimeStr: '',
      num: '',
      numMultiUnits: '6袋',
      outStoreHouseStatus: '',
      pdDate: null,
      pdDateStr: '2022-07-08',
      productCode: '',
      productId: '8593023745312559450',
      productName: '',
      quantity: '6.00000000',
      remarks: '',
      serialNo: '',
      storeHouseName: '',
      validDay: '',
      validPeriod: '',
      validUtil: ''
    }
  ])

  // 修改商品行可编辑单元
  const handleChangeGoods = (val, code) => {
    setState({
      ...state,
      ...val
    })
  }

  return (
    <>
      <SelectDate
        selectRef={selectRef}
        open
        autoFocus
        value={state.expectPdDate}
        options={options}
        formatter={item => (
          <div className='flex flex-between' style={{ justifyContent: 'space-between', display: 'flex', paddingRight: '22px' }}>
            <span>{item.pdDateStr}</span>
            <span>{item.numMultiUnits}</span>
          </div>
        )}
        onChange={(val, item) => {
          handleChangeGoods(
            {
              expectPdDate: val,
              expectPdDateName: item ? options.find(o => o.id === val)?.pdDateStr : val
            },
            'expectPdDate'
          )
        }}
        onDropdownVisibleChange={() => {
          // setEditing(false)
          // // blur=manual 时，需要手动关闭选中状态
          // setSelect(false)
        }}
        style={{ width: '100%' }}
      />

      <SelectDate
        options={options}
        // idField='id'
        // textField='pdDateStr'
        formatter={item => (
          <div
            className='flex flex-around'
            style={{ justifyContent: 'space-between', display: 'flex', paddingRight: '22px' }}>
            <span>{item.pdDateStr}</span>
            <span>{item.numMultiUnits}</span>
          </div>
        )}
        onChange={(val, selected) => {
          console.log(val, selected)
        }}
        onDropdownVisibleChange={() => {
          console.log('onDropdownVisibleChange')
        }}
      />
    </>
  )
}

export default Example
