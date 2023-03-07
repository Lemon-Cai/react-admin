// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Component } from 'react';

import './Checkbox.less'

class Checkbox extends Component {
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    title: '',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
    onKeyDown() {},
    onKeyPress() {},
    onKeyUp() {},
  };

  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      };
    }
    return null;
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange = e => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    if (onChange) {
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent,
      });
    }
  };

  saveInput = node => {
    this.input = node;
  };

  render() {
    const {
      prefixCls,
      className,
      style,
      name,
      id,
      type,
      title,
      disabled,
      readOnly,
      tabIndex,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      autoFocus,
      value,
      required,
      ...others
    } = this.props;

    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        // eslint-disable-next-line no-param-reassign
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const { checked } = this.state;
    const classString = `${prefixCls} ${className} ${
      checked ? [`${prefixCls}-checked`] : ''
    } ${disabled ? [`${prefixCls}-disabled`] : ''}`;

    return (
      <span className={classString} style={style}>
        <input
          name={name}
          id={id}
          type={type}
          title={title}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.saveInput}
          value={value}
          {...globalProps}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
    );
  }
}

export default Checkbox;

// import React from 'react'

// import { useControllableValue } from 'ahooks'
// import styled from 'styled-components'

// const Check = styled.div`
//   width: 16px;
//   height: 16px;
//   background: #ffffff;
//   border: 1px solid rgba(206, 210, 216, 1);
//   border-radius: 2px;
//   box-sizing: border-box;
//   transition: all 0.3s;
//   &:focus {
//     border-color: rgba(255, 144, 8, 1);
//   }
//   &.checked {
//     border-color: rgba(255, 144, 8, 1);
//     background: #ff9008;
//     position: relative;
//     &:after {
//       position: absolute;
//       top: 45%;
//       left: 21.5%;
//       width: 3px;
//       height: 7px;
//       display: table;
//       border: 2px solid #fff;
//       border-top: 0;
//       border-left: 0;
//       transform: rotate(45deg) scale(1) translate(-50%, -50%);
//       opacity: 1;
//       transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
//       content: ' ';
//     }
//   }
// `

// const Checkbox = (props) => {
//   const [state, setState] = useControllableValue(props, {
//     defaultValue: false,
//     valuePropName: 'checked'
//   })
//   const handleClick = () => {
//     setState(!state)
//   }
//   return (
//     <div className="flex">
//       <div className="flex" onClick={handleClick}>
//         <Check
//           className={state ? 'checked' : ''}
//           style={{
//             marginTop: props.label ? '1px' : 0
//           }}
//         />
//         {props.label && (
//           <div
//             style={{
//               marginLeft: '8px',
//               fontFamily: 'PingFangSC-Regular',
//               fontSize: '13px',
//               color: '#35393E',
//               lineHeight: '18px'
//             }}
//           >
//             {props.label}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Checkbox

// import React from 'react'
// import styled from 'styled-components'

// const StyledInput = styled.input`
//     height: 16px;
//     width: 16px;
//   &:checked {
//     border: none;
//     color: #025;
//   }
// `

// const Checkbox = () => {
//   const handleChange = (e) => {
//     console.log(e.target.checked, e.target.value)
//   }
//   return (
//     <div className='checkbox'>
//       <StyledInput name='privacy' type='checkbox' onChange={handleChange}></StyledInput>
//       <label for="point"></label>
//     </div>
//   )
// }

// export default Checkbox
