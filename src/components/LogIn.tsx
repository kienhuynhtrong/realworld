import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Typography, Anchor, Button, Form, Input, Col, Row } from "antd";
import './../../src/style/login.scss'

const { Title } = Typography;
const { Link } = Anchor;

const LogIn = () => {
  const handleSubmitForm = () => {
    console.log('run in there')
    console.log("email", email);
    console.log("password", password);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeEmail = (e: any) => {
    setEmail(e?.target?.value)
  }
  const handleChangePassword = (e: any) => {
    setPassword(e?.target?.value)
  }
  return (
    <div className="wrap-login">
      <Title className="login-title">Sign In Page</Title>
      <Anchor>
        {/* <Link className="login-link" href="#components-anchor-demo-basic" title="Basic demo" /> */}
      </Anchor>
      <p className="login-link">test</p>
      <Row>
        <Col span={10} offset={7}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmitForm}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                style={{
                  fontWeight: 700,
                  color: "#999999",
                  fontSize: "16px",
                  height: "51px",
                }}
                placeholder="Email"
                onChange={handleChangeEmail}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input.Password
                style={{
                  fontWeight: 700,
                  color: "#999999",
                  fontSize: "16px",
                  height: "51px",
                }}
                placeholder="Password"
                onChange={handleChangePassword}
              ></Input.Password>
            </Form.Item>
            <Button type="primary" onClick={handleSubmitForm}>Sign In</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default LogIn;
