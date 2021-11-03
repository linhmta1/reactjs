import './login.css';
import 'antd/lib/button/style/index.css';
import ButtonAnt from 'antd/lib/button';
import Input from "../shared/Input";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { actGetUserMeAsync } from '../../store/user/action'
import { actPostTokenAsync } from '../../store/auth/actions'

import { useSelector } from 'react-redux';
const Login = () => {
    const CurrentUser = useSelector(state=>state.Auth);
    const CurrentInfo = localStorage.getItem('CurrentInfo') ?  localStorage.getItem('CurrentInfo') : '';
    const dispatch = useDispatch();
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
    function validateFormData({name, value}){
        let error ="";

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
        const error = validateFormData({name, value});
        setFormData({
            ...formData,
            [name] : {
                value,
                error
            }
        });
        console.log('name',name);
    }

    function checkFormIsValid(){
        if(  !formData.username.value ||  !formData.password.value || formData.username.error || formData.password.error){
            return false
        }
        return true
    }

    function handleSubmit(e){
        console.log("dsfà")
        e.preventDefault()
        const isValid = checkFormIsValid();
        if (isValid){
            dispatch(actPostTokenAsync(formData.username.value,formData.password.value)) ;
        }
    }

    return (
        <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
            <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
                <h1 className="form-title text-center">Login</h1>
                <div className="form-login-register">
                <form autoComplete="off" onSubmit={handleSubmit}>
                     <ButtonAnt type="primary">tests</ButtonAnt>
                    <div className="form-control">
                    <label >Username</label>
                    {/* <input type="text" placeholder="Enter Username ..." /> */}
                    <Input 
                        type="text" 
                        placeholder="Enter Username ..."
                        autoComplete="off"
                        name="username"
                        value={formData.username.value}
                        error={formData.username.error}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-control">
                    <Input 
                        type="password" 
                        placeholder="Enter Password ..."
                        autoComplete="off" 
                        title="Password"
                        name="password"
                        value={formData.password.value}
                        error={formData.password.error }
                        onChange={handleOnChange}
                    />
                    </div>
                    {CurrentUser.errorLogin && <span className='form-control-error'>{CurrentUser.errorLogin}</span>}

                    <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button type="primary" size="large" loading={CurrentUser.isLoading} loadingPos = "right"> Submit</Button>
                    <Link to="/register">Regiter</Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="spacing" />
        </main>

    )
}
export default Login;