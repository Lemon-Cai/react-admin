/*
 * @Author: CaiPeng
 * @Date: 2023-01-17 18:53:44
 * @LastEditors: caipeng
 * @LastEditTime: 2023-02-02 15:17:23
 * @FilePath: \React\SelectDate\src\components\Rate\index.tsx
 * @Description: 
 */
import React from 'react'
import classNames from 'classnames'

import Icon from 'components/Icon'

import './index.scss'

export interface IRateProps {
  count: number | string
  value: number | undefined | null
  tips: Array<string>
  disabled?: boolean
  style?: React.CSSProperties
  className?: string

  onChange?: (value: number) => void

  [propName: string]: any
}

const Rate = (
  {
    count = 5,
    value,
    tips = [],
    disabled,

    className,
    style,
    onChange,
    ...others
  }: IRateProps,
  ref: any
) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget?.parentElement) {
      let index = (e.currentTarget?.dataset.index || 0) as number

      let nodeList = e.currentTarget.parentElement.querySelectorAll('li')
      nodeList.forEach((ele: HTMLElement, idx: number) => {
        if (idx <= index) {
          ele.classList.add('on')
        }
      })
    }
  }
  const handleMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget?.parentElement) {
      let nodeList = e.currentTarget.parentElement.querySelectorAll('li')
      nodeList.forEach((ele: HTMLElement, idx: number) => {
        ele.classList.remove('on')
      })
    }
  }
  const handleStarClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget) {
      let score = ((e.currentTarget?.dataset?.index || 0) as number) - 0 + 1
      onChange && onChange(score)
    }
  }

  let arr = new Array(count)
  let extraProps: any = {}
  if (!disabled) {
    extraProps = {
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
      onClick: handleStarClick
    }
  }
  return (
    <ul
      className={classNames('c-rate', className, {
        'c-rate-disabled': disabled
      })}
      style={style}
      title={value ? tips[value - 1] : ''}>
      {Array.from(arr).map((o, index) => {
        // let title = value ? '' : tips[index]
        if (!value) extraProps.title = tips[index]
        return (
          <li
            key={index}
            className={classNames({ on: index + 1 <= (value as number) })}
            // title={title}
            data-index={index}
            {...extraProps}>
            <Icon type='icon-star' /> 
          </li>
        )
      })}
    </ul>
  )
}

export default React.forwardRef(Rate)
