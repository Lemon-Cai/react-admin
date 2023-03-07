/**
 * IE11不支持, 不允许使用
 * 用于get请求,将Json参数转为params字符串
 * @param {Object} obj 格式: {key1: 'value1', key2: 'value2'}
 * @param {String} splitter 分割符, 仅在深度对象{obj: {key1: 'value1', key2: 'value2'}}或{obj: [{key1: 'value1'},{key1: 'value1'}]}时工作
 * {String} stringifyValue value用stringify返回
 * {String} bracket 用[]分割, 默认用点分割
 * @param {String} isNotEnCode 是否需要编码
 * {Boolean} true[默认] 将使用encodeURIComponent(value)
 * {Boolean} false value值原样返回
 * @return {String} 格式key1=value1&key2=value2, obj.key1=value1&obj.key2=value2, obj.0.key1=value1&obj.1.key1=value1
 * @deprecated
 */
 Object.params = function (obj, splitter, isNotEnCode) {
  // 数组, 只支持一维数组[{key1: 'value1', key1: 'value1}]转为key1=value1&key1-value1
  if (obj instanceof Array) {
    let arr = []
    for (let item of obj) {
      arr.push(Object.params(item, splitter, isNotEnCode))
    }
    return arr.join('&')
  }
  // 对象
  if (!Object.isPlainObject(obj)) return obj
  if (obj instanceof Object && obj.length > 0) return ''
  // 把{obj:[{key1:'value1', key2:'value2'}]}转成obj=[{key1:'value1', key2:'value2'}]的方式
  if (splitter === 'stringifyValue') {
    let arr = []
    for (var n in obj) {
      arr.push(n + '=' + JSON.stringify(obj[n]))
    }
    return arr.join('&')
  }
  // 把{key1: 'value1', key2: 'value2'}转成key1=value1&key2=value2
  // 把{obj:[{key1:'value1'}, {key1:'value1'}]}转成obj.0.key1=value1&obj.1.key1=value1
  // 把{obj: {key1: 'value1', key2: 'value2'}}转成obj.key1=value1&obj.key2=value2
  var result = ''
  function buildParams(obj, prevKey) {
    for (var key in obj) {
      if (obj[key] instanceof Object) {
        var prefix = prevKey ? prevKey + '.' + key : key
        buildParams(obj[key], prefix)
      } else {
        if (prevKey) {
          // result += '&' + prevKey + '.' + key + '=' + obj[key]
          if (splitter !== 'bracket')
            result +=
              '&' +
              prevKey +
              '.' +
              key +
              '=' +
              (isNotEnCode ? obj[key] : encodeURIComponent(obj[key]))
          if (splitter === 'bracket')
            result +=
              '&' +
              prevKey +
              '[' +
              key +
              ']=' +
              (isNotEnCode ? obj[key] : encodeURIComponent(obj[key]))
        } else {
          // result += '&' + key + '=' + obj[key]
          result += '&' + key + '=' + (isNotEnCode ? obj[key] : encodeURIComponent(obj[key]))
        }
      }
    }
    return result
  }
  buildParams(obj)
  // 删除result第一个字符&
  if (result) {
    result = result.slice(1)
  }
  return result
}