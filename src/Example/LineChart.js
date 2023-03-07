import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

// npm install @ant-design/charts --save
const LineChart = () => {
  const data = [
  {
    "month": "1月",
    "name": "利润",
    "temperature": 22251.18
  },
  {
    "month": "1月",
    "name": "收入",
    "temperature": 28931.04
  },
  {
    "month": "1月",
    "name": "支出",
    "temperature": 6679.86
  },
  {
    "month": "2月",
    "name": "利润",
    "temperature": -201670.03
  },
  {
    "month": "2月",
    "name": "收入",
    "temperature": 93218.49
  },
  {
    "month": "2月",
    "name": "支出",
    "temperature": 294888.52
  },
  {
    "month": "3月",
    "name": "利润",
    "temperature": 117221.44
  },
  {
    "month": "3月",
    "name": "收入",
    "temperature": 164478.55
  },
  {
    "month": "3月",
    "name": "支出",
    "temperature": 47257.11
  },
  {
    "month": "4月",
    "name": "利润",
    "temperature": 16184.38
  },
  {
    "month": "4月",
    "name": "收入",
    "temperature": 31301.12
  },
  {
    "month": "4月",
    "name": "支出",
    "temperature": 15116.74
  },
  {
    "month": "5月",
    "name": "利润",
    "temperature": 228145.71
  },
  {
    "month": "5月",
    "name": "收入",
    "temperature": 246474.42
  },
  {
    "month": "5月",
    "name": "支出",
    "temperature": 18328.71
  },
  {
    "month": "6月",
    "name": "利润",
    "temperature": -1383.52
  },
  {
    "month": "6月",
    "name": "收入",
    "temperature": 22698.77
  },
  {
    "month": "6月",
    "name": "支出",
    "temperature": 24082.29
  },
  {
    "month": "7月",
    "name": "利润",
    "temperature": 44474.39
  },
  {
    "month": "7月",
    "name": "收入",
    "temperature": 55859.6
  },
  {
    "month": "7月",
    "name": "支出",
    "temperature": 11385.21
  },
  {
    "month": "8月",
    "name": "利润",
    "temperature": 47.92
  },
  {
    "month": "8月",
    "name": "收入",
    "temperature": 3997.16
  },
  {
    "month": "8月",
    "name": "支出",
    "temperature": 3949.24
  },
  {
    "month": "9月",
    "name": "利润",
    "temperature": 0
  },
  {
    "month": "9月",
    "name": "收入",
    "temperature": 0
  },
  {
    "month": "9月",
    "name": "支出",
    "temperature": 0
  },
  {
    "month": "10月",
    "name": "利润",
    "temperature": 0
  },
  {
    "month": "10月",
    "name": "收入",
    "temperature": 0
  },
  {
    "month": "10月",
    "name": "支出",
    "temperature": 0
  },
  {
    "month": "11月",
    "name": "利润",
    "temperature": 0
  },
  {
    "month": "11月",
    "name": "收入",
    "temperature": 0
  },
  {
    "month": "11月",
    "name": "支出",
    "temperature": 0
  },
  {
    "month": "12月",
    "name": "利润",
    "temperature": 0
  },
  {
    "month": "12月",
    "name": "收入",
    "temperature": 0
  },
  {
    "month": "12月",
    "name": "支出",
    "temperature": 0
  }
]
  const config = {
    data,
    autoFit: true,
    height: 260,
    xField: 'month',
    yField: 'temperature',
      seriesField: 'name',
    // label: {},
    point: {
      size: 5,
      shape: 'circle',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },

    interactions: [
      {
        type: 'element-active',
      },
    ],
    legend: {
      layout: 'horizontal',
      position: 'top-right', // 摆放位置
      custom: true,  // 自定义样式
      items: [
        {
          name: '利润',
          marker: {
             // 是否为方块
            symbol: 'square',
            style: {
               // 填充颜色，注意要与线条颜色对应。
              fill: '#E09B27',
            },
          },
        },
        {
          name: '收入',
          marker: {
            symbol: 'square',
            style: {
              fill: '#38A636',
            },          
          },
        },
            {
          name: '支出',
          marker: {
            symbol: 'square',
            style: {
              fill: '#38A636',
            },          
          },
        },
      ]
      // items: [
      //     {id: '利润', name: '利润', value: 'temperature', marker: {
      //       symbol:'triangle'
      //     }},
      //     {id: '收入', name: '收入', value: 'temperature'},
      //     {id: '支出', name: '支出', value: 'temperature'},
      // ],
    }
  };
  return <Line {...config} />;
};

export default LineChart