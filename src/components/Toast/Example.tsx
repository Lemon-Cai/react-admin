import React, { useEffect, useState } from 'react'
import { createToast } from './index'

// 声明数据类型
type stateTypes = {
  leftPositions: Array<any>
  topPositions: Array<any>
}

const messages = ['消息内容1', '消息内容2', '消息内容3', '消息内容4', '消息内容5']

const types = ['success', 'info', 'error', 'default', 'warning']
const getRandom = (data: Array<any>) => data[Math.floor(Math.random() * data.length)]
const randomRange = (min: number, max: number): Number =>
  Math.floor(Math.random() * (max - min + 1)) + min
const DOCUMENT_TITLE = 'toast-notification'

const Example = () => {
  const [state, setState] = useState<stateTypes>({
    leftPositions: [],
    topPositions: []
  })
  useEffect(() => {
    if (document.title !== DOCUMENT_TITLE) {
      document.title = DOCUMENT_TITLE
    }
    initPositions()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, []) // eslint-disable-line

  const onResizeHandler = () => {
    initPositions()
  }
  const initPositions = () => {
    let maxWidth = window.innerWidth - 230,
      maxHeight = window.innerHeight - 160
    const leftPositions: any[] = [],
      topPositions: any[] = []
    for (let i = 0; i < 20; i++) {
      leftPositions.push(randomRange(0, maxWidth))
      topPositions.push(randomRange(0, maxHeight))
    }
    Promise.resolve().then(() => {
      setState({
        leftPositions: leftPositions,
        topPositions: topPositions
      })
    })
  }
  const createAutoNotification = () => {
    const randomType = getRandom(types)
    const randomMessage = getRandom(messages)
    const left = getRandom(state.leftPositions)
    const top = getRandom(state.topPositions)
    createToast({
      message: randomMessage,
      type: randomType,
      autoCloseTime: 3000,
      // showClose: true,
      left,
      top
    })
  }
  const createNotAutoNotification = () => {
    const randomType = getRandom(types)
    const randomMessage = getRandom(messages)
    const left = getRandom(state.leftPositions)
    const top = getRandom(state.topPositions)
    createToast({
      message: randomMessage,
      type: randomType,
      showClose: true,
      left,
      top
    })
  }

  return (
    <div className='app'>
      <div className='btn-group'>
        <button
          id='autoBtn'
          className='createToastBtn'
          type='button'
          onClick={createAutoNotification}>
          show Notification(auto close)
        </button>
        <h2>Notification</h2>
        <button
          id='notAutoBtn'
          className='createToastBtn'
          type='button'
          onClick={createNotAutoNotification}>
          show Notification(not auto close)
        </button>
      </div>
      <div className='toast-container'></div>
    </div>
  )
}

export default Example
