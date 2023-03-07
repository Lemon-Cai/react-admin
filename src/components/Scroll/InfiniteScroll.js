import React, { useEffect, useState } from 'react'
import throttle from 'lodash/throttle';
import { ThresholdUnits, parseThreshold } from './threshold';

function wrapper() {
  let throttledOnScrollListener
  let _scrollableNode
  let el
  let _infScroll
  let lastScrollTop = 0
  let actionTriggered = false
  let _pullDown

  // variables to keep track of pull down behaviour
  let startY = 0
  let currentY = 0
  let dragging = false

  // will be populated in componentDidMount
  // based on the height of the pull down element
  let maxPullDownDistance = 0

  function Cmp(props) {
    const [state, setState] = useState({
      showLoader: false,
      pullToRefreshThresholdBreached: false,
      prevDataLength: props.dataLength
    })

    useEffect(() => {
      if (typeof props.dataLength === 'undefined') {
        throw new Error(
          `mandatory prop "dataLength" is missing. The prop is needed` +
            ` when loading more content. Check README.md for usage`
        )
      }
      _scrollableNode = getScrollableTarget()
      throttledOnScrollListener = throttle(onScrollListener, 150)

      el = props.height ? _infScroll : _scrollableNode || window
      if (el) {
        el.addEventListener(
          'scroll',
          throttledOnScrollListener
        )
      }

      if (
        typeof props.initialScrollY === 'number' &&
        el &&
        el instanceof HTMLElement &&
        el.scrollHeight > props.initialScrollY
      ) {
        el.scrollTo(0, props.initialScrollY)
      }

      if (props.pullDownToRefresh && el) {
        el.addEventListener('touchstart', onStart)
        el.addEventListener('touchmove', onMove)
        el.addEventListener('touchend', onEnd)

        el.addEventListener('mousedown', onStart)
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseup', onEnd)

        maxPullDownDistance =
          (_pullDown?.firstChild)?.getBoundingClientRect?.()?.height || 0

        forceUpdate()

        if (typeof props.refreshFunction !== 'function') {
          throw new Error(
            `Mandatory prop "refreshFunction" missing.
            Pull Down To Refresh functionality will not work
            as expected. Check README.md for usage'`
          )
        }
      }

      return () => {
        if (el) {
          el.removeEventListener(
            'scroll',
            throttledOnScrollListener
          )

          if (props.pullDownToRefresh) {
            el.removeEventListener('touchstart', onStart)
            el.removeEventListener('touchmove', onMove)
            el.removeEventListener('touchend', onEnd)

            el.removeEventListener('mousedown', onStart)
            el.removeEventListener('mousemove', onMove)
            el.removeEventListener('mouseup', onEnd)
          }
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      actionTriggered = false
      setState({
        ...state,
        showLoader: false
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.dataLength])

    const getScrollableTarget = () => {
      if (props.scrollableTarget instanceof HTMLElement) return props.scrollableTarget
      if (typeof props.scrollableTarget === 'string') {
        return document.getElementById(props.scrollableTarget)
      }
      if (props.scrollableTarget === null) {
        console.warn(`You are trying to pass scrollableTarget but it is null. This might
          happen because the element may not have been added to DOM yet.
          See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
        `)
      }
      return null
    }

    const onStart = (evt) => {
      if (lastScrollTop) return

      dragging = true

      if (evt instanceof MouseEvent) {
        startY = evt.pageY
      } else if (evt instanceof TouchEvent) {
        startY = evt.touches[0].pageY
      }
      currentY = startY

      if (_infScroll) {
        _infScroll.style.willChange = 'transform'
        _infScroll.style.transition = `transform 0.2s cubic-bezier(0,0,0.31,1)`
      }
    }
    const onMove = (evt) => {
      if (!dragging) return

      if (evt instanceof MouseEvent) {
        currentY = evt.pageY
      } else if (evt instanceof TouchEvent) {
        currentY = evt.touches[0].pageY
      }

      // user is scrolling down to up
      if (currentY < startY) return

      if (currentY - startY >= Number(props.pullDownToRefreshThreshold)) {
        setState({
          ...state,
          pullToRefreshThresholdBreached: true
        })
      }

      // so you can drag upto 1.5 times of the maxPullDownDistance
      if (currentY - startY > maxPullDownDistance * 1.5) return

      if (_infScroll) {
        _infScroll.style.overflow = 'visible'
        _infScroll.style.transform = `translate3d(0px, ${currentY - startY}px, 0px)`
      }
    }
    const onEnd = () => {
      startY = 0
      currentY = 0

      dragging = false

      if (state.pullToRefreshThresholdBreached) {
        props.refreshFunction && props.refreshFunction()
        setState({
          ...state,
          pullToRefreshThresholdBreached: false
        })
      }

      requestAnimationFrame(() => {
        // _infScroll
        if (_infScroll) {
          _infScroll.style.overflow = 'auto'
          _infScroll.style.transform = 'none'
          _infScroll.style.willChange = 'unset'
        }
      })
    }

    const forceUpdate = () => {}

    const isElementAtTop = (target, scrollThreshold = 0.8) => {
      const clientHeight =
        target === document.body || target === document.documentElement
          ? window.screen.availHeight
          : target.clientHeight;
  
      const threshold = parseThreshold(scrollThreshold);
  
      if (threshold.unit === ThresholdUnits.Pixel) {
        return (
          target.scrollTop <=
          threshold.value + clientHeight - target.scrollHeight + 1
        );
      }
  
      return (
        target.scrollTop <=
        threshold.value / 100 + clientHeight - target.scrollHeight + 1
      );
    }
  
    const isElementAtBottom = (
      target,
      scrollThreshold = 0.8
    ) => {
      const clientHeight =
        target === document.body || target === document.documentElement
          ? window.screen.availHeight
          : target.clientHeight;
  
      const threshold = parseThreshold(scrollThreshold);
  
      if (threshold.unit === ThresholdUnits.Pixel) {
        return (
          target.scrollTop + clientHeight >= target.scrollHeight - threshold.value
        );
      }
  
      return (
        target.scrollTop + clientHeight >=
        (threshold.value / 100) * target.scrollHeight
      );
    }

    const onScrollListener = (event) => {
      if (typeof props.onScroll === 'function') {
        // Execute this callback in next tick so that it does not affect the
        // functionality of the library.
        setTimeout(() => props.onScroll && props.onScroll(event), 0);
      }
  
      const target =
        props.height || _scrollableNode
          ? event.target
          : document.documentElement.scrollTop
          ? document.documentElement
          : document.body;
  
      // return immediately if the action has already been triggered,
      // prevents multiple triggers.
      if (actionTriggered) return;
  
      const atBottom = props.inverse
        ? isElementAtTop(target, props.scrollThreshold)
        : isElementAtBottom(target, props.scrollThreshold);
  
      // call the `next` function in the props to trigger the next data fetch
      if (atBottom && props.hasMore) {
        actionTriggered = true;
        setState({ ...state, showLoader: true });
        props.next && props.next();
      }
  
      lastScrollTop = target.scrollTop;
    }

    const style = {
      height: props.height || 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      ...props.style
    }
    const hasChildren =
      props.hasChildren ||
      !!(props.children && props.children instanceof Array && props.children.length)

    // because heighted infiniteScroll visualy breaks
    // on drag down as overflow becomes visible
    const outerDivStyle = props.pullDownToRefresh && props.height ? { overflow: 'auto' } : {}
    return (
      <div
        style={outerDivStyle}
        className='infinite-scroll-component__outerdiv'>
        <div
          className={`infinite-scroll-component ${props.className || ''}`}
          ref={(infScroll) => (_infScroll = infScroll)}
          style={style}>
          {props.pullDownToRefresh && (
            <div
              style={{ position: 'relative' }}
              ref={(pullDown) => (_pullDown = pullDown)}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: -1 * maxPullDownDistance
                }}>
                {state.pullToRefreshThresholdBreached
                  ? props.releaseToRefreshContent
                  : props.pullDownToRefreshContent}
              </div>
            </div>
          )}
          {props.children}
          {!state.showLoader && !hasChildren && props.hasMore && props.loader}
          {state.showLoader && props.hasMore && props.loader}
          {!props.hasMore && props.endMessage}
        </div>
      </div>
    )
  }
  // Cmp.defaultProps = {
  //   next: Fn,
  //   hasMore: boolean,
  //   children: ReactNode,
  //   loader: ReactNode,
  //   scrollThreshold?: number | string,
  //   endMessage?: ReactNode,
  //   style?: CSSProperties,
  //   height?: number | string,
  //   scrollableTarget?: ReactNode,
  //   hasChildren?: boolean,
  //   inverse?: boolean,
  //   pullDownToRefresh?: boolean,
  //   pullDownToRefreshContent?: ReactNode,
  //   releaseToRefreshContent?: ReactNode,
  //   pullDownToRefreshThreshold?: number,
  //   refreshFunction?: Fn,
  //   onScroll?: (e: MouseEvent) => any,
  //   dataLength: number,
  //   initialScrollY?: number,
  //   className?: string,
  // }
  return Cmp
}

const InfiniteScroll = wrapper()

export default InfiniteScroll
