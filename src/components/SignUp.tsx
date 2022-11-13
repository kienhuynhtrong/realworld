import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Typography, Anchor, Button, Form, Input, Col, Row} from "antd";
import './../../src/style/signup.scss'

const { Title } = Typography;
const { Link } = Anchor;

const SignUp = () => {
  const handleSubmitForm = () => {
  };
  const handleChangeUserName = () => {

  }
  const handleChangeEmail = () => {

  }
  const handleChangePassword = () => {

  }
  return (
    <div className="wrap-signup container">
      <Title className="login-title">Sign Up</Title>
      <Anchor>
        <Link className="login-link" href="#components-anchor-demo-basic" title="Have an account ?" />
      </Anchor>
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
              name="User name"
              rules={[
                {
                  required: true,
                  message: "Please input your user name!",
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
                placeholder="Please input user name"
                onChange={handleChangeUserName}
              ></Input>
            </Form.Item>
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
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
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
            <Button className="btn-submit btn-lg" type="primary" onClick={handleSubmitForm}>Sign In</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default SignUp;
