import React from 'react';
import Layout from "./Layout";
import {Button, Form, Input} from "antd";
import {SignupPayload} from "../../store/actions/auth.actions";


const Signup = () => {

  const onFinish = (value:SignupPayload)=>{
    console.log(value)

  }

  return <Layout title="注册" subTitle="">
    <Form onFinish={onFinish}>
      <Form.Item name="name" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password/>
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input/>
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  </Layout>
};

export default Signup
