import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ThresholdUnits, parseThreshold } from './threshold'

// const InfiniteScroll = (function () {
  
//   return InfiniteScroll
// })()

let el
let actionTriggered = false // 防止多次触发next,

function InfiniteScroll(props) {
  const [state, setState] = useState({
    showLoader: false,
    prevDataLength: props.dataLength
  })

  useEffect(() => {
    if (props.dataLength !== state.prevDataLength) {
      actionTriggered = false

      // update state when new data was sent in
      setState(prev => ({
        ...prev,
        prevDataLength: props.dataLength, // 比较dataLength，更新 dataLength，同时 判断是否在loader
        showLoader: false
      }))
    }
  }, [props.dataLength, state.prevDataLength])

  useEffect(() => {
    if (typeof props.dataLength === 'undefined') {
      throw new Error(
        `mandatory prop "dataLength" is missing. The prop is needed`
      )
    }

    el = getScrollableTarget() || window

    if (el) {
      el.addEventListener('scroll', onScrollListener)
    }
    
    return () => {
      if (el) {
        el.removeEventListener('scroll', onScrollListener)
      }
    }
  // eslint-disable-next-line
  }, [])

  const getScrollableTarget = () => {
    if (props.scrollableTarget instanceof HTMLElement) return props.scrollableTarget
    if (typeof props.scrollableTarget === 'string') {
      return document.getElementById(props.scrollableTarget)
    }
    if (props.scrollableTarget === null) {
      console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
      `)
    }
    return null
  }

  const isElementAtBottom = (target, scrollThreshold = 0.8) => {
    const clientHeight =
      target === document.body || target === document.documentElement
        ? window.screen.availHeight
        : target.clientHeight

    const threshold = parseThreshold(scrollThreshold)

    if (threshold.unit === ThresholdUnits.Pixel) {
      return target.scrollTop + clientHeight >= target.scrollHeight - threshold.value
    }

    return target.scrollTop + clientHeight >= (threshold.value / 100) * target.scrollHeight
  }

  const onScrollListener = event => {
    if (typeof props.onScroll === 'function') {
      // Execute this callback in next tick so that it does not affect the
      // functionality of the library.
      setTimeout(() => props.onScroll && props.onScroll(event), 0)
    }

    const target = event.target

    // return immediately if the action has already been triggered,
    // prevents multiple triggers.
    if (actionTriggered) return

    const atBottom = isElementAtBottom(target, props.scrollThreshold)

    // call the `next` function in the props to trigger the next data fetch
    if (atBottom && props.hasMore) {
      actionTriggered = true
      setState(prev => ({ ...prev, showLoader: true }))
      props.next && props.next()
    }

  }

  return (
    <div className='infinite-scroll-component'>
      {React.cloneElement(props.children)}
      {state.showLoader && props.hasMore && props.loader}
      {!props.hasMore && props.endMessage}
    </div>
  )
}

InfiniteScroll.propTypes = {
  next: PropTypes.func,
  hasMore: PropTypes.bool,
  children: PropTypes.node, // 指React Node,任何可被渲染的元素,包括ReactChild | ReactFragment | ReactPortal | 字符串 | 数字 | 布尔值 | null | undefined | 数组
  loader: PropTypes.node,
  dataLength: PropTypes.number,
}


export default InfiniteScroll

// export default class InfiniteScroll extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showLoader: false,
//       pullToRefreshThresholdBreached: false,
//       prevDataLength: props.dataLength,
//     };

//     this.throttledOnScrollListener = this.onScrollListener.bind(
//       this
//     );
//   }

//   static throttledOnScrollListener;
//   static _scrollableNode;
//   static el;
//   static _infScroll;
//   static lastScrollTop = 0;
//   static actionTriggered = false;
//   static _pullDown;

//   componentDidMount() {
//     if (typeof this.props.dataLength === 'undefined') {
//       throw new Error(
//         `mandatory prop "dataLength" is missing. The prop is needed` +
//           ` when loading more content. Check README.md for usage`
//       );
//     }

//     this._scrollableNode = this.getScrollableTarget();
//     this.el = this.props.height
//       ? this._infScroll
//       : this._scrollableNode || window;

//     if (this.el) {
//       this.el.addEventListener('scroll', this.throttledOnScrollListener);
//     }

//     if (
//       typeof this.props.initialScrollY === 'number' &&
//       this.el &&
//       this.el instanceof HTMLElement &&
//       this.el.scrollHeight > this.props.initialScrollY
//     ) {
//       this.el.scrollTo(0, this.props.initialScrollY);
//     }
//   }

//   componentWillUnmount() {
//     if (this.el) {
//       this.el.removeEventListener('scroll', this.throttledOnScrollListener);
//     }
//   }

//   componentDidUpdate(prevProps) {
//     // do nothing when dataLength is unchanged
//     if (this.props.dataLength === prevProps.dataLength) return;

//     this.actionTriggered = false;

//     // update state when new data was sent in
//     this.setState({
//       showLoader: false,
//     });
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     const dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;

//     // reset when data changes
//     if (dataLengthChanged) {
//       return {
//         ...prevState,
//         prevDataLength: nextProps.dataLength,
//       };
//     }
//     return null;
//   }

//   getScrollableTarget = () => {
//     if (this.props.scrollableTarget instanceof HTMLElement)
//       return this.props.scrollableTarget;
//     if (typeof this.props.scrollableTarget === 'string') {
//       return document.getElementById(this.props.scrollableTarget);
//     }
//     if (this.props.scrollableTarget === null) {
//       console.warn(`You are trying to pass scrollableTarget but it is null. This might
//         happen because the element may not have been added to DOM yet.
//         See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
//       `);
//     }
//     return null;
//   };

//   isElementAtBottom(
//     target,
//     scrollThreshold = 0.8
//   ) {
//     const clientHeight =
//       target === document.body || target === document.documentElement
//         ? window.screen.availHeight
//         : target.clientHeight;

//     const threshold = parseThreshold(scrollThreshold);

//     if (threshold.unit === ThresholdUnits.Pixel) {
//       return (
//         target.scrollTop + clientHeight >= target.scrollHeight - threshold.value
//       );
//     }

//     return (
//       target.scrollTop + clientHeight >=
//       (threshold.value / 100) * target.scrollHeight
//     );
//   }

//   onScrollListener = (event) => {
//     if (typeof this.props.onScroll === 'function') {
//       // Execute this callback in next tick so that it does not affect the
//       // functionality of the library.
//       setTimeout(() => this.props.onScroll && this.props.onScroll(event), 0);
//     }

//     const target =
//       this.props.height || this._scrollableNode
//         ? event.target
//         : document.documentElement.scrollTop
//         ? document.documentElement
//         : document.body;

//     // return immediately if the action has already been triggered,
//     // prevents multiple triggers.
//     if (this.actionTriggered) return;

//     const atBottom = this.isElementAtBottom(target, this.props.scrollThreshold);

//     // call the `next` function in the props to trigger the next data fetch
//     if (atBottom && this.props.hasMore) {
//       this.actionTriggered = true;
//       this.setState({ showLoader: true });
//       this.props.next && this.props.next();
//     }

//     // lastScrollTop = target.scrollTop;
//   };

//   render() {
//     const style = {
//       height: this.props.height || 'auto',
//       overflow: 'auto',
//       WebkitOverflowScrolling: 'touch',
//       ...this.props.style,
//     };

//     // because heighted infiniteScroll visualy breaks
//     // on drag down as overflow becomes visible
//     return (
//       <div
//         className="infinite-scroll-component__outerdiv"
//       >
//         <div
//           className={`infinite-scroll-component ${this.props.className || ''}`}
//           ref={(infScroll) => (this._infScroll = infScroll)}
//           style={style}
//         >
//           {this.props.children}
//           {this.state.showLoader && this.props.hasMore && this.props.loader}
//           {!this.props.hasMore && this.props.endMessage}
//         </div>
//       </div>
//     );
//   }
// }
