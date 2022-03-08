import React from 'react';
import Layout from "./Layout";
import {Button, Form, Input} from "antd";


const Signin = () => {
  return <Layout title="登录" subTitle="">
    <Form>
      <Form.Item name="name" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password/>
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  </Layout>
};

export default Signin
