/*
 * @Author: CaiPeng
 * @Date: 2021-12-31 10:18:01
 * @LastEditors: caipeng
 * @LastEditTime: 2021-12-31 17:09:55
 * @Description:
 */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import L from 'leaflet'
import proj4 from 'proj4'
import 'proj4leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import './index.scss'

import PopupImg from './popup.png'
import PopupImgSelected from './popup-selected.png'

/**
 * 在 *.d.ts文件中
  declare interface Window {
    L: any
  }
  或
  断言
  (window as any)
 * 
 */
(window as any).L = L;
(window as any).proj4 = proj4

// let proj4 = require('proj4')
// require('proj4leaflet')

// console.log(proj4, proj4leaflet);
// console.log(L)

const FloatLayer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 12px;
  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
  }
  .title {
    color: #1a1a1a;
    font-size: 16px;
    padding: 12px 0px 0 0px;
  }
  .content {
    color: #999;
    font-size: 14px;
    padding: 10px 0px;
  }
  .footer {
    position: relative;
    text-align: center;
    color: #1a1a1a;
    font-size: 14px;
    padding: 10px 0;
  }
`
Object.defineProperty(Object, 'generateGUID', {
  value: function () {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16) // eslint-disable-line
    })
    return uuid
  },
  writable: true,
  configurable: true,
  enumerable: false
})

let BaiduCRS = new L.Proj.CRS(
  'EPSG:900913',
  '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
  {
    resolutions: (function () {
      let level = 19
      var res = []
      res[0] = Math.pow(2, 18)
      for (var i = 1; i < level; i++) {
        res[i] = Math.pow(2, 18 - i)
      }
      return res
    })(),
    origin: [0, 0],
    bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
  }
)

type Point = {
  distance?: string
  name?: string
  address?: string
}

export default function Leaflet() {
  const [data, setData] = useState<Array<any>>([])

  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null)

  useEffect(() => {
    ;(async function () {
      // 生成测试数据
      let temp = []
      let randomCount = 1000
      for (let i = randomCount; i > 0; i--) {
        let location = [118.778074 + Math.random() / 10, 32.057236 + Math.random() / 10]
        let name = 'jahdfajhfauwgfeabaskd;aks;ldak;-爱上了大点击领取伪球迷cfjashvk'.slice(
          0,
          Math.floor(Math.random() * 20) || 1
        )
        // let img = await _getImgIcon(name)

        let canvas: HTMLCanvasElement = await _canvasPngAddTxt(name) as HTMLCanvasElement
        let url = canvas.toDataURL()
        temp.push({
          id: Object.generateGUID(),
          location: `${location[1]},${location[0]}`,
          coordinates: [location[1], location[0]],
          name: name,
          symbol: 'rect',
          icon: url,
          geometry: {
            type: 'Point',
            coordinates: location
          }
        })
      }
      setData(temp)
    })()
  }, [])

  const _getImgIcon = (name: string, flag?: undefined) => {
    return new Promise(async resolve => {
      let url = flag ? PopupImgSelected : PopupImg
      if (name) {
        let canvas = await _canvasPngAddTxt(name, flag) as HTMLCanvasElement
        url = canvas.toDataURL()
      }
      let img = new Image()
      img.onload = function () {
        resolve(img)
      }
      img.src = url
    })
  }
  /**
   *
   * @param name
   * name value 显示的文字和值
   */
  const _canvasPngAddTxt = (name: string, flag?: undefined) => {
    return new Promise(resolve => {
      let img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = function () {
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D 
        let pixel = window.devicePixelRatio || 1
        let w = img.width
        let h = img.height
        canvas.width = w * pixel
        canvas.height = h * pixel
        canvas.style.width = `${w / pixel}px`
        canvas.style.height = `${h / pixel}px`
        ctx.scale(pixel, pixel)

        let { width } = ctx.measureText(name)
        // // 矩形
        //   ctx.beginPath();
        //   ctx.moveTo(0, 0);
        //   ctx.rect(0, 0, width, 24)
        //   ctx.fillStyle = 'rgba(30, 158, 255, 1)';
        //   ctx.fill()
        //   ctx.strokeStyle = 'rgba(56, 167, 251, 1)';
        //   ctx.stroke();
        //   ctx.closePath()

        // // 三角形 10 * 10 * 10
        //   ctx.beginPath();
        // 	ctx.moveTo(0 + width / 2 - 5, 0 + 24);
        //   ctx.lineTo(0 + width / 2 + 5, 0 + 24);
        //   ctx.lineTo(0 + width / 2, 0 + 24 + 8);
        //   ctx.fill();
        ctx.drawImage(img, 0, 0)

        ctx.font = `${pixel * 10}px serif`
        ctx.fillStyle = '#fff'
        // 文字超出，内容居中
        if (width > w / pixel) {
          ctx.textAlign = 'left'
          ctx.fillText(name, 0, h / 2 + 4)
        } else {
          ctx.textAlign = 'center'
          ctx.fillText(name, w / 2, h / 2 + 4)
        }
        ctx.closePath()

        resolve(canvas)
      }
      img.src = flag ? PopupImgSelected : PopupImg
    })
  }

  const handleClickMarker = (item: Point) => {
    console.log(item)
    setSelectedPoint(item)
  }

  // 详情
  const handleClickDetail = () => {}

  // 导航
  const handleClickNavigation = () => {}

  const handleClose = () => {
    setSelectedPoint(null)
  }

  return (
    <div className='map'>
      <MapContainer
        center={[32, 118.7]}
        zoom={12}
        minZoom={4}
        crs={BaiduCRS}
        maxZoom={18}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '800px' }}>
        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url="http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"
          // url="http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&b=0&limit=60&scaler=1&udt=20170525"
          // url='http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020'

          // 高德
          // url="http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
          // subdomains="1234"

          url='https://maponline{s}.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=2&udt=20211230&from=jsapi3_0'
          // 百度矢量图层
          // url='http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1&ak=3pTjiH1BXLjASHeBmWUuSF83'

          // 百度影像地图
          // url="http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46"

          //customid 可选值： dark,midnight,grayscale,hardedge,light,redalert,googlelite,grassgreen,pink,darkgreen,bluish
          // url='http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=bluish'

          // url="http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&udt=20160928&scale=1&styles=t%3Abackground%7Ce%3Aall%7Cc%3A%23034dc1%7Ch%3A%23034dc1"
          subdomains='0123'
          tms={true}
        />
        {data.map((item: any) => (
          <Marker
            key={item.id}
            position={item.coordinates}
            icon={L.icon({
              iconUrl: item.icon,
              iconSize: [231 / 3, 78 / 3],
              iconAnchor: [0, 0]
            })}
            eventHandlers={{
              click: e => {
                e.originalEvent.stopPropagation()
                handleClickMarker(item)
              }
            }}></Marker>
        ))}
      </MapContainer>
      {selectedPoint && (
        <FloatLayer>
          <i onClick={handleClose} className='icon icon-close-fill'></i>
          <div className='title'>{selectedPoint.name}</div>
          <div className='content border-b'>
            {`距您${selectedPoint.distance}`}|{selectedPoint.address || ''}
          </div>
          <div className='footer flex'>
            <div className='flex-1 border-r' onClick={() => handleClickDetail}>
              详情
            </div>
            <div className='flex-1' onClick={() => handleClickNavigation}>
              到这去
            </div>
          </div>
        </FloatLayer>
      )}
    </div>
  )
}
