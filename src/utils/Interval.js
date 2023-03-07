/*
 * @Author: CaiPeng
 * @Date: 2022-12-28 20:15:59
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-03 15:29:07
 * @FilePath: \React\SelectDate\src\utils\Interval.js
 * @Description: 
 */
/**
 * 
 * 创建定时器
 * let animate = Interval(function (animate) {
 *  
 * }, 2000)
 * 
 * 取消定时器
 * animate.cancelAnimate = true
 * 
 * @param {*} cb 回调
 * @param {*} time 间隔时间 毫秒
 * @returns 
 */
export default function Interval(cb, time) {
  const requestFrameAnimate =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame
  // const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

  let animate = { timer: null }
  let cancelAnimate = false

  let startTime = Date.now();

  function loop () {
    let endTime = Date.now();
      if (endTime - startTime >= time) {
        startTime = endTime = Date.now();
        cb && cb(animate.timer);
      }
      if (!cancelAnimate) {
        animate.timer = requestFrameAnimate(loop);
      }
  }
  loop()

  // let startTime
  // function noop (timestamp) {
  //   if (startTime === undefined) {
  //     startTime = timestamp
  //   }
  //   let elapsed = timestamp - startTime

  //   if (elapsed >= time) {
  //     startTime = undefined
  //     cb && cb(animate.timer)
  //   }
  //   if (!animate.cancelAnimate) {
  //     animate.timer = requestFrameAnimate(noop)
  //   }
  // }

  // animate.timer = requestFrameAnimate(noop)

  return animate
}

// Object.defineProperties(Interval, {
//   'cancelAnimate': {
//     enumerable: false,
//     value: function () {
//       this.stop = true
//     }
//   }
// })
