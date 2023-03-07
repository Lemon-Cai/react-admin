```
import React from 'react';

import { CardContainer, CardBody, CardHead } from 'components/Card'

const Example = () => {
  return (
    <CardContainer>
      <CardHead className='flex flex-middle' onClick={onClickAvatar}>
        <div style={{ height: '100%' }} className='flex flex-between flex-vertical'>
          {faceUrl && faceUrl.indexOf('default-face-small.png') === -1 ? (
            <Avatar size={64} src={faceUrl} />
          ) : (
            <StyledAvatar>{name ? name.substr(name.length - 2, name.length) : ''}</StyledAvatar>
          )}
        </div>
      </CardHead>
      <CardBody>

      </CardBody>
      <CardOthers></CardOthers>
    </CardContainer>
  )
}

export default Example

```