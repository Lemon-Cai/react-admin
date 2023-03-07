import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random
const requests = [
  {
    url: '/platform/menu/v1/getMenuOpCodes.do',
    type: 'post',
    response: (config: any) => {
      // 参数，menuId
      if (config.body && config.body.request?.menuId) {
        return {
          code: '1',
          data: ['BLOB_MODEL', 'BLOG_DEL', 'BLOG_EXP', 'VIEW'],
          message: 'ok'
        }
      }
      return {
        code: '0',
        data: [],
        message: 'menuId参数错误'
      }
    }
  },
  {
    url: '/platform/param/v1/getLoginUser.do',
    type: 'post',
    response: (config: any) => {
      return {
        code: '1',
        data: {
          tenantType: null,
          last_login_time: '2023-01-28 10:43:19',
          isSuperAdmin: 'false',
          client_type: 255,
          client_id: '',
          is_leader: 'false',
          binding_mode: '0',
          user_type: '0',
          client_ver: '',
          isBoss: 'true',
          device_binding: 'false',
          customerServiceLabel: '联系客服',
          id: '5381875182007190431',
          create_time: '2020-11-27 14:54:10',
          edvice_id: 'MiniProgram',
          mobile_name: '',
          imsi_binding: 'false',
          isAdmin: 'false',
          userLoginType: null,
          loginMode: null,
          sourceType: 'WEB',
          customerService: 'waiqin365',
          app_ver: '',
          name: 'wo9ilfCgAAcSK4NFChJgDcUzuFQOJSng',
          creator_id: '999',
          system_os: '',
          dept_full_names: '/黑森林',
          pwdedit_time: '2021-09-02 10:04:15',
          status: '1',
          position_id: '',
          code: 'cp',
          tenantCrerateTime: null,
          modify_time: '2023-01-16 09:59:27',
          imsi: 'o-2Yl5cW7wyvQhU23p6Bd5aWJ75c',
          tenantCode: 'hsl8136',
          mobile_binding: 'false',
          tenantName: '黑森林',
          modifyier_id: '999',
          imageUrl: 'https://image-test.waiqin365.com',
          userFace:
            'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?t=1673834368000',
          isLeader: 'false',
          mobile: '11111141212',
          position_name: null,
          dept_name: '黑森林',
          superior_name: null,
          superior_id: '-1',
          job_name: null,
          job_id: '',
          tenantId: '7330115458641951066',
          imageRoot: 'https://image-test.waiqin365.com/7330115458641951066',
          dept_id: '10'
        },
        message: 'ok'
      }
    }
  },
  {
    /**
     * 入参：
     * {
        "blog_types": "",
        "keyword": "",
        "request_type": "2",
        "data_type": "1",
        "page": 1
       }
     */
    url: '/app/blog/v8/web/getBlogListInfo.do',
    type: 'post',
    response: (config: any) => {
      console.log(config)
      if (config.body) {
        return {
          code: '1',
          data: {
            blogs: [
              {
                id: '8669592379453274145',
                publish_id: '5381875182007190431',
                publish_name: 'wo9ilfCgAAcSK4NFChJgDcUzuFQOJSng',
                face_time: '2023-01-16 09:59:28',
                publish_time: '2023-01-13 16:58:34.563',
                status: '1',
                stop_time: '2023-01-13 16:58',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?t=1673834368000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?x-oss-process=style/zk320&t=1673834368000',
                terminal_type: '3',
                udf_link: '',
                content: '',
                blog_type: '5',
                blog_type_name: '周报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '5',
                model_value: [
                  {
                    label: '本周工作总结',
                    value: '[可爱]asdlajd法律是否能[傲慢][流汗][糗大了][糗大了][哈欠][右哼哼][]'
                  },
                  {
                    label: '下周工作计划',
                    value: '阿达'
                  }
                ],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '5574239982885390305',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-12 15:39:14.707',
                status: '1',
                stop_time: '2023-01-12 15:39',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'jdhdhhfhhhh&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '7085093934442671248',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-12 15:39:14.535',
                status: '1',
                stop_time: '2023-01-12 15:39',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'jdhdhhfhhhh&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '8634002052325851064',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-12 15:39:11.984',
                status: '1',
                stop_time: '2023-01-12 15:39',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'jdhdhhfhhhh&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '6311498353369460428',
                publish_id: '5136809049099764851',
                publish_name: '严琨铭(停用)',
                face_time: '2023-01-16 09:59:12',
                publish_time: '2023-01-11 19:44:40.272',
                status: '1',
                stop_time: '2023-01-11 19:44',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?t=1673834352000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?x-oss-process=style/zk320&t=1673834352000',
                terminal_type: '3',
                udf_link: '',
                content:
                  '严琨铭创建了商机：hsbsv机会hhhh，客户：hsbsv，预计成交日期：2023-01-11，商机金额：11.00元。',
                blog_type: '104',
                blog_type_name: '新增商机',
                location_c: '',
                location_a: '',
                work_id: '9204194383747654584',
                work_type: '4',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '4756608381270193859',
                publish_id: '5513292825178686925',
                publish_name: 'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg',
                face_time: '2023-01-11 19:01:46',
                publish_time: '2023-01-11 19:02:49.758',
                status: '1',
                stop_time: '2023-01-11 19:02',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?t=1673434906000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?x-oss-process=style/zk320&t=1673434906000',
                terminal_type: '1',
                udf_link: '',
                content:
                  'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg刚刚拓展了一个新终端门店，APP不不不特服，位于江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区。@wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                blog_type: '100',
                blog_type_name: '客户',
                location_c: '31.982651,118.735397',
                location_a: '江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '6917859580686939874',
                    info_id: '4756608381270193859',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/cm/202301/3Csh_V0dYHGlIzKuMt5Kv1EX46k9nYbxx074IOBCykyue_THjFFVgfw73yEzHAJd_.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/cm/202301/3Csh_V0dYHGlIzKuMt5Kv1EX46k9nYbxx074IOBCykyue_THjFFVgfw73yEzHAJd__small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '6380600797931308013',
                publish_id: '5513292825178686925',
                publish_name: 'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg',
                face_time: '2023-01-11 19:01:46',
                publish_time: '2023-01-11 18:59:56.219',
                status: '1',
                stop_time: '2023-01-11 18:59',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?t=1673434906000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?x-oss-process=style/zk320&t=1673434906000',
                terminal_type: '1',
                udf_link: '',
                content:
                  'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg刚刚拓展了一个新终端门店，还以为破，位于江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区。@wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                blog_type: '100',
                blog_type_name: '客户',
                location_c: '31.98267,118.735298',
                location_a: '江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '8902434138832147320',
                    info_id: '6380600797931308013',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/cm/202301/36x_PzSRFwjJQj_b9MZQ_KKkaccOaEnZE8uhNsz7UkIQp34innnvZ7RrMc85wbDsc.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/cm/202301/36x_PzSRFwjJQj_b9MZQ_KKkaccOaEnZE8uhNsz7UkIQp34innnvZ7RrMc85wbDsc_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '6927536924790814949',
                publish_id: '5513292825178686925',
                publish_name: 'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg',
                face_time: '2023-01-11 19:01:46',
                publish_time: '2023-01-11 18:45:51.041',
                status: '1',
                stop_time: '2023-01-11 18:45',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?t=1673434906000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?x-oss-process=style/zk320&t=1673434906000',
                terminal_type: '1',
                udf_link: '',
                content:
                  'X门店测试\r<BR>客户标签：最近30天未拜访&nbsp;有资产\r<BR>抵达：　　18:44&nbsp;距离客户位置小于500.0米\r<BR>离开：　　18:45&nbsp;距离客户位置小于500.0米\r<BR>在店时长：1分钟\r<BR>拜访工作：1次7110paizhao1\r<BR>@wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                blog_type: '4',
                blog_type_name: '拜访',
                location_c: '31.98275,118.735199',
                location_a: '江苏省南京市建邺区创智路南京国际广告大厦',
                work_id: '6380563757257996893',
                work_type: '1',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '8319795191667281813',
                    info_id: '6927536924790814949',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3p4srD5JckRGqN8ZGoVO27HEJeVSzJFIAi3Ha3cOROg1qIDgqPBkAkgtLsW-XLRsz.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3p4srD5JckRGqN8ZGoVO27HEJeVSzJFIAi3Ha3cOROg1qIDgqPBkAkgtLsW-XLRsz_small.jpg'
                  },
                  {
                    id: '5819552353787617065',
                    info_id: '6927536924790814949',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3fOcaFpzIS2Af0mk_9h6ji_R-ioAMPpRx2eYvsMuY_AzzaqP6rRaOyYonUB7_IxmC.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3fOcaFpzIS2Af0mk_9h6ji_R-ioAMPpRx2eYvsMuY_AzzaqP6rRaOyYonUB7_IxmC_small.jpg'
                  },
                  {
                    id: '5072254958816155695',
                    info_id: '6927536924790814949',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3SGozdiD4L34n7HR2H718ONab9RD532TYXn_SrwUNxW-Irgq4TizePi6F5koZj5aP.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3SGozdiD4L34n7HR2H718ONab9RD532TYXn_SrwUNxW-Irgq4TizePi6F5koZj5aP_small.jpg'
                  },
                  {
                    id: '8852415311122984654',
                    info_id: '6927536924790814949',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3clCxSC5xM3t2uiv72OrW90lJUQRn5ea45Rays3XrhDppQH6qs23_INCjF9YKNyKN.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3clCxSC5xM3t2uiv72OrW90lJUQRn5ea45Rays3XrhDppQH6qs23_INCjF9YKNyKN_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '6621691113068507574',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-11 18:35:57.590',
                status: '1',
                stop_time: '2023-01-11 18:35',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '2',
                udf_link: '',
                content:
                  'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q刚刚在tina门店拍照上传了1张照片。@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '101',
                blog_type_name: '拍照',
                location_c: '31.9827,118.735298',
                location_a: '江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '5426672485783302025',
                    info_id: '6621691113068507574',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/volpicup/202301/11/3KaI0lNqdwFyex362AoZrxjgykSenxjqvdkgm0qy5CbP8TJ6wB94tZSLSutMXyow0.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/volpicup/202301/11/3KaI0lNqdwFyex362AoZrxjgykSenxjqvdkgm0qy5CbP8TJ6wB94tZSLSutMXyow0_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '8275253143421041915',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-11 18:35:24.057',
                status: '1',
                stop_time: '2023-01-11 18:35',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'gshdhhd&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '9001478901912323118',
                    info_id: '8275253143421041915',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/3vNKlGyJxAsPWmuYYx6wQcHdQE_-eQ_EVhHbZqYbn8jooC4bHiO7XDfLCwkOwGYT-.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/3vNKlGyJxAsPWmuYYx6wQcHdQE_-eQ_EVhHbZqYbn8jooC4bHiO7XDfLCwkOwGYT-_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '7898653599861428124',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-11 18:34:38.109',
                status: '1',
                stop_time: '2023-01-11 18:34',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'hdjhdhd&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '9164004558350402871',
                    info_id: '7898653599861428124',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/3yLJPNGEwBHE6R1xkrMS9CdiJOLTk5lDz7Z3bBb245YBKLPTwdZaUc96_bAj3p4Vy.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/3yLJPNGEwBHE6R1xkrMS9CdiJOLTk5lDz7Z3bBb245YBKLPTwdZaUc96_bAj3p4Vy_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '5885336538182643628',
                publish_id: '5381875182007190431',
                publish_name: 'wo9ilfCgAAcSK4NFChJgDcUzuFQOJSng',
                face_time: '2023-01-16 09:59:28',
                publish_time: '2023-01-11 15:54:14.704',
                status: '1',
                stop_time: '2023-01-11 15:54',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?t=1673834368000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?x-oss-process=style/zk320&t=1673834368000',
                terminal_type: '3',
                udf_link: '',
                content: '安徽大佛辣椒粉',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '7015975471436649125',
                publish_id: '5381875182007190431',
                publish_name: 'wo9ilfCgAAcSK4NFChJgDcUzuFQOJSng',
                face_time: '2023-01-16 09:59:28',
                publish_time: '2023-01-11 15:43:16.721',
                status: '1',
                stop_time: '2023-01-11 15:43',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?t=1673834368000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?x-oss-process=style/zk320&t=1673834368000',
                terminal_type: '3',
                udf_link: '',
                content: '14@cp1&nbsp;@cp2&nbsp;@12412',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '7810952860527476896',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059313_9c51d9452b284f318a2453d444a1be0f.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059313_9c51d9452b284f318a2453d444a1be0f_small.png'
                  },
                  {
                    id: '7901428062136011944',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059804_7a2101dd8a4c4c429c29d72aae05dc44.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059804_7a2101dd8a4c4c429c29d72aae05dc44_small.png'
                  },
                  {
                    id: '4965769598962955389',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059830_e704e19e88894de7aaea144338ebbe29.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059830_e704e19e88894de7aaea144338ebbe29_small.png'
                  },
                  {
                    id: '4993781922114651041',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059200_84b8bb9ffc8f47a9927fe603277f0596.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059200_84b8bb9ffc8f47a9927fe603277f0596_small.png'
                  },
                  {
                    id: '8355148841830297632',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/20230111105992_795bbeddcdcf4687b1a106a1f451c330.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/20230111105992_795bbeddcdcf4687b1a106a1f451c330_small.png'
                  },
                  {
                    id: '6146790724395922676',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059230_532bca0091614497b8cedafa8bf4cabe.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059230_532bca0091614497b8cedafa8bf4cabe_small.png'
                  },
                  {
                    id: '8589094319919932755',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059634_1f8c46e8140b42dba8b7b592fb79121c.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059634_1f8c46e8140b42dba8b7b592fb79121c_small.png'
                  },
                  {
                    id: '7375261022195879631',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059980_f8a062b25f4247da9c037694c01d0df5.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059980_f8a062b25f4247da9c037694c01d0df5_small.png'
                  },
                  {
                    id: '6455661036165577242',
                    info_id: '7015975471436649125',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059856_f8f43f261aeb4c7eaaaa750e08d02784.png',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/202301111059856_f8f43f261aeb4c7eaaaa750e08d02784_small.png'
                  }
                ],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: [
                  {
                    id: '9141171461277811117',
                    name: 'cp1',
                    face_image:
                      'https://image-test.waiqin365.com/imobii_portal/images/icon/default-face.png'
                  },
                  {
                    id: '5381875182007190431',
                    name: 'wo9ilfCgAAcSK4NFChJgDcUzuFQOJSng',
                    face_image:
                      'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5381875182007190431.jpg?t=1673834368000'
                  },
                  {
                    id: '5973789147227423508',
                    name: 'cp2',
                    face_image:
                      'https://image-test.waiqin365.com/imobii_portal/images/icon/default-face.png'
                  }
                ],
                is_support: '1'
              },
              {
                id: '6920510559449445116',
                publish_id: '5136809049099764851',
                publish_name: '严琨铭(停用)',
                face_time: '2023-01-16 09:59:12',
                publish_time: '2023-01-11 15:20:03.925',
                status: '1',
                stop_time: '2023-01-11 15:20',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?t=1673834352000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?x-oss-process=style/zk320&t=1673834352000',
                terminal_type: '3',
                udf_link: '',
                content: '严琨铭对商机：ykm企业微信商机1进行了跟进，跟进内容：语句。',
                blog_type: '105',
                blog_type_name: '商机跟进',
                location_c: '31.982914,118.735481',
                location_a: '江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '6913766703229134628',
                publish_id: '5136809049099764851',
                publish_name: '严琨铭(停用)',
                face_time: '2023-01-16 09:59:12',
                publish_time: '2023-01-11 13:31:17.374',
                status: '1',
                stop_time: '2023-01-11 13:31',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?t=1673834352000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5136809049099764851.jpg?x-oss-process=style/zk320&t=1673834352000',
                terminal_type: '3',
                udf_link: '',
                content:
                  '严琨铭创建了商机：ykm企业微信商机1，客户：小闫门店001，预计成交日期：2023-01-11，商机金额：999.00元。',
                blog_type: '104',
                blog_type_name: '新增商机',
                location_c: '',
                location_a: '',
                work_id: '7825656878838723164',
                work_type: '4',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '5058098228529626137',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-11 09:34:39.628',
                status: '1',
                stop_time: '2023-01-11 09:34',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '3',
                udf_link: '',
                content:
                  'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q&nbsp;于&nbsp;09:34&nbsp;对&nbsp;yuyuuu&nbsp;进行了跟进。@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '102',
                blog_type_name: '线索跟进',
                location_c: '',
                location_a: '',
                work_id: '8577886690526702155',
                work_type: '6',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '7304803884259733406',
                publish_id: '5513292825178686925',
                publish_name: 'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg',
                face_time: '2023-01-11 19:01:46',
                publish_time: '2023-01-10 19:21:08.724',
                status: '1',
                stop_time: '2023-01-10 19:21',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?t=1673434906000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?x-oss-process=style/zk320&t=1673434906000',
                terminal_type: '2',
                udf_link: '',
                content:
                  'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg刚刚在哈哈拍照上传了1张照片。@wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                blog_type: '101',
                blog_type_name: '拍照',
                location_c: '31.982719,118.735298',
                location_a: '江苏省南京市建邺区创智路紫金(建邺)科技创业特别社区先导区北区',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '8857418161045937023',
                    info_id: '7304803884259733406',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/volpicup/202301/10/3JP6SVVhgItpa-uwnT6WV23htw8p6o0FI6v11xCxl2lpXiDtnmObE5TTrXaOhFyLj.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/volpicup/202301/10/3JP6SVVhgItpa-uwnT6WV23htw8p6o0FI6v11xCxl2lpXiDtnmObE5TTrXaOhFyLj_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '4688370167954848011',
                publish_id: '5513292825178686925',
                publish_name: 'wo9ilfCgAAOhaV4ecCYuooT1zE1XhQRg',
                face_time: '2023-01-11 19:01:46',
                publish_time: '2023-01-10 19:13:53.603',
                status: '1',
                stop_time: '2023-01-10 19:13',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?t=1673434906000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/5513292825178686925.jpg?x-oss-process=style/zk320&t=1673434906000',
                terminal_type: '1',
                udf_link: '',
                content:
                  'hjn\r<BR>客户标签：\r<BR>抵达：　　19:12&nbsp;距离客户位置小于500.0米\r<BR>离开：　　19:13&nbsp;距离客户位置小于500.0米\r<BR>在店时长：1分钟\r<BR>拜访工作：1次709paizhaio1，1次7110paizhao1\r<BR>@wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                blog_type: '4',
                blog_type_name: '拜访',
                location_c: '31.98278,118.735298',
                location_a: '江苏省南京市建邺区嘉陵江东街南京国际广告大厦',
                work_id: '9112408380828873375',
                work_type: '1',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '5969181335476717022',
                    info_id: '4688370167954848011',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3Z3tANIY0RJJLzkAo1EJJtf_bHF8l3Df6jGCpZfaYIzQvkR-v0wDV9txnYXAB1O1g.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3Z3tANIY0RJJLzkAo1EJJtf_bHF8l3Df6jGCpZfaYIzQvkR-v0wDV9txnYXAB1O1g_small.jpg'
                  },
                  {
                    id: '8236957274702270386',
                    info_id: '4688370167954848011',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3i_0-Eri2-uhhqC01M6Dv9NRFVY5pRYNcwz87iany_z01oI5-fvHuYWXqJAHu8TO7.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8121279098319128869/202301/3i_0-Eri2-uhhqC01M6Dv9NRFVY5pRYNcwz87iany_z01oI5-fvHuYWXqJAHu8TO7_small.jpg'
                  },
                  {
                    id: '4796941439437567615',
                    info_id: '4688370167954848011',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8085489353634493364/202301/3Ju-2gjg7HkLkEalPDBZO0-1nDRYVap2GaEOCWz-ddUrmpLb-4h83delYvke5t3tj.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8085489353634493364/202301/3Ju-2gjg7HkLkEalPDBZO0-1nDRYVap2GaEOCWz-ddUrmpLb-4h83delYvke5t3tj_small.jpg'
                  },
                  {
                    id: '4862880458002000632',
                    info_id: '4688370167954848011',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/user_defined/8085489353634493364/202301/31DUawl-sXZQF1ILouSDS0KscWLbysUp3SMG7JE_slqf6lReB1zGvqVvbEGQOgyt-.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/user_defined/8085489353634493364/202301/31DUawl-sXZQF1ILouSDS0KscWLbysUp3SMG7JE_slqf6lReB1zGvqVvbEGQOgyt-_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                comments_allow_delete: '1',
                dept_name: '黑森林',
                supports: []
              },
              {
                id: '4949567703206472902',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-09 19:36:16.940',
                status: '1',
                stop_time: '2023-01-09 19:36',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '2',
                udf_link: '',
                content:
                  '哈哈哈哈哈哈&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [
                  {
                    id: '4796642733663575061',
                    info_id: '4949567703206472902',
                    pic: 'https://image-test.waiqin365.com/7330115458641951066/blog/202301/20230109194139576_61c08af5_CAMERA_21001002252.jpg',
                    pic_small:
                      'https://image-test.waiqin365.com/7330115458641951066/blog/202301/20230109194139576_61c08af5_CAMERA_21001002252_small.jpg'
                  }
                ],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              },
              {
                id: '4873355033835149800',
                publish_id: '7145491333280482431',
                publish_name: 'wo9ilfCgAAbm6ZcFOk60LIY9sfxytI_Q',
                face_time: '2023-01-17 20:32:13',
                publish_time: '2023-01-09 19:28:45.129',
                status: '1',
                stop_time: '2023-01-09 19:28',
                publish_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?t=1673958733000',
                publish_small_face:
                  'https://image-test.waiqin365.com/7330115458641951066/user/avatar/7145491333280482431.jpg?x-oss-process=style/zk320&t=1673958733000',
                terminal_type: '4',
                udf_link: '',
                content:
                  'gdjduyfydhdhd&nbsp;@wo9ilfCgAA_PMabg_5GJneL4rSKkbukgwo9ilfCgAA_PMabg_5GJneL4rSKkbukg',
                blog_type: '1',
                blog_type_name: '日报',
                location_c: '',
                location_a: '',
                work_id: '',
                work_type: '',
                model_id: '-1',
                model_value: [],
                score: 0,
                pictures: [],
                comments: [],
                comment_times: '0',
                allow_delete: '1',
                comments_allow_delete: '1',
                dept_name: '测试部门ywcsb',
                supports: []
              }
            ],
            login_id: '5381875182007190431',
            attach_full_prefix: 'https://image-test.waiqin365.com/7330115458641951066/',
            permissions: 'BLOB_MODEL,BLOG_DEL,BLOG_EXP,VIEW'
          },
          success: true,
          message: ''
        }
      }
      return {
        code: '0',
        data: {
          blogs: []
        },
        message: 'ok'
      }
    }
  },
  {
    url: '/app/blog/v8/web/getHomeBlogType.do',
    type: 'post',
    response: function () {
      return {
        code: '1',
        data: {
          rslist: [
            {
              visible_range: '1',
              blog_template:
                '[{"id":"id000001","label":"今日工作总结","required":"1","input":"1","input_type":"1","value":""},{"id":"id000002","label":"明日工作计划","required":"1","input":"1","input_type":"1","value":""}]',
              blog_type_name: '日报',
              id: '1',
              blog_type: '1',
              status: '0'
            },
            {
              visible_range: '1',
              blog_template:
                '[{"id":"a574652b-3d43-4632-9587-302072d89c55","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"},{"v":"拜访付费客户数","num":"0","v_id":"14","v_code":"payCount","v_name":"拜访付费客户数"},{"v":"新开终端","num":"0","v_id":"5","v_code":"newStore","v_name":"新开终端"},{"v":"新开经销商","num":"0","v_id":"6","v_code":"newDealer","v_name":"新开经销商"},{"v":"成交家数","num":"0","v_id":"7","v_code":"dealCount","v_name":"成交家数"},{"v":"订单笔数","num":"0","v_id":"8","v_code":"orderCount","v_name":"订单笔数"},{"v":"订单金额(元)","num":"0","v_id":"9","v_code":"orderAmount","v_name":"订单金额(元)"},{"v":"收款金额(元)","num":"0","v_id":"10","v_code":"returnAmount","v_name":"收款金额(元)"},{"v":"分销成交家数","num":"0","v_id":"11","v_code":"dmsDealCount","v_name":"分销成交家数"},{"v":"分销订单笔数","num":"0","v_id":"12","v_code":"dmsOrderNum","v_name":"分销订单笔数"},{"v":"分销订单金额(元)","num":"0","v_id":"13","v_code":"dmsOrderAmount","v_name":"分销订单金额(元)"},{"v":"分销订单数量","num":"0","v_id":"15","v_code":"dmsOrderCount","v_name":"分销订单数量"}]},{"input_type":"","id":"6b6037ae-9284-4a82-9c3f-3387fa057968","label":"文本框","input":"1","value":"","required":"1"}]',
              blog_type_name: '模板',
              id: '5427119663822176867',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '1',
              blog_template:
                '[{"id":"3aeb3150-22f0-412b-983a-eab9b8baf091","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"}]}]',
              blog_type_name: '测试',
              id: '8961907425568873287',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '3',
              blog_template:
                '[{"id":"20d818b4-a5ea-4702-8b08-23d787622015","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"},{"v":"完成/计划客户签到数","num":"0/0","v_id":"33","v_code":"visitPlanCount","v_name":"完成/计划客户签到数"},{"v":"客户签到数","num":"0","v_id":"34","v_code":"visitTotalCount","v_name":"客户签到数"},{"v":"临时签到数","num":"0","v_id":"35","v_code":"visitTempCount","v_name":"临时签到数"},{"v":"销量上报数量","num":"0","v_id":"31","v_code":"reportedQuantitySales","v_name":"销量上报数量"},{"v":"销量上报金额","num":"0.00","v_id":"32","v_code":"reportedAmountSales","v_name":"销量上报金额"},{"v":"拜访付费客户数","num":"0","v_id":"14","v_code":"payCount","v_name":"拜访付费客户数"}]},{"input_type":"","id":"b0c9dcb3-e422-435b-baf8-de6db78b617c","label":"文本框","input":"1","value":"","required":"1"},{"id":"c5d795cd-e0bc-434f-bf5f-38e9b4cce118","label":"单选","input":"3","value":"","required":"0","option":[{"v":"选项"},{"v":"选项1"},{"v":"选项2"}]},{"id":"1ed0ea46-1bf9-4a88-a645-048b53e4188c","label":"多选","input":"4","value":"","required":"1","option":[{"v":"选项"},{"v":"选项"}]}]',
              blog_type_name: 'cp日报模板',
              id: '7133952016909361141',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '3',
              blog_template:
                '[{"id":"e11a6f00bc124556bc460599579386c6","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"},{"v":"完成/计划客户签到数","num":"0/0","v_id":"33","v_code":"visitPlanCount","v_name":"完成/计划客户签到数"},{"v":"客户签到数","num":"0","v_id":"34","v_code":"visitTotalCount","v_name":"客户签到数"},{"v":"临时签到数","num":"0","v_id":"35","v_code":"visitTempCount","v_name":"临时签到数"},{"v":"销量上报数量","num":"0","v_id":"31","v_code":"reportedQuantitySales","v_name":"销量上报数量"},{"v":"销量上报金额","num":"0.00","v_id":"32","v_code":"reportedAmountSales","v_name":"销量上报金额"},{"v":"拜访付费客户数","num":"0","v_id":"14","v_code":"payCount","v_name":"拜访付费客户数"}]},{"input_type":"","id":"584aca76b9884a909973a45b1ac2899d","label":"文本框","input":"1","value":"","required":"1"},{"id":"9fb854b045af462f9f78ff70a8edff01","label":"单选","input":"3","value":"","required":"0","option":[{"v":"选项"},{"v":"选项1"},{"v":"选项2"}]},{"id":"be01729b58a74154adc025bb93327ca5","label":"多选","input":"4","value":"","required":"1","option":[{"v":"选项"},{"v":"选项"}]}]',
              blog_type_name: 'cp日报模板副本1',
              id: '8417676927424051090',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '3',
              blog_template:
                '[{"id":"d9cb115d8bc24f0dbdb8fe056258fdd6","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"},{"v":"完成/计划客户签到数","num":"0/0","v_id":"33","v_code":"visitPlanCount","v_name":"完成/计划客户签到数"},{"v":"客户签到数","num":"0","v_id":"34","v_code":"visitTotalCount","v_name":"客户签到数"},{"v":"临时签到数","num":"0","v_id":"35","v_code":"visitTempCount","v_name":"临时签到数"},{"v":"销量上报数量","num":"0","v_id":"31","v_code":"reportedQuantitySales","v_name":"销量上报数量"},{"v":"销量上报金额","num":"0.00","v_id":"32","v_code":"reportedAmountSales","v_name":"销量上报金额"},{"v":"拜访付费客户数","num":"0","v_id":"14","v_code":"payCount","v_name":"拜访付费客户数"}]},{"input_type":"","id":"b50e315eedb543a2aa7ce1d0604dbd5c","label":"文本框","input":"1","value":"","required":"1"},{"id":"a2b59ceb509242f2bfe55bd18ab2311f","label":"单选","input":"3","value":"","required":"0","option":[{"v":"选项"},{"v":"选项1"},{"v":"选项2"}]},{"id":"fca3f0fe8c244ad3badbeb2ce66409bd","label":"多选","input":"4","value":"","required":"1","option":[{"v":"选项"},{"v":"选项"}]}]',
              blog_type_name: 'cp日报模板副本2',
              id: '4784577077077862450',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '1',
              blog_template:
                '[{"id":"a9147a62-4c2a-4e4d-b454-c985bf14909b","label":"今日数据汇总","input":"5","value":"","required":"0","option":[{"v":"完成/计划拜访数","num":"0/0","v_id":"1","v_code":"planCount","v_name":"完成/计划拜访数"},{"v":"总拜访数","num":"0","v_id":"2","v_code":"totalCount","v_name":"总拜访数"},{"v":"临时拜访","num":"0","v_id":"3","v_code":"tempCount","v_name":"临时拜访"}]},{"id":"b36d5906-0436-4d83-b8b2-34269bd3658c","label":"单选","input":"3","value":"","required":"1","option":[{"v":"选项"},{"v":"选项"},{"v":"选项"}]}]',
              blog_type_name: 'adpo',
              id: '8112629326871951198',
              blog_type: '1',
              status: '1'
            },
            {
              visible_range: '1',
              blog_template:
                '[{"id":"id000001","label":"本周工作总结","required":"1","input":"1","input_type":"1","value":""},{"id":"id000002","label":"下周工作计划","required":"1","input":"1","input_type":"1","value":""}]',
              blog_type_name: '周报',
              id: '5',
              blog_type: '5',
              status: '1'
            },
            {
              visible_range: '1',
              blog_template:
                '[{"id":"id000001","label":"本月工作总结","required":"1","input":"1","input_type":"1","value":""},{"id":"id000002","label":"下月工作计划","required":"1","input":"1","input_type":"1","value":""}]',
              blog_type_name: '月报',
              id: '6',
              blog_type: '6',
              status: '1'
            }
          ],
          dataJa: [
            {
              id: '1',
              name: '日报'
            },
            {
              id: '5',
              name: '周报'
            },
            {
              id: '6',
              name: '月报'
            },
            {
              id: '2',
              name: '分享'
            },
            {
              id: '4',
              name: '拜访'
            },
            {
              id: '101',
              name: '拍照'
            },
            {
              id: '100',
              name: '客户'
            },
            {
              id: '102',
              name: '线索跟进'
            },
            {
              id: '103',
              name: '新增线索'
            },
            {
              id: '104',
              name: '新增商机'
            },
            {
              id: '105',
              name: '商机跟进'
            },
            {
              id: '7472652653059544369',
              name: 'xxx'
            },
            {
              id: '6385631868021098272',
              name: 'xxx_副本'
            },
            {
              id: '7160334421919573003',
              name: '670超级'
            }
          ]
        },
        success: true,
        message: ''
      }
    }
  }
]

export default requests
