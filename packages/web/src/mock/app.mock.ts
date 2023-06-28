import { rest } from 'msw';

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
            email: '',
          },
        ],
      }),
    );
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
            email: '',
          },
        ],
      }),
    );
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
            email: '',
          },
        ],
      }),
    );
  }),

  rest.post('/getLoginUser', (req, res, ctx) => {
    // const { token } = req.cookies;
    return res(
      ctx.status(200),
      ctx.json({
        code: '1',
        data: {
          isSuperAdmin: 'false',
          isBoss: 'true',
          isLeader: 'false',
          isAdmin: 'false',
          id: '7939412640098406297',
          sourceType: 'WEB',
          userName: '鸭梨山大',
          name: '鸭梨山大',
          code: 'cp',
          logo: 'https://image-test.waiqin365.com/8397406864781343286/logo/head_logo.png',
          userFace:
            'https://image-test.waiqin365.com/imobii_portal/images/icon/default-face.png',
          positionName: null,
          positionId: '',
          deptFullNames: '/梅赛德斯总部/开发部/开发一组',
          deptName: '开发一组',
          deptId: '7948643423168365710',
          jobName: null,
          jobId: '',
          tenantId: '8397406864781343286',
          tenantType: '1',
          tenantCode: 'msds',
          tenantName: '梅赛德斯',
          imageUrl: 'https://image-test.waiqin365.com',
          imageRoot: 'https://image-test.waiqin365.com/8397406864781343286',
        },
        message: '',
      }),
    );
  }),
];

export default appMock;
