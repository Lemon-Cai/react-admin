import {rest} from 'msw'

const appMock = [
  rest.get('/people', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      ctx.status(200),
      ctx.json({
        code: '1',
        data: [
          {
            id: 1,
            name: 'John Doe',
            email: ''
          }
        ]
      })
    )
  }),
  rest.post('/people', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: '1',
        data: [
          {
            id: 2,
            name: 'new people',
            email: ''
          }
        ]
      })
    )
  }),
  rest.post('/api/people-x', (req, res, ctx) => {
    // Persist user's authentication in the session
    // 去掉 -x 可以观察 是代理 和 mock的优先级
    return res(
      ctx.status(200),
      ctx.json({
        code: '1',
        data: [
          {
            id: 2,
            name: 'new people from api',
            email: ''
          }
        ]
      })
    )
  }),
]

export default appMock