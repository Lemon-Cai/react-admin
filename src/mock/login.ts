import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random
const requests = [
  {
    url: '/platform/user/login',
    type: 'post',
    response: (config: any) => {
      return {
        code: 200,
        data: {
          name: 'file',
          url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
        }
      }
    }
  },
  {
    url: '/platform/user/register',
    type: 'post',
    response: () => {
      let fileList = []
      for (let i = 0; i < 6; i++) {
        let file: object = {
          uid: Random.id(),
          name: Random.title(3, 5),
          url:Random.image('200x100', '#50B347', '#FFF', Random.title(1)),
        }
        
        fileList.push(file)
      }
      return {
        code: 200,
        data: {
          fileList
        }
      }
    }
  },
  {
    url: '/platform/getMenuInfos',
    type: 'post',
    response: () => {
      // let menus = []
      // for (let i = 0; i < 6; i++) {
      //   menus.push({
      //     id: Random.id(),
      //     name: Random.ctitle(3, 8),
      //     // Random.image( size, background, foreground, format?, text? )
      //     icon:Random.image('200x100', '#50B347', '#FFF', Random.title(1)),
      //   })
      // }
      let menus = require('./menus.json')
      // console.log('获取本地json文件', menus)
      return {
        code: 200,
        data: menus
      }
    }
  },
  {
    url: '/platform/logger',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: ''
      }
    }
  }
]

export default requests
