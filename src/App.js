import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/home.component';

const HatsPage =() =>(
  <div>
    <h1> HatsPage</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Routes>
    </div>
  );
}

export default App;
