import React from 'react'

import { Button } from 'antd'

interface IProps {
  buried?: string
  onClick?: Function | undefined
  [propsName: string]: any
}

const BuriedButton: React.FC<IProps> = ({ buried, onClick, ...others }) => {

  const handleClick = (e: any) => {
    const { id, className, outerHTML } = e.target
    // @ts-ignore
    if (buried && window.SDK) {
      // @ts-ignore
      window.SDK.actionReport({
        data: {
          buried,
          id, 
          className,
          outerHTML
        }, // 其他必要传递的信息
      })
    }
    onClick && onClick(e)
  }

  return (
    <Button onClick={handleClick} {...others}></Button>
  )
}

export default BuriedButton