import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actLoginAsync } from "../../store/auth/action";
import { useHistory } from 'react-router-dom';
import { Row, Col } from "antd";
import { Button, Form, Input, Divider, Alert } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const backgroundURL = "/img/others/img-17.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formErr, setFormErr] = useState('');
  const [formData, setFormData] = useState({
      username: {
          value: '', 
          error: ''
      }, 
      password: {
          value: '', 
          error: ''
      }
  })
  console.log(formData);

  function validateFormData({name, value}){
    let error ='';

    if(name === 'username' && !value ){
        error = 'Username không được rỗng'
    }
    if(name === 'password'){
        if(!value) error = 'Password không được rỗng' 
        else if (value.length < 6)   error = 'Password không nhỏ hơn 6 ký tự'
    }
    return error
  }

  function handleOnChange(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);
    const error = validateFormData({name, value});
    setFormData({
        ...formData,
        [name] : {
          value,
          error
        }
    });
  }

  function checkFormIsValid(){
    if(  !formData.username.value ||  !formData.password.value || formData.username.error || formData.password.error){
        return false
    }
    return true
  }

  function handleSubmit(e){
    e.preventDefault()
    // if(loading){
    //   return
    // }

    const isValid = checkFormIsValid();
    if (isValid){
        setLoading(true);
        setFormErr('');
        console.log("sdfsấdf")

        dispatch(actLoginAsync(formData.username.value, formData.password.value))
        .then (res => {
          if (res.ok) {
            history.push('/');
          } else {
            console.log('Error', res.error);
            setFormErr(res.error);
          }
          setLoading(false);
        });
    }else{
      console.log('không đúng định dạng')
    }
  }

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
                      <Form layout="vertical" name="login-form" autoComplete="off"  onSubmit={handleSubmit}>
                        
                      <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                      onChange={handleOnChange}>
                        <Input />
                      </Form.Item >
                        
                        <Form.Item
                          label="Username"
                          
                          rules={[{ required: true, message: 'Please input your username!' }]}

                        >
                          <Input name="username" onChange={handleOnChange}/>
                        </Form.Item>
                        <Form.Item 
                          rules={[
                            { 
                              required: true,
                              message: 'Please input your email',
                            }
                          ]}

                        >
                          <Input prefix={<MailOutlined className="text-primary" />}                           value={formData.username.value}
                            error={formData.username.error}
                            onChange={handleOnChange}
                            name="username" 
                            label="Email" 
                          />
                        </Form.Item>
                        <Form.Item 
                          label={
                            <div className='d-flex justify-content-between w-100 align-items-center'>
                              <span>Password</span>
                            </div>
                          } 
                          rules={[
                            { 
                              required: true,
                              message: 'Please input your password',
                            }
                          ]}
                        >
                          <Input.Password 
                            prefix={<LockOutlined className="text-primary" />} 

                          />
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" htmlType="submit" block   >
                            Sign In
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={8}>
              <div
                className="d-flex flex-column justify-content-between h-100 px-4"
                style={backgroundStyle}
              >
                <div className="text-right">
                  <img src="/img/logo-white.png" alt="logo" />
                </div>
                <Row justify="center">
                  <Col xs={0} sm={0} md={0} lg={20}>
                    <img
                      className="img-fluid mb-5"
                      src="/img/others/img-18.png"
                      alt=""
                    />
                    <h1 className="text-white">Welcome to emilus</h1>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus ullamcorper nisl erat, vel convallis elit fermentum
                      pellentesque.
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end pb-4">
                  <div>
                    <a
                      className="text-white"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Term & Conditions
                    </a>
                    <span className="mx-2 text-white"> | </span>
                    <a
                      className="text-white"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Privacy & Policy
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
