import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Graphic from '../containers/Graphic';
import History from '../containers/History';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/' component={History} />
    <Route exact path='/' component={Graphic} />
  </BrowserRouter>
);

export default App;
