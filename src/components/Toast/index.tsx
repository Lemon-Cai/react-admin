import React, { ReactNode, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import './index.scss'
// type types = Array<{
//   visible: Boolean;
// }>

type PropsType = {
  destroy?: Function
  type: string;
  message?: ReactNode | undefined | string | number;
  children?: ReactNode | undefined | string | number;
  showClose?: boolean;
  left?: string;
  top?: string;
  className?: string;
  [propName: string]: any;
}

const types: Array<String> = ['success', 'info', 'error', 'default', 'warning']
const destroyFns: Array<any> = []

const Toast = (props: PropsType) => {
  const { type, children, showClose, left, top } = props
  const [visible, setVisible] = useState(props.visible)

  const handleCloseToast = () => {
    setVisible(false)
    props.destroy && props.destroy()
  }

  return visible ? (
    <div
      className={classNames(
        `toast`,
        {
          'toast-default': types.indexOf(type) < 0,
          [`toast-${type}`]: types.indexOf(type) > -1
        },
        props.className
      )}
      style={{ left, top }}
    >
      {children}
      {showClose ? (
        <span className='toast-close-btn' onClick={handleCloseToast}>
          &times;
        </span>
      ) : null}
    </div>
  ) : null
}

export function createToast(config: PropsType) {
  const div:HTMLElement = document.createElement('div')
  const app = document.querySelector('#container')
  app?.appendChild(div)

  let currentConfig = { ...config, close, visible: true, destroy }

  // 关闭
  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false
    }
    render(currentConfig)
  }
  // 销毁
  function destroy () {
    const unMountResult = ReactDOM.unmountComponentAtNode(div)
    if (unMountResult && div.parentElement) {
      div.parentElement.removeChild(div)
    }
    for (let i = 0, l = destroyFns.length; i < l; i++) {
      const fn = destroyFns[i]
      if (fn === close) {
        destroyFns.splice(i, 1)
        break
      }
    }
  }

  function render(props: any) {
    setTimeout(() => ReactDOM.render(<Toast {...props}>{props?.message}</Toast>, div))
  }

  function update(updateConfig: any) {
    if (typeof updateConfig === 'function') {
      currentConfig = updateConfig(currentConfig)
    } else {
      currentConfig = {
        ...currentConfig,
        ...updateConfig
      }
    }
    render(currentConfig)
  }

  render(currentConfig)
  destroyFns.push(destroy)

  let autoCloseTime = Number(config.autoCloseTime)
  autoCloseTime = Number.isNaN(autoCloseTime) ? 0 : Math.min(10000, autoCloseTime)
  if (autoCloseTime > 0) {
    setTimeout(() => {
      destroy()
    }, autoCloseTime)
  }
  return {
    destroy,
    close,
    update
  }
}

createToast.destroyAll = () => {
  destroyFns.forEach(destroy => {
    destroy && destroy()
  })
}
