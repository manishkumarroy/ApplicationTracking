import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form, Input, Button, Checkbox } from "antd";
import "./Login.css";
import dummyLogo from "Assets/image/dummy-logo.png";


const LoginForm = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   function validateForm() {
  //     return email.length > 0 && password.length > 0;
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }

  //   return (
  //     <div className="Login">
  //       <Form onSubmit={handleSubmit}>
  //         <Form.Group size="lg" controlId="email">
  //           <Form.Label>Email</Form.Label>
  //           <Form.Control
  //             autoFocus
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </Form.Group>
  //         <Form.Group size="lg" controlId="password">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control
  //             type="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </Form.Group>
  //         <Button block size="lg" type="submit" disabled={!validateForm()}>
  //           Login
  //         </Button>
  //       </Form>
  //     </div>
  //   );
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
