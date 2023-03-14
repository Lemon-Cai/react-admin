/*
 * @Author: CaiPeng
 * @Date: 2022-11-25 13:32:03
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-14 14:27:02
 * @FilePath: \React\SelectDate\src\object.d.ts
 * @Description: 
 */
Object.defineProperty(Object, 'generateGUID', {
  value: function () {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16) // eslint-disable-line
    })
    return uuid
  },
  writable: true,
  configurable: true,
  enumerable: false
})

interface Object {
  generateGUID
}

// eslint-disable-next-line no-extend-native
// Object.prototype.generateGUID = function () {
//   var d = new Date().getTime()
//   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//     var r = (d + Math.random() * 16) % 16 | 0
//     d = Math.floor(d / 16)
//     return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16) // eslint-disable-line
//   })
//   return uuid
// }