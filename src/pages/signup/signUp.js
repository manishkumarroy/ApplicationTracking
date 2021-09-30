import React, { useContext } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form, Input, Button } from "antd";
import "../login/Login.css";
import dummyLogo from "Assets/image/dummy-logo.png";
import RefContext from "Utilities/refContext";

const SignUpForm = () => {
  const context = useContext(RefContext);
  const { history, actions } = context;
  const onFinish = (values) => {
    actions.signupuser(
      { username: values.username, password: values.password },
      history
    );
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
            className="boldUser"
            label="Email"
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
            className=" "
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

          <Form.Item
            className=" "
            label="Confirm Password"
            name="confirmPassword"
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
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignUpForm;
