/*
 * @Author: CaiPeng
 * @Date: 2023-04-03 16:15:27
 * @LastEditors: caipeng
 * @LastEditTime: 2023-06-28 14:04:28
 * @FilePath: \React\SelectDate\packages\web\src\pages\Login\index.tsx
 * @Description:
 */
import React, { FC } from 'react';

import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

const Login: FC = () => {
  const handleFinish = () => {};

  return (
    <div className="login-layout">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="用户名" prefix={<UserOutlined rev={null}  />} size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            placeholder="密码"
            // @ts-ignore
            prefix={<LockOutlined />}
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>自动登录</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
