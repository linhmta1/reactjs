import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actLoginAsync } from "../../store/auth/action";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined,  LockOutlined } from "@ant-design/icons";
import RightLogin from './rightLogin'

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formErr, setFormErr] = useState("");  
  
  console.log(formErr)
  const onFinish = (values) => {
    console.log("Success:", values.username);
      setLoading(true);
      setFormErr("");
      console.log("sdfsấdf");
      dispatch(
        actLoginAsync(values.username, values.password)
      ).then((res) => {
        if (res.ok) {
          history.push("/");
        } else {
          console.log("Error", res.error);
          setFormErr(res.error);
        }
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="auth-container">
        <div className={`h-100 light`}>
          <Row justify="center" className="align-items-stretch h-100">
            <Col xs={20} sm={20} md={24} lg={16}>
              <div className="container d-flex flex-column justify-content-center h-100">
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                    <h1>Sign In</h1>
                    <p>
                      Don't have an account yet?
                      <a href="/auth/register-2">Sign Up</a>
                    </p>

                    <div className="mt-4">
                      <Form
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
                              message: "Please input your username, min length 0, max length 10!",
                              min: 3,
                              max: 99
                            },
                          ]}
                        >
                          <Input prefix={<UserOutlined className="text-primary" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              // type: 'text',
                              message: "Please input your password, min length 0, max length 10!",
                              min: 3,
                              max: 10
                            },
                          ]}
                        >
                          <Input.Password prefix={<LockOutlined className="text-primary" />} placeholder="Password"/>
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
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <RightLogin/>
            
          </Row>
        </div>
      </div>
    </>
  );
};
export default LoginPage;