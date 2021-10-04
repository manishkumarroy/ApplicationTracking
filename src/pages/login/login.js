import React, { useContext } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form, Input, Button } from "antd";
import "./Login.css";
import dummyLogo from "Assets/image/dummy-logo.png";
import RefContext from "Utilities/refContext";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const context = useContext(RefContext);
  const { history, actions } = context;
  const onFinish = (values) => {
    actions.login(values, history);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formContainer">
      <div className="formCard ">
        <div className="logoWrapper">
          <img src={dummyLogo} width="100%" height="100%" />
        </div>
        <Form
          className="loginForm"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="boldText"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="boldText"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <h5>
              Not a Member ?{" "}
              <Link style={{ color: "#4341c4" }} exact to="/signup">
                Sign Up
              </Link>
            </h5>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
