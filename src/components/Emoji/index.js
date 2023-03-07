/* 下版本拟添加功能：
 TS重构组件
*/

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { getMenuList, getSelectList, getEmojiImgUrl } from './emojiList'

import './index.css'

const ReactEmojiEditor = forwardRef((props, ref) => {
  const {
    id = 'emotor',
    className = '',
    width = '100%',
    onChange = function () {},
    placeholder = '',
    defaultValue = ''
  } = props

  useEffect(() => {
    if (defaultValue !== '') {
      let content = parseEmojiStr(defaultValue + ' ')
      document.getElementById(id).innerHTML = content
    }
  }, [])

  useImperativeHandle(ref, () => ({
    /* 声明方法用于聚焦input框 */
    onFocus() {
      // console.log("run onFocus");
      editorOnfocus()
    },

    /* 声明方法用于清空input的值 */
    clean() {
      // console.log("run clean");
      let element = document.getElementById(id)
      element.innerHTML = ''
    }
  }))

  // 获取menu栏emoji图片地址
  const [menuList] = useState(getMenuList())
  const [selectList] = useState(getSelectList())
  const [selectType, setSelectType] = useState('')
  const [mouseInCon, setMouseInCon] = useState(0)

  // 当光标进入菜单栏时触发，修改selectType值并动态添加emoji图片节点
  function selectMenu(type) {
    setSelectType(type)

    let selectElement = document.getElementById(type)
    // if(type.indexOf('-') > -1){
    type = type.split('-')[1]
    // }
    if (selectElement.children.length == 0) {
      for (let index = 0; index < selectList.length; index++) {
        if (selectList[index].type == type) {
          selectList[index].data.map(emojiItem => {
            let aNode = document.createElement('a')
            aNode.className = 'select-item'
            aNode.href = 'javascript:;'
            aNode.onclick = () => selectEmoji(emojiItem.imgUrl)
            let imgNode = document.createElement('img')
            imgNode.className = 'select-item-img'
            imgNode.src = emojiItem.imgUrl
            aNode.appendChild(imgNode)
            selectElement.appendChild(aNode)
          })
        }
      }
    }
  }

  // 当输入框内容发生变化时的回调函数
  function contentChanged() {
    let str = document.getElementById(id).innerHTML
    str = unicodeToutf16(str)
    str = htmlToStr(str)
    onChange(str)
  }

  // 将含有HTML标签的字符串转换成纯文本
  function htmlToStr(str) {
    str = str
      .replace(new RegExp('&#10;', 'g'), '\n')
      .replace(new RegExp('&#09;', 'g'), '\t')
      .replace(new RegExp('<img[^>]*alt="([^"]+)"[^>]*>', 'ig'), '$1')
      .replace(new RegExp('\n|\r', 'g'), '')
      .replace(new RegExp('<br[^>]*>', 'ig'), '\n')
      .replace(new RegExp('(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+', 'ig'), '<div>')
      .replace(new RegExp('(?:</(?:div|p|ol|ul|li|pre|code|object)>)+', 'ig'), '</div>')
      .replace(new RegExp('\n<div></div>', 'ig'), '\n')
      .replace(new RegExp('<div></div>\n', 'ig'), '\n')
      .replace(new RegExp('(?:<div>)+</div>', 'ig'), '\n')
      .replace(new RegExp('([^\n])</div><div>', 'ig'), '$1\n')
      .replace(new RegExp('(?:</div>)+', 'ig'), '</div>')
      .replace(new RegExp('([^\n])</div>([^\n])', 'ig'), '$1\n$2')
      .replace(new RegExp('</div>', 'ig'), '')
      .replace(new RegExp('([^\n])<div>', 'ig'), '$1\n')
      .replace(new RegExp('\n<div>', 'ig'), '\n')
      .replace(new RegExp('<div>\n', 'ig'), '\n\n')
      .replace(new RegExp('<(?:[^>]+)?>', 'g'), '')
      .replace(new RegExp('&#8203;', 'g'), '')
      .replace(new RegExp('&nbsp;', 'g'), ' ')
      .replace(new RegExp('&lt;', 'g'), '<')
      .replace(new RegExp('&gt;', 'g'), '>')
      .replace(new RegExp('&quot;', 'g'), '"')
      .replace(new RegExp('&#x27;', 'g'), "'")
      .replace(new RegExp('&#x60;', 'g'), '`')
      .replace(new RegExp('&#60;', 'g'), '<')
      .replace(new RegExp('&#62;', 'g'), '>')
      .replace(new RegExp('&amp;', 'g'), '&')
    return str
  }

  // 字符串中img标签转utf16的emoji表情(unicode转utf16)
  function unicodeToutf16(str) {
    // 检测img标签转换为utf16字
    // let img_re = /<img.*?>/g;   // 匹配img标签符
    // let unicode_re = /(?<=_).+[A-Za-z0-9]+.+(?=\.)/g; // 匹配img标签中的unicode编码
    let img_re = new RegExp('<img.*?>', 'g')
    // 去除正则断言写法，兼容Safari浏览器
    // let unicode_re = new RegExp("(?<=_).+[A-Za-z0-9]+.+(?=\.)", 'g');
    str = str.replace(img_re, function (img_str) {
      // 表情图片url变化后这行代码可能会包split错误，因为切换url之后/数量可能会发生变化，有时间把这块儿优化的智能一点
      img_str = img_str.split('/')[5].split('_')[1].split('.')[0]
      return String.fromCodePoint('0x' + img_str)
    })
    return str
  }

  // 点击emoji表情触发，获取img地址并转化为img标签插入到输入框中
  function selectEmoji(imgUrl) {
    let imgHtml = "<img src='" + imgUrl + "'/>"
    insertHtmlAtCaret(imgHtml)
    contentChanged()
  }

  // 输入框获取焦点
  function editorOnfocus() {
    let reditNode = document.getElementById(id)
    // 如果编辑框中没有内容直接获取焦点，有内容的话取到编辑框中最后一个元素获取焦点
    let child = reditNode
    while (child.childNodes.length != 0) {
      child = child.childNodes[child.childNodes.length - 1]
    }
    let sel = window.getSelection()
    sel.collapse(child, child.length + 1)
  }

  // 获取光标所在位置并插入emoji图片标签
  function insertHtmlAtCaret(html) {
    var sel, range
    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection()
      const focusNodeItem = sel.focusNode
      // 异常判断，只有光标在组件输入框内时才插入emoji图片
      // console.log(focusNodeItem.parentNode.className);
      if (
        focusNodeItem == null ||
        focusNodeItem.parentNode == null ||
        (focusNodeItem.parentNode.parentNode.className != 'redit-body' && // 判断焦点是否应该在第n行(n>=2)
          focusNodeItem.parentNode.className != 'redit-body' &&
          focusNodeItem.parentNode.className != 'redit-root redit-active')
      ) {
        // 编辑框获取焦点并重新获取焦点对象
        editorOnfocus()
        sel = window.getSelection()
      }

      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0)
        range.deleteContents()
        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        var el = document.createElement('div')
        el.innerHTML = html
        var frag = document.createDocumentFragment(),
          node,
          lastNode
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node)
        }
        range.insertNode(frag)
        // Preserve the selection
        if (lastNode) {
          range = range.cloneRange()
          range.setStartAfter(lastNode)
          range.collapse(true)
          sel.removeAllRanges()
          sel.addRange(range)
        }
      }
    } else if (document.selection && document.selection.type != 'Control') {
      // IE < 9
      document.selection.createRange().pasteHTML(html)
    }
  }

  return (
    <div className={className}>
      <div
        className={mouseInCon === 1 ? 'redit-root redit-active' : 'redit-root'}
        onMouseEnter={() => setMouseInCon(1)}
        onMouseLeave={() => {
          setMouseInCon(0)
          setSelectType('')
        }}
        onClick={() => {
          document.getElementById(id).focus()
        }}
        style={{ width: width }}>
        <div
          className='redit-body'
          id={id}
          contentEditable='true'
          escape='false'
          data-placeholder={placeholder}
          onKeyUpCapture={contentChanged}
          onMouseEnter={() => setSelectType('')}></div>
        <div className='redit-menu'>
          <div className='menu-list'>
            {menuList.map((item, index) => (
              <div
                className={
                  selectType == id + '-' + item.type && mouseInCon == 1
                    ? 'menu-item menu-item-hover'
                    : 'menu-item'
                }
                onMouseEnter={() => {
                  selectMenu(id + '-' + item.type)
                }}
                key={index}>
                <img
                  className='menu-item-img'
                  src={item.url}
                  alt={item.type}
                />
              </div>
            ))}
          </div>
        </div>
        {selectList.map((typeItem, index) => {
          return (
            <div
              className={
                id + '-' + typeItem.type == selectType ? 'redit-select selected' : 'redit-select'
              }
              id={id + '-' + typeItem.type}
              onMouseLeave={() => setSelectType('')}
              key={index}></div>
          )
        })}
      </div>
    </div>
  )
})

// emoji展示组件，将含有html标签和Unicode编码的文本转化为html标签
function ReactEmojiShow(props) {
  const { content = '' } = props
  let contentHtml = parseEmojiStr(content).replaceAll('\n', '<br>')
  return (
    <div
      className='react-emoji-show'
      dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
  )
}

// 字符串中utf16的emoji表情转img标签(utf16转unicode)
function parseEmojiStr(str) {
  //检测utf16emoji表情 转换为实体字符以供后台存储
  // var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
  var patt = new RegExp('[\ud800-\udbff][\udc00-\udfff]', 'g')
  str = str.replace(patt, function (char) {
    var H, L, code
    if (char.length === 2) {
      H = char.charCodeAt(0) // 取高8位
      L = char.charCodeAt(1) // 取低8位
      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00 // utf16 -> unicode
      // console.log(getEmojiImgUrl(code.toString(16)));
      let imgUrl = getEmojiImgUrl(code.toString(16))
      return "<img src='" + imgUrl + "' />"
    } else {
      return char
    }
  })
  return str
}

export { ReactEmojiEditor, ReactEmojiShow }
