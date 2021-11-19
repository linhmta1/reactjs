import React from 'react';


import { BrowserRouter, Switch,Route } from 'react-router-dom';

import MainLayout from './pages/Layout/MainLayout';
import Loginpage from './pages/Loginpage';

import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import { actFetchMeAsync } from './store/auth/action';

import history from './router/history';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actFetchMeAsync())
  },[dispatch])
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/">
            <MainLayout/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;