import React, { forwardRef } from 'react';
const CardContainer = (props, ref) => {
  let style = {
    ...(props.style || {})
  }
  if (props.layout === 'horizontal') {
    // 水平布局，默认垂直
    style = {
      ...style,
      display: 'flex'
    }
  }
  return (
    <div className='card__wrapper' { ...props } style={style} ref={ref}>
    </div>
  )
}

export default forwardRef(CardContainer)