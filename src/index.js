import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from './components/homepage';
import Login from './components/login';
import UserRegister from './components/user/register';

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
      <ChakraProvider>
        <Route path="/login" exact component={Login} />
        <Route path='/' exact component={App} />
        <Route path='/home' exact component={HomePage} />
        <Route path='/register' exact component={UserRegister} />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
