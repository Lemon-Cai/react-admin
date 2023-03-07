import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random
const requests = [
  {
    url: '/upload/file',
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
    url: '/getList/file',
    type: 'get',
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
  }
]

export default requests
