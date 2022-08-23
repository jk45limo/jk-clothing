import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInandSignUpPage from './pages/sign-in and sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInandSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
