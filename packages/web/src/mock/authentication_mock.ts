import { rest } from 'msw'
import type { UserInfo } from '@web/app_models/user'

export const userRes: UserInfo[] = [
  {
    deptId: '7948643423168365710',
    dept_name: "开发一组",
    userId: '7939412640098406297',
    username: 'admin',
    userFace: 'https://image-test.waiqin365.com/imobii_portal/images/icon/default-face.png',
    password: '123456',
    token: 'asdfghjkl',
    permission: [
      {
        code: 'user:list:view',
        name: '查看用户列表'
      },
      {
        code: 'user:list:add',
        name: '新增用户列表'
      },
      {
        code: 'user:list:edit',
        name: '编辑用户列表'
      },
      {
        code: 'role:list:view',
        name: '查看角色列表'
      },
      {
        code: 'auth:test:view',
        name: '查看权限测试页'
      }
    ]
  }
]

const authentication_mock = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    console.log('...............msw mock login.......')
    const { username, password } = req.body as UserInfo
    const user = userRes.find(
      (item) => item.username === username && item.password === password
    )
    if (user) {
      sessionStorage.setItem('mock-authenticated-token', user.token)
      return res(ctx.json(user))
    }
    return res(ctx.status(400), ctx.json('用户名或密码错误'))
  })
]

export default authentication_mock
