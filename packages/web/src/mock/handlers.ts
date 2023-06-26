import { rest } from 'msw'

const handlers = [
  rest.get('/mock/user', (req, res, ctx) => {
    const isAuth = sessionStorage.getItem('is-authenticated')
    if (!isAuth) {
      return res(
        ctx.status(403),
        ctx.json({
          code: '0',
          message: 'Not authorized'
        })
      )
    }
    return res(ctx.status(200), ctx.json({
      code: '1',
      data: {
        username: 'admin'
      },
      message: ''
    }))
  }),
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
  // rest.get('/users/:userId', (req, res, ctx) => {
  // 通过req，获取动态参数
  //   const { userId } = req.params

  //   return res(
  //     ctx.json({
  //       id: userId,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     }),
  //   )
  // }),
]

export default handlers