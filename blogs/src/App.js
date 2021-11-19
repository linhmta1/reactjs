import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import DemoButtonComp from './demo/DemoButtonComp';
import DemoTitle from './demo/DemoTitle';
import DemoInput from './demo/DemoInput';
import DemoArticleItems from './demo/DemoArticleItems';
import Login from './components/Login';
import Registerpage from './pages/Registerpage';
import { useDispatch } from 'react-redux';
import { Routes ,Route } from 'react-router-dom';

import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { actGetCategoryAsync } from "./store/category/action"
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actGetCategoryAsync())
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper-content">
          <Header/>
          <Routes>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register/:slug">
              <Registerpage />
            </Route>
            <Route path="/register">
              <Registerpage />
            </Route>  
            <Route path="/">
              <Homepage />
            </Route>
          </Routes>
          <div className="spacing"></div>
          <Footer/> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
