import React from 'react';
import { useHistory } from "react-router-dom";
import {  Route, Switch } from "react-router-dom";
import MainLayout from './pages/Layout/MainLayout';
import Loginpage from './pages/Loginpage';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import { actFetchMeAsync } from './store/auth/action';

const App =()=> {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    dispatch(actFetchMeAsync()).then((res) => {
      if(!res.ok) {
        history.push('/login')
      }
    }); 
  },[dispatch,history])
  return (
    <div className="App">
        <Switch>
            <Route path="/login">
              <Loginpage />
            </Route>
            <Route path="/">
              <MainLayout/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
