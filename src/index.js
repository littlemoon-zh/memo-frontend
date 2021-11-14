import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './pages/Welcome/Welcome';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './pages/Mainpage/Homepage';
import Login from './pages/User/Login';
import UserRegister from './pages/User/Register';
import {Provider} from 'react-redux'
import store from './pages/store';
import GitIssues from "./pages/TemporaryPages/GitIssues";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Route path="/login" exact component={Login}/>
          <Route path='/' exact component={Welcome}/>
          <Route path='/home' exact component={HomePage}/>
          <Route path='/register' exact component={UserRegister}/>
          <Route path='/git' exact component={GitIssues}/>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
