import React, { useState, useEffect } from 'react'
// v5.x Redirect . v6.x 之后版本请使用 Navigate
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { Form, Input, Checkbox, Card } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import Button from 'components/Button'

// import request from 'utils/Request'

import * as mapDispatchToProps from '../../store/Login'

import './index.scss'

type Props = {
  dispatchLogin: Function
}

const Login: React.FC<Props> = props => {

  const [form] = Form.useForm()

  const [state, setState] = useState({
    redirectToMain: false
  })

  useEffect(() => {
    _initData()
  }, [])

  const _initData = async () => {
    
    // let response = await request({
    //   url: '/platform/getMenuInfos',
    //   // data,
    //   method: 'post'
    // })
    // console.log(response);
  }

  const handleSubmit = async (values: any) => {
    let validate = await form.validateFields()
    if (validate) {
      // TODO:请求接口，保持登录状态
      props.dispatchLogin({
        params: values
      })
      setState({ ...state, redirectToMain: true })
    }
  }
  if (state.redirectToMain)  {
    console.log('state', state)
    return <Navigate to="/main" replace={true} />
  }
  return (
    <div className='login'>
      <div className='login-container'>
        <Card title='XX后台管理系统' style={{ width: 300, borderRadius: 5 }}>
          <Form onFinish={handleSubmit} form={form} className='login-form'>
            <Form.Item name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='请输入用户名'
              />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: '请输入密码!' }]}>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='请输入密码'
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle initialValue={true}>
                <Checkbox>自动登录</Checkbox>
              </Form.Item>

              <a className='login-form-forgot' href='/'>
                忘记密码?
              </a>
            </Form.Item>

            <Form.Item>
              <Button buried='138088' type='primary' htmlType='submit' className='login-form-button'>
                登录
              </Button>
              没有账号?<a href='/'>现在注册!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({ ...(state?.login || {}) })

export default connect(mapStateToProps, mapDispatchToProps)(Login)
